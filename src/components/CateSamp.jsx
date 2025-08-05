// components/CateSamp.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../CartContext";
import { Link } from "react-router-dom";

const CateSamp = ({ title, subject, limit = 4 }) => {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart(); // ✅ use the custom hook properly

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/subjects/${subject}.json?limit=${limit}`)
      .then((res) => setBooks(res.data.works))
      .catch((err) => console.error(err));
  }, [subject, limit]);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">{title}</h2>
        <a href={`/categories/${subject}`} className="text-primary text-decoration-none">
          Show More
        </a>
      </div>

      <div className="row">
        {books.map((book, index) => {
          const cover = book.cover_id
            ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
            : "https://via.placeholder.com/150x220?text=No+Cover";
          const bookId = book.key.replace("/works/", "");

          return (
            <div className="col-md-4 col-lg-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm bookcard">
                <img
                  src={cover}
                  alt={book.title}
                  className="book-img"
                  style={{ objectFit: "cover", width: "100%", height: "250px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-1">{book.title.slice(0, 16)}...</h5>
                  <p className="card-text text-muted mb-2">
                    {book.authors?.[0]?.name || "Unknown Author"}
                  </p>
                  <div className="mb-2">
                    <span className="badge bg-success">★ 4.{index + 1}</span>
                  </div>
                  <h6 className="text-primary">₹{499 + index * 10}</h6>

                  <div className="d-grid gap-2 mt-auto">
                    <Link
                      to={`/book/${bookId}`}
                      state={{
                        price: 499 + index * 10,
                      }}
                      className="btn btn-primary"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-outline-primary mb-2"
                      onClick={() =>
                        addToCart({
                          id: bookId,
                          title: book.title,
                          author: book.authors?.[0]?.name || "Unknown Author",
                          price: 499 + index * 10,
                          cover: cover,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CateSamp;

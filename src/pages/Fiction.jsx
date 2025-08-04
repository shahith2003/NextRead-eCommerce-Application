import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Fiction = () => {
  const [books, setBooks] = useState([]);
  const { addToCart } = useCart(); // ✅ Get addToCart from context

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/subjects/fiction.json?limit=50`)
      .then((res) => setBooks(res.data.works))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
    <Navbar />
      <div className="mt-5 container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="mb-0">Fiction Books</h2>
        </div>

        <div className="row">
          {books.map((book, index) => {
            const cover = book.cover_id
              ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
              : "https://via.placeholder.com/150x220?text=No+Cover";

            const price = 499 + index * 10;

            const item = {
              id: book.key.replace("/works/", ""),
              title: book.title,
              author: book.authors?.[0]?.name || "Unknown Author",
              price,
              image: cover,
            };

            return (
              <div className="col-md-4 col-lg-3 mb-4" key={index}>
                <div className="card h-100 shadow-sm bookcard">
                  <img
                    src={cover}
                    alt={book.title}
                    style={{ objectFit: "cover", width: "100%", height: "250px" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-1">{book.title.slice(0, 16)}...</h5>
                    <p className="card-text text-muted mb-2">{item.author}</p>
                    <div className="mb-2">
                      <span className="badge bg-success">★ 4.{index + 1}</span>
                    </div>
                    <h6 className="text-primary">₹{price}</h6>

                    <div className="d-flex gap-2 mt-auto">
                      <a
                        href={`/book/${item.id}`}
                        className="btn btn-sm btn-outline-primary"
                      >
                        Buy Now
                      </a>
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => addToCart(item)}
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
      <Footer />
    </>
  );
};

export default Fiction;

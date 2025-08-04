import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import HomeCard from "../components/HomeCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const handleProceed = () => {
    navigate("/billing");
  };

  useEffect(() => {
    axios
      .get(`https://openlibrary.org/works/${id}.json`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!book) return <div className="text-center mt-5">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src={
                book.covers
                  ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`
                  : "https://via.placeholder.com/300x400?text=No+Cover"
              }
              alt={book.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h2>{book.title}</h2>
            <p>
              <strong>Description:</strong>
            </p>
            <p>
              {typeof book.description === "string"
                ? book.description.slice(0, 200) +
                (book.description.length > 200 ? "..." : "")
                : book.description?.value
                  ? book.description.value.slice(0, 200) +
                  (book.description.value.length > 200 ? "..." : "")
                  : "No description available."}
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-success" onClick={handleProceed}>Proceed to Buy</button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  if (window.history.length > 1) {
                    navigate(-1);
                  } else {
                    navigate("/");
                  }
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <HomeCard />
      <Footer />
    </>
  );
}

export default BookDetail;

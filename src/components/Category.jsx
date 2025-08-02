import React from "react";
import { Link } from "react-router-dom";
import Fiction from "../assets/Fiction.png";
import NonFiction from "../assets/Nonfiction.png";
import Mystery from "../assets/Mystery.png";

function Category() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-5 my-4">
      <Link to="categories/fiction">
        <div className="card border-0 shadow-sm cat-card" style={{ width: "350px" }}>
          <img src={Fiction} className="card-img-top" alt="Fiction" />
        </div>
      </Link>

      <Link to="/categories/non-fiction">
        <div className="card border-0 shadow-sm cat-card" style={{ width: "350px" }}>
          <img src={NonFiction} className="card-img-top" alt="Non-Fiction" />
        </div>
      </Link>

      <Link to="/categories/mystery">
        <div className="card border-0 shadow-sm cat-card" style={{ width: "350px" }}>
          <img src={Mystery} className="card-img-top" alt="Mystery" />
        </div>
      </Link>
    </div>
  );
}

export default Category;

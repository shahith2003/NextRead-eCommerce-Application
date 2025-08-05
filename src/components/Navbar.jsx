import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // make sure this path is correct
import { useCart } from '../CartContext.jsx';
import logo from '../assets/logo-preview.png';

function Navbar() {
    const { cartItems } = useCart(); // ✅ get cart from context
    const cartCount = cartItems.length;
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                // optionally redirect to login
                window.location.href = "/";
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100 top-0 z-3">
            <div className="container-fluid">
                <Link className="w-25 navbar-brand" to="/"><img src={logo} alt="imag" /></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto gap-1 mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/categories" data-bs-toggle="dropdown">Categories</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/categories/fiction">Fiction</Link></li>
                                <li><Link className="dropdown-item" to="/categories/non-fiction">Non-fiction</Link></li>
                                <li><Link className="dropdown-item" to="/categories/mystery">Mystery</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    </ul>

                    <form className="d-flex me-3" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" />
                        <button className="srh-btn" type="submit">Search</button>
                    </form>

                    {/* ✅ Cart Icon with Count */}
                    <Link to="/cart" className="btn btn-outline-primary position-relative">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartCount}
                        </span>
                    </Link>
                    <button onClick={handleLogout} className="btn btn-danger ms-2">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

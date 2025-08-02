import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nextreadblogoc.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed w-100 top-0">
            <div className="container-fluid">
                <Link className="w-25 navbar-brand" to="/"><img src={logo} className='w-75' alt="imag" /></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto gap-4 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/categories/fiction">Fiction</Link></li>
                                <li><Link className="dropdown-item" to="/categories/non-fiction">Non-fiction</Link></li>
                                <li><Link className="dropdown-item" to="/categories/mystery">Mystery</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="srh-btn" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

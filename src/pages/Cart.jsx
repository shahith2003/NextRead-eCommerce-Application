// pages/Cart.jsx
import React from 'react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="container py-5">
            <h2 className="mb-4">Your Cart</h2>

            {cartItems.length === 0 ? (
                <div className="alert alert-info">
                    Your cart is empty. <Link to="/home">Go shopping</Link>
                </div>
            ) : (
                <>
                    <div className="row">
                        {cartItems.map((item) => (
                            <div className="col-md-6 col-lg-4 mb-4" key={item.id}>
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={item.cover}
                                        alt={item.title}
                                        className="card-img-top"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text text-muted">{item.author}</p>
                                        <h6 className="text-primary">₹{item.price}</h6>
                                        <button
                                            className="btn btn-danger mt-auto"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
                        <h4>Total: ₹{total}</h4>
                        <div>
                            <button className="btn btn-outline-danger me-2" onClick={clearCart}>
                                Clear Cart
                            </button>
                            <Link to="/billing" state={{ total }}>
                                <button className="btn btn-success">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

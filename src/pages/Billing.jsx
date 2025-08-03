import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Billing() {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    bankName: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };
  return (
    <div className="container py-5">
      <h2 className="mb-4">Billing & Delivery Details</h2>

      <form onSubmit={handleSubmit}>
        {/* User Info */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Delivery Address</label>
          <textarea
            name="address"
            rows="3"
            required
            className="form-control"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Payment Option */}
        <div className="mb-4">
          <label className="form-label fw-bold">Payment Method</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label">Cash on Delivery</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              value="card"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label">Credit/Debit Card</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              value="netbanking"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="form-check-label">Net Banking</label>
          </div>
        </div>

        {/* Conditional Payment Inputs */}
        {paymentMethod === "card" && (
          <>
            <div className="mb-3">
              <label className="form-label">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 row">
              <div className="col">
                <label className="form-label">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label className="form-label">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  className="form-control"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        )}

        {paymentMethod === "netbanking" && (
          <div className="mb-3">
            <label className="form-label">Bank Name</label>
            <input
              type="text"
              name="bankName"
              className="form-control"
              required
              onChange={handleChange}
            />
          </div>
        )}

        <div className="d-flex gap-2">
          <Link to="/thankyou">
            <button type="submit" className="btn btn-success mt-3">
              Place Order
            </button>
          </Link>
          <Link className="mt-3" onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                navigate("/");
              }
            }}><button
            className="btn btn-primary"
          >
            Go Back
          </button></Link>
        </div>
      </form>
    </div>
  );
}

export default Billing;

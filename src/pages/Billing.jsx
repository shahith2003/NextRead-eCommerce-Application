import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Billing() {
  const navigate = useNavigate();
  const location = useLocation();
  const price = location.state?.price || 499;
  const total = location.state?.total || 0;
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
    if (paymentMethod === "upi") {
      // Redirect to UPI intent with fake UPI ID
      const upiLink = `upi://pay?pa=smartshahith2110@okhdfcbank&pn=NextReadBook&am=${price}&cu=INR`;
      window.location.href = upiLink;

      // Optional: Show instruction to user to return manually
      setTimeout(() => {
        // alert("If payment failed or cancelled, you will be redirected.");
        navigate("/thankyou");
      }, 5000); // fallback
    } else {
      // alert("Order Placed Successfully!");
      navigate("/thankyou");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Billing & Delivery Details</h2>
      <h4 className="text-primary mb-4">
        Order Total: ₹{location.state?.price !== undefined ? price : total}
      </h4>

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
          {["cod", "card", "netbanking", "upi"].map((method) => (
            <div className="form-check" key={method}>
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label text-capitalize">
                {method === "cod"
                  ? "Cash on Delivery"
                  : method === "upi"
                    ? "UPI / GPay / PhonePe"
                    : method}
              </label>
            </div>
          ))}
        </div>

        {/* Conditional Inputs */}
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

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button
            type="submit"
            className={`btn ${paymentMethod === "upi" ? "btn-primary" : "btn-success"
              } mt-3`}
          >
            {paymentMethod === "upi" ? "Pay with UPI" : "Place Order"}
          </button>

          <button
            type="button"
            className="btn btn-secondary mt-3"
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
      </form>
    </div>
  );
}

export default Billing;

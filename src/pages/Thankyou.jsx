import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/homee');
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-4">
      <h1 className="text-success mb-3">🎉 Thank You for Your Purchase!</h1>
      <p className="mb-4 fs-5">Your order has been successfully placed. We’ll notify you once it ships.</p>
      <button className="btn btn-primary px-4 py-2" onClick={handleGoHome}>
        Go to Home
      </button>
    </div>
  );
}

export default ThankYou;

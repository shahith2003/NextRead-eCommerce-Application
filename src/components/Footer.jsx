import React from "react";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#1d3557", color: "white" }}
      className="py-5 mt-5"
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-white">NextRead</h4>
            <p className="text-white-50">
              Your gateway to thousands of books across all genres. Discover,
              read, and enjoy!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="text-white text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3 text-white">Connect With Us</h5>
            <p className="text-white-50 mb-1">
              Email:{" "}
              <a
                href="mailto:support@nextread.com"
                className="text-white text-decoration-none"
              >
                support@nextread.com
              </a>
            </p>
            <p className="text-white-50">Phone: +91 98765 43210</p>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.2)" }} />

        <p className="text-center text-white-50 mb-0">
          &copy; {new Date().getFullYear()} NextRead By Mohammed Shahith A.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

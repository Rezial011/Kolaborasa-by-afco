import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kolaborasa Section */}
        <div className="footer-col">
          <h3>Kolaborasa</h3>
          <p>
            Creating unforgettable culinary experiences through collaborative
            events that empower local businesses and bring communities together.
          </p>
        </div>

        {/* Resources Section */}
        <div className="footer-col">
          <h3>Resources</h3>
          <ul className="footer-links">
            <li>
              <a href="https://batarmyproduction.com/">Blog</a>
            </li>
            <li>
              <a href="https://batarmyproduction.com/">Gallery</a>
            </li>
            <li>
              <a href="https://batarmyproduction.com/">Partner With Us</a>
            </li>
            <li>
              <a href="https://batarmyproduction.com/">Vendor Registration</a>
            </li>
            <li>
              <a href="https://batarmyproduction.com/">Careers</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; 2025 Kolaborasa by AFCO Project. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

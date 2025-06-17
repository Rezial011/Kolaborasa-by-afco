import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Kolaborasa Section */}
        <div className="footer-col">
          <h3>Kolaborasa</h3>
          <p><strong>People behind:</strong></p>
          <ul style={{ paddingLeft: '20px', marginTop: 0, marginBottom: '1rem' }}>
            <li>Mr. Faiz Ahmad (Founder)</li>
            <li>Mrs. Rean Susanti (Co-Founder)</li>
            <li>Mr. Septian Ali (Business Development)</li>
          </ul>
          <p>
            Creating unforgettable culinary experiences through collaborative
            events that empower local businesses and bring communities together.
          </p>

          {/* Social Media Icons */}
          <div className="footer-social">
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/6281316769220"
              className="social-link"
              aria-label="WhatsApp"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                padding: "8px",
                marginRight: "10px"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 256 258"
              >
                <defs>
                  <linearGradient id="whatsappGradient" x1="50%" x2="50%" y1="100%" y2="0%">
                    <stop offset="0%" stopColor="#1faf38" />
                    <stop offset="100%" stopColor="#60d669" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#whatsappGradient)"
                  d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                />
                <path
                  fill="#fff"
                  d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a
              href= "https://www.instagram.com/kolaborasa.afcoproject"
              className="social-link"
              aria-label="Instagram"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)",
                padding: "8px"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="white"
                width="100%"
                height="100%"
              >
                <path d="M224.1 141c-63.6 0-115 51.5-115 115.1 0 63.6 51.4 115 115 115 63.6 0 115-51.4 115-115s-51.5-115-115-115zm0 190.2c-41.6 0-75.1-33.5-75.1-75.1s33.5-75.1 75.1-75.1 75.1 33.5 75.1 75.1-33.5 75.1-75.1 75.1zm146.4-194.3c0 14.9-12 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-.9-19.6-5.1-37-17.6-53.3-12.5-16.3-29.2-27.1-49.4-33.2-20.6-6.2-42.2-6.9-63.5-7.1-21.4-.2-85.6-.2-107 0-21.3.2-42.9.9-63.5 7.1-20.2 6.1-36.9 16.9-49.4 33.2-12.5 16.3-16.7 33.7-17.6 53.3-.9 19.6-.9 78.5-.9 98.1s0 78.5.9 98.1c.9 19.6 5.1 37 17.6 53.3 12.5 16.3 29.2 27.1 49.4 33.2 20.6 6.2 42.2 6.9 63.5 7.1 21.4.2 85.6.2 107 0 21.3-.2 42.9-.9 63.5-7.1 20.2-6.1 36.9-16.9 49.4-33.2 12.5-16.3 16.7-33.7 17.6-53.3.9-19.6.9-78.5.9-98.1s0-78.5-.9-98.1zM398.8 388c-7.8 19.6-23.1 35-42.7 42.7-29.6 11.8-99.9 9.1-132.1 9.1s-102.5 2.6-132.1-9.1c-19.6-7.8-35-23.1-42.7-42.7-11.8-29.6-9.1-99.9-9.1-132.1s-2.6-102.5 9.1-132.1c7.8-19.6 23.1-35 42.7-42.7 29.6-11.8 99.9-9.1 132.1-9.1s102.5-2.6 132.1 9.1c19.6 7.8 35 23.1 42.7 42.7 11.8 29.6 9.1 99.9 9.1 132.1s2.7 102.5-9.1 132.1z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Resources Section */}
        <div className="footer-col">
          <h3>Resources</h3>
          <ul className="footer-links">
            <li><a href="https://batarmyproduction.com/">Blog</a></li>
            <li><a href="https://batarmyproduction.com/">Gallery</a></li>
            <li><a href="https://batarmyproduction.com/">Partner With Us</a></li>
            <li><a href="https://batarmyproduction.com/">Vendor Registration</a></li>
            <li><a href="https://batarmyproduction.com/">Careers</a></li>
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

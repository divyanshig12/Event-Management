import React from "react";
import "./Contact.css"; // Import the CSS file

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>📞 Contact Us</h2>
        <p><strong>Email:</strong> <a href="mailto:support@eventzen.com">support@eventzen.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></p>
      </div>
    </div>
  );
}

export default Contact;

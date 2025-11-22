import React, { useState } from "react";
import "./Donate.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookTitle: "",
    author: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send via mailto for demo (replace with backend API if needed)
    const mailtoLink = `mailto:youremail@example.com?subject=Book Donation&body=
    Name: ${formData.name}%0D%0A
    Email: ${formData.email}%0D%0A
    Book Title: ${formData.bookTitle}%0D%0A
    Author: ${formData.author}%0D%0A
    Category: ${formData.category}%0D%0A
    Description: ${formData.description}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="donate-page">
      <div className="donate-header">
        <h2>Donate Your Books</h2>
        <p>Share the joy of reading! Fill the form below to donate your books.</p>
      </div>

      <form className="donate-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            name="bookTitle"
            value={formData.bookTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="donate-btn">
          Donate Book
        </button>
      </form>
    </div>
  );
};

export default Donate;

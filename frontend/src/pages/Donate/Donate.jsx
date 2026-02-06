import React, { useState } from "react";
import "./Donate.css";
import { assets } from "../../assets/assets";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bookTitle: "",
    author: "",
    category: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // ✅ Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit Form (Web3Forms Working)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    const payload = {
      ...formData,
      access_key: "702b022b-9ab5-4775-9ef1-91bac4a75d1b",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Donation Submitted ✅ We will contact you soon!", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });

        setSuccessMsg(
          "Thank you for donating ❤️ We will connect with you soon!"
        );

        // Reset Form
        setFormData({
          name: "",
          email: "",
          bookTitle: "",
          author: "",
          category: "",
          description: "",
        });
      } else {
        setSuccessMsg("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMsg("Network error! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="donate-page">
      {/* ✅ Toast Container */}
      <ToastContainer />

      {/* ✅ DONOR OFFER BANNER */}
      <div
        className="donor-banner"
        style={{
          backgroundImage: `url(${assets.donors_banner})`,
        }}
      >
        <div className="donor-banner-content">
          <h1>Exciting Offer for Our Donors!</h1>

          <p>
            Our <b>Top Donor of the Month</b> will receive an{" "}
            <b>Exclusive Membership</b> with the benefit to{" "}
            <b>Rent Unlimited Books for One Month.</b>
          </p>

          <p className="banner-small">
            Support Reading. Support Knowledge. Get Rewarded.
          </p>
        </div>
      </div>

      {/* ✅ DONATE FORM */}
      <div className="donate-container" id="donateForm">
        <h2 className="form-title">Donate Your Books</h2>

        <form className="donate-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>
                Your Name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Your Email <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>
                Book Title <span>*</span>
              </label>
              <input
                type="text"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleChange}
                placeholder="Book name"
                required
              />
            </div>

            <div className="form-group">
              <label>
                Author <span>*</span>
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author name"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Fiction / Education / Novel..."
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Condition, edition, notes..."
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`donate-btn ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Donation ❤️"}
          </button>

          {/* ✅ Success Message Below Form */}
          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Donate;

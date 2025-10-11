// import React, { useState } from "react";
// import "./ContactUs.css";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Thanks for reaching out! We'll get back to you soon.");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-header">
//         <h1>Contact Us</h1>
//         <p>
//           Have questions about renting books or issues with your account?  
//           We’re here to help — just fill out the form below!
//         </p>
//       </div>

//       <div className="contact-form-section">
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name<span>*</span></label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Email<span>*</span></label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email address"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Phone Number</label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>Subject<span>*</span></label>
//             <input
//               type="text"
//               name="subject"
//               placeholder="What is your query about?"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Message<span>*</span></label>
//             <textarea
//               name="message"
//               placeholder="Write your message here..."
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>

//           <button type="submit" className="submit-btn">
//             Send Message
//           </button>
//         </form>

//         <div className="contact-info">
//           <h2>Get in Touch</h2>
//           <p>📍 123 BookLane, ReadCity, India</p>
//           <p>📞 +91 98765 43210</p>
//           <p>✉️ support@bookrental.com</p>

//           <div className="social-links">
//             <a href="#"><i className="fab fa-facebook"></i></a>
//             <a href="#"><i className="fab fa-twitter"></i></a>
//             <a href="#"><i className="fab fa-instagram"></i></a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


/// web3 from integration 


import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        setSuccessMsg(
          "Form submitted! We'll get back to you as soon as possible."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
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
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions about renting books or issues with your account? We’re
          here to help — just fill out the form below!
        </p>
      </div>

      <div className="contact-form-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name<span>*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Email<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Subject<span>*</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="What is your query about?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Message<span>*</span>
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`submit-btn ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 123 BookLane, Mumbra, India</p>
          <p>📞 +91 8655089608</p>
          <p>✉️ loopandlogic28@gmail.com</p>

          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

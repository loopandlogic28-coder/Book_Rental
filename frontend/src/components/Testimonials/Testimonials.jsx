import React, { useRef } from 'react';
import back_icon from '../../assets/back-icon.png';
import next_icon from '../../assets/next-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import user_5 from '../../assets/user-4.png';
import './Testimonials.css';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <h2 className="testimonial-title">📚 What Our Customers Say</h2>

      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Aliana Khan</h3>
                  <span>BookEase Rentals, India</span>
                </div>
              </div>
              <p>
                Super easy to rent books here! Affordable prices, smooth delivery, and a
                great variety of titles. My top choice for renting study and fiction books.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Chandan Mallah</h3>
                  <span>BookEase Rentals, India</span>
                </div>
              </div>
              <p>
                Excellent service — books always arrive in great condition and on time.
                Extending rentals is simple, and I love how responsive customer support is!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Priya Singh</h3>
                  <span>BookEase Rentals, India</span>
                </div>
              </div>
              <p>
                Renting instead of buying has saved me so much. The site is clean, fast,
                and delivery is super quick. Highly recommend for students!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Chetan Mallah</h3>
                  <span>BookEase Rentals, India</span>
                </div>
              </div>
              <p>
                I’ve rented multiple times and every experience has been smooth. Great pricing
                and easy return process. The perfect solution for book lovers!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_5} alt="" />
                <div>
                  <h3>Riya Sharma</h3>
                  <span>BookEase Rentals, India</span>
                </div>
              </div>
              <p>
                Such a reliable service! The book quality is great, and I love how they pack
                and deliver on time. Definitely using it again.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Manish Verma</h3>
                  <span>BookEase Rentals, India</span>
                </div>
              </div>
              <p>
                The best book rental platform I’ve used so far. Simple UI, smooth checkout,
                and tons of book options. Totally worth it!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import { Link } from 'react-router-dom';
import './NoOrders.css';

const NoOrders = () => {
  return (
    <div className="no-orders-container">
      <h2 className="no-orders-title">No Orders Yet!</h2>
      <p className="no-orders-message">
        You haven't placed any orders yet. Browse our menu and order your favorite Book now!
      </p>
      <Link to="/exploreall">
        <button className="browse-menu-button">Browse Menu</button>
      </Link>
    </div>
  );
};

export default NoOrders;

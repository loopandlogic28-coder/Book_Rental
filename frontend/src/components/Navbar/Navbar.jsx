/*import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import {useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className="navbar">
      {" "}
      {/*Navbar k liye classname*/ /*} 
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" className="logo" />{" "}
      </Link>
      <ul className="navbar-menu">
        {" "}
        {/*Navbar k menues k liye*/ /*}
       <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>{" "}
        {/*link karne k liye use kiya hai if click kiya tohw oh wahan scroll ho k jayega  */ /*}
       <a
          href="/chetan"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />{" "}
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>{" "}
          {/*dot means the number of things in card that 'number'*/ /*} 
       </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

/* for differnet ok hai yeh 


*/

/*
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { confirmAlert } from "react-confirm-alert"; // Import confirmAlert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchTerm, setSearchTerm] = useState("");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleLogoutClick = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logout(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/chetan?search=${searchTerm}`);
  };

  const handleCategorySelect = () => {
    setSearchTerm("");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="/chetan"
          onClick={() => {
            setMenu("menu");
            handleCategorySelect();
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <form onSubmit={handleSearch} className="navbar-search-form">
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="navbar-search-input"
          />
          <button type="submit" className="navbar-search-button">
            <img src={assets.search_icon} alt="Search" />
          </button>
        </form>
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogoutClick}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
*/

// new one search button add
/*

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { confirmAlert } from "react-confirm-alert"; // Import confirmAlert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleLogoutClick = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logout(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/chetan?search=${searchTerm}`);
  };

  const handleCategorySelect = () => {
    setSearchTerm("");
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home"? "active" : ""}
        >
          home
        </Link>
        <a
          href="/chetan"
          onClick={() => {
            setMenu("menu");
            handleCategorySelect();
          }}
          className={menu === "menu"? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app"? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us"? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        {showSearchBar? (
          <form onSubmit={handleSearch} className="navbar-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="navbar-search-input"
            />
          </form>
        ) : (
          <div className="navbar-search-icon" onClick={handleSearchIconClick}>
            <img src={assets.search_icon} alt="Search" />
          </div>
        )}
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0? "" : "dot"}></div>
        </div>
        {!token? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogoutClick}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

*/

// active button 
/*
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { confirmAlert } from "react-confirm-alert"; // Import confirmAlert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleLogoutClick = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logout(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/chetan?search=${searchTerm}`);
  };

  const handleCategorySelect = () => {
    setSearchTerm("");
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home"? "active" : ""}
        >
          home
        </Link>
        <a
          href="/chetan"
          onClick={() => {
            setMenu("menu");
            handleCategorySelect();
          }}
          className={menu === "menu"? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app"? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us"? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        {showSearchBar? (
          <form onSubmit={handleSearch} className="navbar-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="navbar-search-input"
            />
          </form>
        ) : (
          <div className="navbar-search-icon" onClick={handleSearchIconClick}>
            <img src={assets.search_icon} alt="Search" />
          </div>
        )}
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0? "" : "dot"}></div>
        </div>
        {!token? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogoutClick}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

*/

// logout
/*
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { confirmAlert } from "react-confirm-alert"; // Import confirmAlert
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const [showDropdown, setShowDropdown] = useState(false); // State to manage dropdown visibility

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleLogoutClick = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logout(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/chetan?search=${searchTerm}`);
  };

  const handleCategorySelect = () => {
    setSearchTerm("");
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="/chetan"
          onClick={() => {
            setMenu("menu");
            handleCategorySelect();
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        {showSearchBar ? (
          <form onSubmit={handleSearch} className="navbar-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="navbar-search-input"
            />
          </form>
        ) : (
          <div className="navbar-search-icon" onClick={handleSearchIconClick}>
            <img src={assets.search_icon} alt="Search" />
          </div>
        )}
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div
            className="navbar-profile"
            onClick={toggleDropdown}
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <img src={assets.profile_icon} alt="" />
            {showDropdown && (
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={handleLogoutClick}>
                  <img src={assets.logout_icon} alt="" />
                  <p>Logout</p>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
*/

//repsonsive
/*
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css"; 
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleLogoutClick = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logout(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/chetan?search=${searchTerm}`);
  };

  const handleCategorySelect = () => {
    setSearchTerm("");
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="/chetan"
          onClick={() => {
            setMenu("menu");
            handleCategorySelect();
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        {showSearchBar ? (
          <form onSubmit={handleSearch} className="navbar-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="navbar-search-input"
            />
          </form>
        ) : (
          <div className="navbar-search-icon" onClick={handleSearchIconClick}>
            <img src={assets.search_icon} alt="Search" />
          </div>
        )}
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogoutClick}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
*/
/*

 import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleLogoutClick = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logout(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/chetan?search=${searchTerm}`);
  };

  const handleCategorySelect = () => {
    setSearchTerm("");
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="/chetan"
          onClick={() => {
            setMenu("menu");
            handleCategorySelect();
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        {showSearchBar ? (
          <form onSubmit={handleSearch} className="navbar-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="navbar-search-input"
            />
          </form>
        ) : (
          <div className="navbar-search-icon" onClick={handleSearchIconClick}>
            <img src={assets.search_icon} alt="Search" />
          </div>
        )}
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogoutClick}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
*/

// new 
/*
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleLogoutClick = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logout(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/chetan?search=${searchTerm}`);
  };

  const handleCategorySelect = () => {
    setSearchTerm("");
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="/chetan"
          onClick={() => {
            setMenu("menu");
            handleCategorySelect();
          }}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        {showSearchBar ? (
          <form onSubmit={handleSearch} className="navbar-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="navbar-search-input"
            />
          </form>
        ) : (
          <div className="navbar-search-icon" onClick={handleSearchIconClick}>
            <img src={assets.search_icon} alt="Search" />
          </div>
        )}
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={handleLogoutClick}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
*/

// checking notification

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
 const location = window.location.pathname;
const [menu, setMenu] = useState(
  location === "/" ? "home" :
  location.includes("about") ? "aboutus" :
  location.includes("contact") ? "contactus" :
  location.includes("exploreall") ? "explore" : ""
);

  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  const handleLogoutClick = () => {
    confirmAlert({
      title: "Confirm to logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => logout(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/exploreall?search=${searchTerm}`);
  };

  const handleCategorySelect = () => {
    setSearchTerm("");
  };

  const handleSearchIconClick = () => {
    setShowSearchBar(true);
  };

  return (
    <div className="navbar">
      <Link to="/">
        {/* <img src={assets.grillzwhite} alt="Logo" className="logo" /> */}
        <img src={assets.bookdow} alt="Logo" className="logo" />

        {/* <h1>Clothify</h1> */}
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
       {/* <Link
          to="/chetan"
          onClick={() => {
            setMenu("chetan")
            handleCategorySelect();
          }}
          className={menu === "chetan" ? "active" : ""}
        >
          menu
        </Link> */}
       <Link
          to="/exploreall"
          onClick={() => {
            setMenu("explore")
            handleCategorySelect();
          }}
          className={menu === "explore" ? "active" : ""}
        >
          Explore
        </Link>
        
        {/* <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a> */}
        <Link
          to="/about-us"
          onClick={() => {
            setMenu("aboutus")
            handleCategorySelect();
          }}
          className={menu === "aboutus" ? "active" : ""}
        >
          About-Us
        </Link> 
        {/* <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a> */}
         <Link
          to="/contactus"
          onClick={() => {
            setMenu("contactus")
            handleCategorySelect();
          }}
          className={menu === "contactus" ? "active" : ""}
        >
          Contact-Us
        </Link> 
         <Link
          to="/donate"
          onClick={() => {
            setMenu("donate")
            handleCategorySelect();
          }}
          className={menu === "donate" ? "active" : ""}
        >
          Donate
        </Link> 
        {/* //cht now linnk */}
        {/* <Link
          to="/chatbot"
          onClick={() => {
            setMenu("chatbot")
            handleCategorySelect();
          }}
          className={menu === "chatbot" ? "active" : ""}
        >
          chat-now 
                 </Link>  */}
      </ul>
      <div className="navbar-right">
        {showSearchBar ? (
          <form onSubmit={handleSearch} className="navbar-search-form">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="navbar-search-input"
            />
          </form>
        ) : (
          <div className="navbar-search-icon" onClick={handleSearchIconClick}>
            <img src={assets.search_icon} alt="Search" />
          </div>
        )}
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Login</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={() => navigate('/rentedbooks')}>
                <img src={assets.bag_icon} alt="Orders" />
                <p>Rented Books</p>
              </li>
              <hr />
              <li onClick={handleLogoutClick}>
                <img src={assets.logout_icon} alt="Logout" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

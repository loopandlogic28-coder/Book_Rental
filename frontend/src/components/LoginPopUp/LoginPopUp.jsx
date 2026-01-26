/*import React, {  useContext, useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"

const LoginPopUp = ({ setShowLogin }) => {

  const  {url,setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("Login");
  const [data,setData] = useState({
    name: "",
    email:"",
    password:""

  })

  const onChangeHandler = (event)=> {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

 const onLogin = async (event) => {
    event.preventDefault()
let newUrl = url;
if(currState==="Login") {
  newUrl += "/api/user/login"
}
else{
  newUrl+= "/api/user/register"
}
const response = await axios.post(newUrl,data);
if(response.data.success) {
setToken(response.data.token);
localStorage.setItem("token",response.data.token);
setShowLogin(false)
}
else {
  alert(response.data.message)
}
 }

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? 
            <></>
           : 
            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required />
          }
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
        </div>
        <button type='submit'>{currState === "Sign Up " ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
*/


// stilllogin popup
/*
import React, { useContext, useState, useEffect } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    // Add the class to prevent scrolling when the popup is open
    document.body.classList.add('popup-open');

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('popup-open');
    };
  }, []);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
*/

/// login popup 
/*
import React, { useContext, useState, useEffect } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken, setIsAuthenticated } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    document.body.classList.add('popup-open');
    return () => {
      document.body.classList.remove('popup-open');
    };
  }, []);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
*/

// login poopup working but login not working that ok 

// import React, { useContext, useState, useEffect } from "react";
// import "./LoginPopUp.css";
// import { StoreContext } from "../../context/StoreContext";
// import { assets } from "../../assets/assets";
// import axios from "axios";

// const LoginPopUp = ({ setShowLogin }) => {
//   const { url, setToken, setIsAuthenticated } = useContext(StoreContext);
//   const [currState, setCurrState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   useEffect(() => {
//     document.body.classList.add("popup-open");
//     return () => {
//       document.body.classList.remove("popup-open");
//     };
//   }, []);

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     let newUrl = url;
//     if (currState === "Login") {
//       newUrl += "/api/user/login";
//     } else {
//       newUrl += "/api/user/register";
//     }
//     try {
//       const response = await axios.post(newUrl, data);
//       if (response.data.success) {
//         setToken(response.data.token);
//         localStorage.setItem("token", response.data.token);
//         setIsAuthenticated(true);
//         setShowLogin(false);
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}  // Adjust the path if necessary
//             alt="Close"
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currState === "Login" ? null : (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//             />
//           )}
//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="Your email"
//             required
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="Password"
//             required
//           />
//         </div>
//         <button type="submit">
//           {currState === "Sign Up" ? "Create account" : "Login"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         {currState === "Login" ? (
//           <p>
//             Create a new account?{" "}
//             <span onClick={() => setCurrState("Sign Up")}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setCurrState("Login")}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopUp;


// uppar wla ok hai but , neeccche wale mein inline errorr dal rahe hai 

import React, { useContext, useState, useEffect } from "react";
import "./LoginPopUp.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import axios from "axios";

const LoginPopUp = ({ setShowLogin }) => {
  const { url, setToken, setIsAuthenticated } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 👈 loading state

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    document.body.classList.add("popup-open");
    return () => {
      document.body.classList.remove("popup-open");
    };
  }, []);

  const onChangeHandler = (event) => {
    setError("");
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true); // 👈 start loader

    const newUrl =
      currState === "Login"
        ? `${url}/api/user/login`
        : `${url}/api/user/register`;

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
        setShowLogin(false);
      } else {
        setError(response.data.message || "Something went wrong");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Server error. Please try again later."
      );
    } finally {
      setLoading(false); // 👈 stop loader
    }
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="Close"
            onClick={() => !loading && setShowLogin(false)}
          />
        </div>

        <div className="login-popup-inputs">
          {currState !== "Login" && (
            <input
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              type="text"
              placeholder="Your name"
              required
              disabled={loading}
            />
          )}

          <input
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Your email"
            required
            disabled={loading}
          />

          <input
            name="password"
            value={data.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Password"
            required
            disabled={loading}
          />
        </div>

        {/* Inline error */}
        {error && <p className="login-error-text">{error}</p>}

        {/* 👇 Loading button */}
        <button type="submit" disabled={loading} className="login-btn">
          {loading ? (
            <span className="loader"></span>
          ) : currState === "Sign Up" ? (
            "Create account"
          ) : (
            "Login"
          )}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required disabled={loading} />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {!loading && (
          currState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          )
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;

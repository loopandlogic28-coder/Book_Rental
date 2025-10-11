// import jwt from "jsonwebtoken"

// const authMiddleware = async (req,res,next)=>{
//     const {token } = req.headers;
//     if (!token) {
//         return res.json({success:false,message:"Not Authorized Login Again"})
//     }
//     try {
//         const token_decode = jwt.verify(token,process.env.JWT_SECRET);
//         req.body.userId = token_decode.id;
//         next();
//     } catch (error) {
//         console.log(error);
//         res.json({success:false,message:"Error"})
//     }

// }

// export default authMiddleware;

// changeing for rental button tstgin 

import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authMiddleware = async (req, res, next) => {
  try {
    let token;

    // ✅ Get token from either "Authorization: Bearer <token>" or "token" header
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.headers.token) {
      token = req.headers.token;
    }

    // ❌ No token found
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized. Please log in again.",
      });
    }

    // ✅ Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Fetch user (excluding password)
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found. Token invalid.",
      });
    }

    // ✅ Attach user object to request
    req.user = user;

    console.log("✅ Authenticated user:", req.user._id.toString());

    next(); // proceed to next middleware or controller
  } catch (error) {
    console.error("❌ JWT Error:", error.message);
    res.status(401).json({
      success: false,
      message: "Invalid or expired token. Please log in again.",
    });
  }
};

export default authMiddleware;

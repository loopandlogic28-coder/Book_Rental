// import userModel from "../models/userModel.js"

// // add items to user cart 

// const addToCart = async (req,res) => {
// try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     if(!cartData[req.body.itemId])
//     {
//         cartData[req.body.itemId] = 1
//     }
//     else{
//         cartData[req.body.itemId] += 1;
//     }
//     await userModel.findByIdAndUpdate(req.body.userId,{cartData});
//     res.json({success:true,message:"Added To Cart"});
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"});
// }
// }

// // remove items form user cart

// const removeFromCart = async (req,res) => {
// try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     if (cartData[req.body.itemId]>0) {
//         cartData[req.body.itemId] -= 1;
//     }
//     await userModel.findByIdAndUpdate(req.body.userId,{cartData});
//     res.json({success:true,message:"Removed From Cart"})
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
// }
// }

// // fetchusercart data

// const getCart = async (req,res) => {
// try {
//     let userData = await userModel.findById(req.body.userId);
//     let cartData = await userData.cartData;
//     res.json({success:true,cartData})
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"Error"})
// }
// }

// export {addToCart, removeFromCart, getCart}


// uppar wlaa na all set hai but thode se minor bugs non harming bug tha so usko fix kanre k liye chat gpt se neeche wala code liya hai mittr


import userModel from "../models/userModel.js";

// add item to cart
const addToCart = async (req, res) => {
  try {
    const userId = req.user?.id || req.body.userId;
    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// remove item from cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.user?.id || req.body.userId;
    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const cartData = userData.cartData || {};

    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
      if (cartData[req.body.itemId] === 0) delete cartData[req.body.itemId];
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Removed From Cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// get cart
const getCart = async (req, res) => {
  try {
    const userId = req.user?.id || req.body.userId;
    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, cartData: userData.cartData || {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export { addToCart, removeFromCart, getCart };

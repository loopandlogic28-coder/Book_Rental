import foodModel from "../models/foodModel.js";

import fs from 'fs'

// add food item in database

const addFood = async(req,res) => {
  let image_filename = `${req.file.filename}`

  const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image: image_filename
  });

  try{
        await food.save();
        res.json({success:true,message:"Book Added"})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})

  }
};

// all food list
const listFood = async(req,res) => {
    try {
const foods = await foodModel.find({});
res.json({success:true,data:foods});
    }catch (error) {
     console.log(error);
     res.json({success:false,message:"Error"});
    }
};

//remove food itemm

const removeFood = async (req,res) => {
    try{
const food = await foodModel.findById(req.body.id);
 fs.unlink(`uploads/${food.image}`,()=>{})

 await foodModel.findByIdAndDelete(req.body.id);
 res.json({success:true,message:"Book Removed"})
    }catch(error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//getfood by id testing chetan 
const getFoodById = async (req, res) => {
  try {
    const food = await foodModel.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food not found" });
    }
    res.json({ success: true, data: food });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


// random relate chetan testing 
const getRandomProducts = async (req, res) => {
  const productId = req.params.productId; // Using params instead of query

  try {
    const product = await foodModel.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    const relatedProducts = await foodModel.find({ 
      category: product.category,
      _id: { $ne: productId } // Exclude the current product
    }).limit(4);

    res.json({ success: true, data: relatedProducts });
  } catch (error) {
    console.error("Error in getRandomProducts:", error);
    res.status(500).json({ success: false, message: "Error fetching related products" });
  }
};

export {addFood,listFood,removeFood,getFoodById, getRandomProducts};
import express from "express"
import { addFood,listFood , removeFood, getFoodById,  getRandomProducts} from "../controllers/foodController.js"

import multer from "multer"

const foodRouter = express.Router();


//Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads", //location to store file
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


foodRouter.post("/add",upload.single("image"),addFood) //for sending data on server and after that we will get response form if filled then form data is sent 
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood);
foodRouter.get("/:id", getFoodById); // testing chetan 


foodRouter.get("/related/:productId", getRandomProducts);
// chetan testing  random product


export default foodRouter; 

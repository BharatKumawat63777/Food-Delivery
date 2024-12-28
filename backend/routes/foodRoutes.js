import express from "express";
import { addFood } from "../controllers/foodcontroller.js";
import multer from "multer"; //Image storage system

const foodRouter = express.Router();

// Image Storage Engine
// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });
foodRouter.post("/add",addFood); //, upload.single("image")

export default foodRouter;
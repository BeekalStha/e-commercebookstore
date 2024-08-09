import express from "express"
import { addBook, listBooks, removeBook} from "../controllers/bookController.js"

import multer from "multer"

const bookRouter = express.Router();

// Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename : (req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload= multer({storage:storage})
bookRouter.post("/add", upload.single("image"), addBook)
bookRouter.get("/list", listBooks);
bookRouter.post("/remove", removeBook);

// bookRouter.post("/add", addBook)










export default bookRouter;

import bookModel from "../models/bookModel.js";
import fs from 'fs'


// add book item

const addBook = async(req,res)=> {
    let image_filename = `${req.file.filename}`

    const book= new bookModel({
        name:req.body.name,
        author:req.body.author,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,

    })
    try{
        await book.save();
        res.json({success:true,message:"Foood Added"})
    } catch (error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

//add all booklist
const listBooks = async (req,res) => {
    try{
        const books = await bookModel.find({});
        res.json({success:true, data:books})

    } catch (error) {
        console.log(error);
        res.json({sccess:false, message:"error"})
    }
}

//reomve food item

const removeBook = async(req,res) => {
    try {
        const book = await bookModel.findById(req.body.id);
        fs.unlink(`uploads/${book.image}`, ()=>{})

        await bookModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:"Book Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})

        
    }
}

export {addBook, listBooks, removeBook}
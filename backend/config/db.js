import mongoose from "mongoose";
export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://shresthabikal92:shresthabikal92@cluster0.trp2ye0.mongodb.net/commerce').then(()=>console.log("DB Connected"))
}
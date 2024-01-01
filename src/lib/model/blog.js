import mongoose from "mongoose";
const blogModel= new mongoose.Schema({
    name:String,
    title:String,
    subtitle:String,
    info:String,
    date:String,
    lastedit:String,
    editdate:String
});
export const Blog =mongoose.models.blogs || mongoose.model("blogs",blogModel);
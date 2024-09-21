import mongoose from "mongoose";
 

 const Connect = async() =>{
    try{
        return await mongoose.connect("mongodb://127.0.0.1:27017");
    }
    catch(e){
        throw new Error("Data connection faild")
    }
 }
 export default Connect;
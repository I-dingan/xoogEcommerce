import mongoose from "mongoose";

const Schema = mongoose.Schema

const cartSchema = new Schema({
id:{
    type:String,
    required:true,
}
},{
    strict:false
})

export const createCartModel=mongoose.model("createCart",cartSchema)


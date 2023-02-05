import mongoose from "mongoose";

const Schema = mongoose.Schema

const productSchema = new Schema({
handle:{
    type:String,
    required:true,
},
id:{
    type:Number,
    required:true
}
},{
    strict:false,
})

export const createProductModel=mongoose.model("createProduct",productSchema)


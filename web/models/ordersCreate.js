import mongoose from "mongoose";

const Schema = mongoose.Schema

const ordersSchema = new Schema({
id:{
    type:Number,
    required:true,
}
},{
    strict:false
})

export const createOrderModel=mongoose.model("createOrder",ordersSchema)


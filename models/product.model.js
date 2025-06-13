const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    image : String,
    name : String,
    price: Number,
    discount:{
        type:Number,
        default:0
    },
    bgColor:{
        type:String,

    },
    panecolor: String,
    textcolor:String

});

module.exports=mongoose.model("product",productSchema);
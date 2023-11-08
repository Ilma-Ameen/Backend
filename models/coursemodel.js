const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    shortName:{
        type: String,
        required: true
    },
    fee:{
        type: Number,
    },
    price:{
        type:{
            currency:String,
            amount:Number
        },
    },
},
{
    timeStamp:true,
})

const coursemodel = mongoose.model("courses", courseSchema)
module.exports = coursemodel;

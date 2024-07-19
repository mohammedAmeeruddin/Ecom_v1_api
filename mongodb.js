const mongoose=require("mongoose")
const URL =process.env.MONGO_URL;
exports.connectDB=()=>{
    mongoose.connect(URL)
    .then((res)=>console.log("mongoose is connected"))
    .catch((error)=>console.log("mongo error"))
};
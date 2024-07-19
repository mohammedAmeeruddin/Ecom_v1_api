require("dotenv").config({path:".env"});
const app =require("./app");
const {connectDB}=require("./mongodb");
const PORT =process.env.PORT_NUM;

connectDB();
app.listen(PORT,()=>{
    console.log(`server is connected at ${PORT}`);
});


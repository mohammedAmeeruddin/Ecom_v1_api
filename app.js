const express =require("express");
const app =express();
const cors =require("cors");
const userRouter=require("./src/router/userRouter");
const productRouter=require("./src/router/productRouter");
const orderRouter=require("./src/router/orderRouter");
app.use(cors());
app.use(express.json());

app.use("/api/v1",userRouter);
app.use("/api/v1",productRouter);
app.use("/api/v1",orderRouter);

module.exports=app;

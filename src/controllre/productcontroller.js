const Product = require("../model/productmodel");

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    if (!title || !description || !price) {
      return res.status(403).json({
        message: "Please fill the details" });
    };
    const createdBy = req.user._id;
    const data = {title,description,price,createdBy
    };
    const product = await Product.create(data);
     return res.status(200).json({product,});
  } catch (error) {
   return res.status(500).json({message: error.message});
  };
};

exports.getallProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (error) { return res.status(500).json({
      message: error.message,
    });};
};

exports.updateProduct=async(req,res)=>{
  try {
    const {id} =req.params;
      const userid = req.user._id;
      console.log(userid,"itis a user id")
      const {description,price}=req.body;
      if(!description || !price){
         return res.status(404).json({message:"please fill the details"}); };
         const product=await Product.findById(id);
         if(userid == product.createdBy){
          const newproduct =await Product.findByIdAndUpdate(id,{description,price},{new:true});
          return res.status(200).json({newproduct});
         };
          return res.status(400).json({
            message:"this product is not belong to these user"});
       
  } catch (error) {
    return res.status(500).json({message:error.message});};
};


exports.Deleteproduct=async(req,res)=>{
  try {
    const {id} =req.params;
    await Product.findByIdAndDelete(id);
    return res.status(200).json({message:"product deleted sucessfully"});
  } catch (error) {
    return res.status(500).json({message:error.message});
  };
};

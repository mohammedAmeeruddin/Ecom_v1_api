const User = require("../model/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const T_STRING = process.env.T_STRING;

exports.signUpUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(403).json({
        message: "FIll all the details" });
    };
    const hashPass = await bcrypt.hash(password,10);
    const user = await User.create({ name, email, password: hashPass });
   return res.status(200).json({success: true,user,
      message: "user craeted successfully", });
  } catch (error) {return res.status(500).json({
      message: error?.message });};
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(403).json({
        message: "FIll all the details"});
    };
    const existUser = await User.findOne({email});
    if (!existUser) {
      return res.status(404).json({
        message: " user not Found for this mail" });
    };
    const isPasswordMatch = await bcrypt.compare(password, existUser.password);
    if (!isPasswordMatch) {
      return res.status(403).json({
        message: "Invalid credentials"});
    };
    const token = jwt.sign({ id: existUser._id }, T_STRING);
     return res.status(200).json({success: true,token, user: existUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error?.message });
  };
};

exports.getallUsers=async(req,res)=>{
  try {
    const users=await User.find();
    return res.status(200).json({users});
  } catch (error) {
    return res.status(500).json({
      message: error?.message });
     };
};

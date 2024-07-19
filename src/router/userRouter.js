const express = require('express');
const { signUpUser, loginUser, getallUsers } = require('../controllre/usercontroller');
const { authM } = require('../auth');
const Router  = express.Router();

Router.post("/signup",signUpUser);
Router.post("/login",loginUser);
Router.get("/users",authM,getallUsers);


module.exports = Router
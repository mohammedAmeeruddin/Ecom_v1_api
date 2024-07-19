const Order = require("../model/ordermodel");

exports.createAnOrder = async (req, res) => {
  try {
    const data = {
      userId: req.user._id,
      productId: req.params.id,
    };
    const order = await Order.create(data);
    return res.status(201).json({success: true,order
    });
  } catch (error) {
    return res.status(500).json({message: error?.message});
  };
};

exports.getOrderList = async (req, res) => {
  try {
    const orders = await Order.find();
     return res.status(200).json({orders});
  } catch (error) {
     return res.status(500).json({
      message: error?.message
    });};
};




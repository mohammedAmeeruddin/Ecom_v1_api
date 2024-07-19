const jwt = require("jsonwebtoken");
const User = require("./model/usermodel");

exports.authM = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {return res.status(400).json({
        message: "Token not found",
      });
    };
    const { id } = jwt.verify(token, process.env.T_STRING);
    if (!id) {return res.status(400).json({
        message: "Token is malformed",
      });
    };
    const isUser = await User.findById(id);
    if (!isUser) {return res.status(404).json({
        message: "User not found",
      });
    }
    req.user = isUser;
    next();
  } catch (error) {return res.status(500).json({
      message: error.message,
    });
  };
};

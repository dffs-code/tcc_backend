const User = require("../models/User");

module.exports = async (req, res, next) => {

  const { email } = req.body;
  
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    req.user = user; //envia o usuário encontrado atraves da request
  } catch (err) {
    return res.status(500).json({ error: "try again" });
  }

  return next();
};
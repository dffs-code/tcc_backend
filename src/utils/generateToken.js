const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (id) => {
  return jwt.sign({ id: id }, authConfig.secret, {
    expiresIn: 604800,
  });
};

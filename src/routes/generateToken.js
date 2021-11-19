const { Router } = require("express");
const generateToken = require("../utils/generateToken");

const router = Router();

router
  .get("/generateToken", generateToken(0));

module.exports = router;

const { Router } = require("express");
const router = Router();
const generateToken = require('../utils/generateToken')

router
  .get("/generateToken",
   (req, res)=>{
     res.status(200).json({token: generateToken(0)});
    }
  );

module.exports = router;

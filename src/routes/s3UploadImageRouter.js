const { Router } = require("express");
const uploadImageController = require("../controllers/uploadImageController")

const router = Router();

router
  .get("/s3UploadImage", uploadImageController.generate)

module.exports = router;

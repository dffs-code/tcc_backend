const { Router } = require("express");
const UploadImageController = require("../controllers/uploadImageController")
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .get("/s3UploadImage", UploadImageController.generate)

module.exports = router;

const { Router } = require("express");
const UploadImageController = require("../controllers/UploadImageController")
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .use(authMiddleware)
  .get("/s3UploadImage", UploadImageController.generate)

module.exports = router;

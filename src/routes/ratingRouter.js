const { Router } = require("express");
const RatingController = require("../controllers/RatingController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .get("/rating/all", RatingController.indexAll)
  .get("/rating/:id", RatingController.indexOne)
  .post("/rating", authMiddleware, RatingController.store)
  .put("/rating/:id", authMiddleware,RatingController.update)
  .delete("/rating/:id", authMiddleware, RatingController.delete);

module.exports = router;

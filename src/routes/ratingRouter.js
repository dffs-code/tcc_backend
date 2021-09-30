const { Router } = require("express");
const RatingController = require("../controllers/RatingController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  // .use(authMiddleware)
  .post("/rating", RatingController.store)
  .get("/rating/all", RatingController.indexAll)
  .get("/rating/:id", RatingController.indexOne)
  .put("/rating/:id", RatingController.update)
  .delete("/rating/:id", RatingController.delete);

module.exports = router;

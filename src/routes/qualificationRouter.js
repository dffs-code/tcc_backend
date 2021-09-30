const { Router } = require("express");
const QualificationController = require("../controllers/QualificationController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  // .use(authMiddleware)
  .post("/qualifications", QualificationController.store)
  .get("/qualifications/all", QualificationController.indexAll)
  .get("/qualifications/:id", QualificationController.indexOne)
  .put("/qualifications/:id", QualificationController.update)
  .delete("/qualifications/:id", QualificationController.delete);

module.exports = router;

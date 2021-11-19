const { Router } = require("express");
const SubjectController = require("../controllers/SubjectController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .use(authMiddleware)
  .post("/subjects", SubjectController.store)
  .get("/subjects/all", SubjectController.indexAll)
  .get("/subjects/:id", SubjectController.indexOne)
  .get("/subjectByName/:name", SubjectController.indexByName)
  .get("/subjectsByCategory/:category_id", SubjectController.indexByCategory)
  .put("/subjects/:id", SubjectController.update)
  .delete("/subjects/:id", SubjectController.delete);

module.exports = router;

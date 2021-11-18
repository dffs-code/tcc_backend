const { Router } = require("express");
const CardController = require("../controllers/CardController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  // .use(authMiddleware)
  .post("/card", CardController.store)
  .get("/card/all", CardController.indexAll)
  .get("/card/fullCards", CardController.indexAllFullCards)
  .get("/card/category/:categoryId", CardController.indexAllCardsByCategory)
  .get("/card/subject/:subjectName", CardController.indexAllCardsBySubjectName)
  .get("/card/teacher/:teacherId", CardController.indexAllCardsByTeacher)
  .get("/card/all/filter", CardController.indexCardsByFilter)
  .get("/card/:id", CardController.indexOne)
  .put("/card/:id", CardController.update)
  .delete("/card/:id", CardController.delete);

module.exports = router;

const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .use(authMiddleware)
  .post("/categories", CategoryController.store)
  .get("/categories/all", CategoryController.indexAll)
  .get("/categories/all/subjects", CategoryController.indexAllSubjects)
  .get("/categories/:id", CategoryController.indexOne)
  .put("/categories/:id", CategoryController.update)
  .delete("/categories/:id", CategoryController.delete);

module.exports = router;

const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .get("/categories/all", CategoryController.indexAll)
  .get("/categories/all/subjects", CategoryController.indexAllSubjects)
  .get("/categories/:id", CategoryController.indexOne)
  .post("/categories", authMiddleware, CategoryController.store)
  .put("/categories/:id", authMiddleware, CategoryController.update)
  .delete("/categories/:id", authMiddleware, CategoryController.delete);

module.exports = router;

const { Router } = require("express");
const TeacherController = require("../controllers/TeacherController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .get("/teacher/all", TeacherController.indexAll)
  .get("/teacher/:id", TeacherController.indexOne)
  .post("/teacher", TeacherController.store)
  .put("/teacher/:id", TeacherController.update)
  .delete("/teacher/:id", TeacherController.delete);

module.exports = router;

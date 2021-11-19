const { Router } = require("express");
const TeacherController = require("../controllers/TeacherController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .use(authMiddleware)

  .post("/teacher", TeacherController.store)
  .get("/teacher/all", TeacherController.indexAll)
  .get("/teacher/:id", TeacherController.indexOne)
  .put("/teacher/:id", TeacherController.update)
  .delete("/teacher/:id", TeacherController.delete);

module.exports = router;

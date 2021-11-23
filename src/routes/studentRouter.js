const { Router } = require("express");
const StudentController = require("../controllers/StudentController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .get("/users/students/all", StudentController.indexAll)
  .get("/users/students/:id", StudentController.indexOne)
  .post("/users/students", authMiddleware, StudentController.store)
  .put("/users/students/:id", authMiddleware, StudentController.update)
  .delete("/users/students/:id", authMiddleware, StudentController.delete);

module.exports = router;

const { Router } = require("express");
const StudentController = require("../controllers/StudentController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  // .use(authMiddleware)
  .post("/users/students", StudentController.store)
  .get("/users/students/all", StudentController.indexAll)
  .get("/users/students/:id", StudentController.indexOne)
  .put("/users/students/:id", StudentController.update)
  .delete("/users/students/:id", StudentController.delete);

module.exports = router;

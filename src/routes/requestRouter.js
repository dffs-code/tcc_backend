const { Router } = require("express");
const RequestController = require("../controllers/RequestController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  // .use(authMiddleware)
  .post("/requests", RequestController.store)
  .get("/requests/teacher/:id/all", RequestController.indexAllTeacher)
  .get("/requests/student/:id/all", RequestController.indexAllStudent)
  .get("/requests/:id", RequestController.indexOne)
  .put("/requests/:id", RequestController.update)
  .delete("/requests/:id", RequestController.delete);

module.exports = router;

const { Router } = require("express");
const RequestController = require("../controllers/RequestController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .get("/requests/teacher/:id/all", RequestController.indexAllTeacher)
  .get("/requests/student/:id/all", RequestController.indexAllStudent)
  .get("/requests/:id", RequestController.indexOne)
  .post("/requests", authMiddleware, RequestController.store)
  .put("/requests/:id", authMiddleware, RequestController.update)
  .delete("/requests/:id", authMiddleware, RequestController.delete);

module.exports = router;

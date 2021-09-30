const { Router } = require("express");
const UserController = require("../controllers/UserController");
const verifyExistsMail = require("../middlewares/verifyExistsMail");

const router = Router();

router
  .post("/users", UserController.store)
  .get("/users/all", UserController.indexAll)
  .get("/users/:id", UserController.indexOne)
  .put("/users/:id", UserController.update)
  .delete("/users/:id", UserController.delete)

  .post("/authenticate", verifyExistsMail, UserController.auth);

module.exports = router;

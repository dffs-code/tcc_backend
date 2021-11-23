const { Router } = require("express");
const UserController = require("../controllers/UserController");
const verifyExistsMail = require("../middlewares/verifyExistsMail");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
  .post("/authenticate", verifyExistsMail, UserController.auth)
  .get("/users/all", UserController.indexAll)
  .get("/users/:id", UserController.indexOne)
  .get("/users/:id/profile", UserController.userProfile)
  .post("/users", UserController.store)
  .put("/users/:id", authMiddleware, UserController.update)
  .put("/users/:id/changePassword", authMiddleware, UserController.changePassword)
  .delete("/users/:id", authMiddleware, UserController.delete);


module.exports = router;

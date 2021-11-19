const { Router } = require("express");
const QualificationController = require("../controllers/QualificationController");
const authMiddleware = require("../middlewares/auth");

const router = Router();

router
.get("/qualifications/all", QualificationController.indexAll)
.get("/qualifications/:id", QualificationController.indexOne)
.post("/qualifications", authMiddleware, QualificationController.store)
.put("/qualifications/:id", authMiddleware, QualificationController.update)
.delete("/qualifications/:id", authMiddleware, QualificationController.delete);

module.exports = router;

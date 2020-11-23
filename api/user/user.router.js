const { createReg, getAllReg, getRegById, updateReg, deleteReg, updateStatus } = require("./user.controller");
const router = require("express").Router();

router.post("/", createReg);
router.get("/", getAllReg);
router.get("/:id", getRegById);
router.patch("/", updateReg);
router.delete("/:id", deleteReg);
router.patch("/status", updateStatus);

module.exports = router;

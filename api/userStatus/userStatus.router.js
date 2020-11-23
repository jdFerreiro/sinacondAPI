const { createReg, getAllReg, getRegById, updateReg, deleteReg } = require("./userStatus.controller");
const router = require("express").Router();

router.post("/", createReg);
router.get("/", getAllReg);
router.get("/:id", getRegById);
router.patch("/", updateReg);
router.delete("/:id", deleteReg);

module.exports = router;

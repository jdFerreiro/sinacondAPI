const { createReg, getAllReg, getRegById, updateReg, deleteReg } = require("./rol.controller");
const router = require("express").Router();

router.post("/", createReg);
router.get("/", getAllReg);
router.get("/:id", getRegById);
router.patch("/", updateReg);
router.delete("/:id", deleteReg);

module.exports = router;

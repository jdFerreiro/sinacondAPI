const { createReg, getRegById, updateReg, deleteReg, setUnitReg, deleteUnitReg} = require("./resident.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createReg);
router.post("/setUnit", checkToken, setUnitReg);
router.get("/:id", checkToken, getRegById);
router.patch("/", checkToken, updateReg);
router.delete("/:id", checkToken, deleteReg);
router.delete("/deleteUnit/:unitId/:residentId", checkToken, deleteUnitReg);

module.exports = router;

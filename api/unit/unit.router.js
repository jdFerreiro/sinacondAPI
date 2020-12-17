const { createReg, getAllReg, getRegById, updateReg, deleteReg, updateStatusReg } = require("./unit.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createReg);
router.get("/", checkToken, getAllReg);
router.get("/:id", checkToken, getRegById);
router.patch("/", checkToken, updateReg);
router.patch("/status", checkToken, updateStatusReg);
router.delete("/:id", checkToken, deleteReg);

module.exports = router;

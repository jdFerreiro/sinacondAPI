const { createReg, getAllReg, getRegById, updateReg, deleteReg, updateStatusReg, getRegByUser } = require("./unit.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createReg);
router.get("/byCompany/:id", checkToken, getAllReg);
router.get("/byUser/:id", checkToken, getRegByUser);
router.get("/:id", checkToken, getRegById);
router.patch("/", checkToken, updateReg);
router.patch("/status", checkToken, updateStatusReg);
router.delete("/:id", checkToken, deleteReg);

module.exports = router;

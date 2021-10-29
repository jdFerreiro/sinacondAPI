const { createReg, getAllReg, getRegById, updateReg, deleteReg, updateStatusReg, updateTotalBillReg, updateTotalPayReg} = require("./unit.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createReg);
router.get("/byBulding/:id", checkToken, getAllReg);
router.get("/:id", checkToken, getRegById);
router.patch("/", checkToken, updateReg);
router.patch("/status", checkToken, updateStatusReg);
router.patch("/totalBill", checkToken, updateTotalBillReg);
router.patch("/totalPay", checkToken, updateTotalPayReg);
router.delete("/:id", checkToken, deleteReg);

module.exports = router;

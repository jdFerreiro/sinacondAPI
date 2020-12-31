const { createReg, 
    getAllReg, 
    getRegByDate, 
    updateReg, 
    deleteReg
} = require("./divisas.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createReg);
router.get("/", checkToken, getAllReg);
router.post("/byDate/", checkToken, getRegByDate);
router.patch("/", checkToken, updateReg);
router.delete("/", checkToken, deleteReg);

module.exports = router;

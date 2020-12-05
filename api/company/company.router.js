const { createReg, 
    getAllReg, 
    getRegById, 
    updateReg, 
    deleteReg,
    getChildsReg,
    createChildReg,
} = require("./company.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/company", checkToken, createReg);
router.get("/company", checkToken, getAllReg);
router.get("/:id", checkToken, getRegById);
router.patch("/", checkToken, updateReg);
router.delete("/:id", checkToken, deleteReg);

router.post("/child", checkToken, createChildReg);
router.get("/child", checkToken, getChildsReg);

module.exports = router;

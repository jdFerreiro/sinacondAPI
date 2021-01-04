const { createReg, 
    getAllReg, 
    getRegById, 
    updateReg, 
    deleteReg,
} = require("./provider.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createReg);
router.get("/", checkToken, getAllReg);
router.get("/item/:id", checkToken, getRegById);
router.patch("/", checkToken, updateReg);
router.delete("/item/:id", checkToken, deleteReg);

module.exports = router;

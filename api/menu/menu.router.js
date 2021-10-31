const
    {
        menuUserReg,
        deleteMenuReg, 
        menuRolReg, 
        addReg,
    } = require("./menu.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, addReg);
router.get("/:id", checkToken, menuUserReg);
router.get("/byRol/:id", checkToken, menuRolReg);
router.delete("/", checkToken, deleteMenuReg);

module.exports = router;

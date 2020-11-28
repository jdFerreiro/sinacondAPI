const
    {
        createReg,
        getAllReg,
        getRegById,
        updateReg,
        deleteReg,
        updateStatus,
        loginUser,
        menuUser,
        menuChildUser
    } = require("./user.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/login", loginUser);
router.post("/", checkToken, createReg);
router.get("/", checkToken, getAllReg);
router.get("/:id", checkToken, getRegById);
router.patch("/", checkToken, updateReg);
router.delete("/:id", checkToken, deleteReg);
router.patch("/status", checkToken, updateStatus);

module.exports = router;

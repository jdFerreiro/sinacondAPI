const { getAllReg, getRegById, updateReg, deleteReg, getRegByEmail, getEmailsReg } = require("./resident.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.get("/byUnit/:id", checkToken, getAllReg);
router.post("/item/", checkToken, getRegById);
router.post("/byEmail/", checkToken, getRegByEmail);
router.get("/emails/", checkToken, getEmailsReg);
router.patch("/", checkToken, updateReg);
router.delete("/:id", checkToken, deleteReg);

module.exports = router;

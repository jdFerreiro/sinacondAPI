const { createReg, 
    getAllReg, 
    getRegById, 
    updateReg, 
    deleteReg,
    linkBuildingReg,
    unlinkBuildingReg,
} = require("./provider.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createReg);
router.post("/linkBuilding", checkToken, linkBuildingReg);
router.get("/", checkToken, getAllReg);
router.get("/:id", checkToken, getRegById);
router.patch("/", checkToken, updateReg);
router.delete("/:id", checkToken, deleteReg);
router.delete("/unlinkBuilding/:providerid/:buildingId", checkToken, unlinkBuildingReg);

module.exports = router;

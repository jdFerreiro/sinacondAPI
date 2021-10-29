const { 
    createCountryReg, 
    getAllCountriesData, 
    getCountryReg,
    updateCountryReg,
    deleteCountryReg,
    createStateReg,
    getAllStateData,
    getStateReg,
    updateStateReg,
    deleteStateByCountryReg,
    deleteStateReg,
    createCountyReg,
    getAllCountiesData,
    getCountyReg,
    updateCountyReg,
    deleteCountyByStateReg,
    deleteCountyReg
 } = require("./geography.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/country", checkToken, createCountryReg);
router.get("/country", checkToken, getAllCountriesData);
router.get("/country/:id", checkToken, getCountryReg);
router.patch("/country", checkToken, updateCountryReg);
router.delete("/country/:id", checkToken, deleteCountryReg);

router.post("/state", checkToken, createStateReg);
router.get("/stateByCountry/:id", checkToken, getAllStateData);
router.get("/state/:id", checkToken, getStateReg);
router.patch("/state/", checkToken, updateStateReg);
router.delete("/stateByCountry/:id", checkToken, deleteStateByCountryReg);
router.delete("/state/:id", checkToken, deleteStateReg);

router.post("/county", checkToken, createCountyReg);
router.get("/countyByState/:id", checkToken, getAllCountiesData);
router.get("/county/:id", checkToken, getCountyReg);
router.patch("/county/", checkToken, updateCountyReg);
router.delete("/countyByState/:id", checkToken, deleteCountyByStateReg);
router.delete("/county/:id", checkToken, deleteCountyReg);

module.exports = router;

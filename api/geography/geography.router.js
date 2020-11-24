const { 
    createCountryReg, 
    getAllCountriesData, 
    getCountryReg,
    updateCountryReg,
    deleteCountryReg,
    createProvinceReg,
    getAllProvinceData,
    getProvinceReg,
    updateProvinceReg,
    deleteProvinceByCountryReg,
    deleteProvinceReg,
    createCityReg,
    getAllCitiesData,
    getCityReg,
    updateCityReg,
    deleteCityByProvinceReg,
    deleteCityReg
 } = require("./geography.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/country", checkToken, createCountryReg);
router.get("/country", checkToken, getAllCountriesData);
router.get("/country/:id", checkToken, getCountryReg);
router.patch("/country/", checkToken, updateCountryReg);
router.delete("/country/:id", checkToken, deleteCountryReg);

router.post("/province", checkToken, createProvinceReg);
router.get("/provinceByCountry/:id", checkToken, getAllProvinceData);
router.get("/province/:id", checkToken, getProvinceReg);
router.patch("/province/", checkToken, updateProvinceReg);
router.delete("/provinceByCountry/:id", checkToken, deleteProvinceByCountryReg);
router.delete("/province/:id", checkToken, deleteProvinceReg);

router.post("/city", checkToken, createCityReg);
router.get("/cityByProvince/:id", checkToken, getAllCitiesData);
router.get("/city/:id", checkToken, getCityReg);
router.patch("/city/", checkToken, updateCityReg);
router.delete("/cityByProvince/:id", checkToken, deleteCityByProvinceReg);
router.delete("/city/:id", checkToken, deleteCityReg);

module.exports = router;

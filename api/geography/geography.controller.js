const { createCountry, 
    getCountries, 
    getCountryById,
    updateCountryRec,
    deleteCountryRec,
    createProvince,
    getProvinces,
    getProvinceById,
    updateProvinceRec,
    deleteProvinceByCountryRec,
    deleteProvinceRec,
    createCity,
    getCities,
    getCityById,
    updateCityRec,
    deleteCityByCountryRec,
    deleteCityRec
} = require("./geography.service");

module.exports = {
    createCountryReg: (req, res) => {
        const body = req.body;
        createCountry(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error" + err
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getAllCountriesData: (req, res) => {
        getCountries((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getCountryReg: (req, res) => {
        const id = req.params.id;
        getCountryById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results || results.length == 0) {
                return res.status(404).json({
                    success: 0,
                    message: "No se encontró el registro indicado"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    updateCountryReg: (req, res) => {
        const body = req.body;
        updateCountryRec(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Registro actualizado satisfactoriamente'
            });
        });
    },
    deleteCountryReg: (req, res) => {
        const id = req.params.id;
        deleteCountryRec(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error" + err
                });
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "No se encontró el registro indicado"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Registro elimiado correctamente"
            });
        });
    },
    createProvinceReg: (req, res) => {
        const body = req.body;
        createProvince(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getAllProvinceData: (req, res) => {
        const id = req.params.id;
        getProvinces(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getProvinceReg: (req, res) => {
        const id = req.params.id;
        getProvinceById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results || results.length == 0) {
                return res.status(404).json({
                    success: 0,
                    message: "No se encontró el registro indicado"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    updateProvinceReg: (req, res) => {
        const body = req.body;
        updateProvinceRec(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Registro actualizado satisfactoriamente'
            });
        });
    },
    deleteProvinceReg: (req, res) => {
        const id = req.params.id;
        deleteProvinceRec(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error: "+err
                });
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "No se encontró el registro indicado"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Registro eliminado correctamente"
            });
        });
    },
    deleteProvinceByCountryReg: (req, res) => {
        const id = req.params.id;
        deleteProvinceByCountryRec(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "No se encontró el registro indicado"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Registro elimiado correctamente"
            });
        });
    },
    createCityReg: (req, res) => {
        const body = req.body;
        createCity(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getAllCitiesData: (req, res) => {
        const id = req.params.id;
        getCities(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getCityReg: (req, res) => {
        const id = req.params.id;
        getCityById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results || results.length == 0) {
                return res.status(404).json({
                    success: 0,
                    message: "No se encontró el registro indicado"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    updateCityReg: (req, res) => {
        const body = req.body;
        updateCityRec(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Registro actualizado satisfactoriamente'
            });
        });
    },
    deleteCityReg: (req, res) => {
        const id = req.params.id;
        deleteCityRec(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error: "+err
                });
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "No se encontró el registro indicado"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Registro eliminado correctamente"
            });
        });
    },
    deleteCityByProvinceReg: (req, res) => {
        const id = req.params.id;
        deleteCityByProvinceRec(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "No se encontró el registro indicado"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Registro elimiado correctamente"
            });
        });
    }
};

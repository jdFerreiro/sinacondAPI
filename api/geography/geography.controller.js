const { createCountry, 
    getCountries, 
    getCountryById,
    updateCountryRec,
    deleteCountryRec,
    createState,
    getStates,
    getStateById,
    updateStateRec,
    deleteStateByCountryRec,
    deleteStateRec,
    createCounty,
    getCounties,
    getCountyById,
    updateCountyRec,
    deleteCountyByStateRec,
    deleteCountyRec
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
                message: "Registro eliminado satisfactoriamente"
            });
        });
    },
    createStateReg: (req, res) => {
        const body = req.body;
        createState(body, (err, results) => {
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
    getAllStateData: (req, res) => {
        const id = req.params.id;
        getStates(id, (err, results) => {
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
    getStateReg: (req, res) => {
        const id = req.params.id;
        getStateById(id, (err, results) => {
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
    updateStateReg: (req, res) => {
        const body = req.body;
        updateStateRec(body, (err, results) => {
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
    deleteStateReg: (req, res) => {
        const id = req.params.id;
        deleteStateRec(id, (err, results) => {
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
                message: "Registro eliminado satisfactoriamente"
            });
        });
    },
    deleteStateByCountryReg: (req, res) => {
        const id = req.params.id;
        deleteStateByCountryRec(id, (err, results) => {
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
                message: "Registro eliminado satisfactoriamente"
            });
        });
    },
    createCountyReg: (req, res) => {
        const body = req.body;
        createCounty(body, (err, results) => {
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
    getAllCountiesData: (req, res) => {
        const id = req.params.id;
        getCounties(id, (err, results) => {
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
    getCountyReg: (req, res) => {
        const id = req.params.id;
        getCountyById(id, (err, results) => {
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
    updateCountyReg: (req, res) => {
        const body = req.body;
        updateCountyRec(body, (err, results) => {
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
    deleteCountyReg: (req, res) => {
        const id = req.params.id;
        deleteCountyRec(id, (err, results) => {
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
                message: "Registro eliminado satisfactoriamente"
            });
        });
    },
    deleteCountyByStateReg: (req, res) => {
        const id = req.params.id;
        deleteCountyByStateRec(id, (err, results) => {
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
                message: "Registro eliminado satisfactoriamente"
            });
        });
    }
};

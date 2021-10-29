const { create, 
    getAll, 
    getById, 
    updateRec, 
    deleteRec 
} = require("./unitType.service");

module.exports = {
    createReg: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
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
    getAllReg: (req, res) => {
        getAll((err, results) => {
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
    getRegById: (req, res) => {
        const id = req.params.id;
        getById(id, (err, results) => {
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
    updateReg: (req, res) => {
        const body = req.body;
        updateRec(body, (err, results) => {
            if (err) {
                console.log('service error: ' + err);
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
    deleteReg: (req, res) => {
        const id = req.params.id;
        deleteRec(id, (err, results) => {
            if (err) {
                console.log('service error: ' + err);
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

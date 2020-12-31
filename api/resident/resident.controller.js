const { getAll, getById, updateRec, deleteRec, getEmails, getByEmail } = require("./resident.service");
const encrypt = require("bcrypt");

module.exports = {
    updateReg: (req, res) => {
        const body = req.body;
        const salt = encrypt.genSaltSync(10);
        body.password = encrypt.hashSync(body.password, salt);
        updateRec(body, (err, results) => {
            if (err) {
                console.log('service error: ' + err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                    error: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Registro actualizado satisfactoriamente'
            });
        });
    },
    getEmailsReg: (req, res) => {
        getEmails((err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                    error: err
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getRegByEmail: (req, res) => {
        const body = req.body;
        getByEmail(body, (err, results) => {
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
    getAllReg: (req, res) => {
        const id = req.params.id;
        getAll(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                    error: err
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getRegById: (req, res) => {
        const body = req.body;
        getById(body, (err, results) => {
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
    deleteReg: (req, res) => {
        const id = req.params.id;
        deleteRec(id, (err, results) => {
            if (err) {
                console.log('service error: ' + err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                    error: err
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

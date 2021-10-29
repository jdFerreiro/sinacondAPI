const
    {
        create,
        getAll,
        getById,
        updateRec,
        deleteRec,
        updateRecStatus,
        login,
} = require("./user.service");

const encrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    createReg: (req, res) => {
        const body = req.body;
        const salt = encrypt.genSaltSync(10);
        body.clave = encrypt.hashSync(body.clave, salt);
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
                console.log(err);
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
        const salt = encrypt.genSaltSync(10);
        body.clave = encrypt.hashSync(body.clave, salt);
        updateRec(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Actualización de usario fallida"
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Registro actualizado satisfactoriamente'
            });
        });
    },
    updateStatus: (req, res) => {
        const body = req.body;
        updateRecStatus(body, (err, results) => {
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
    },
    loginUser: (req, res) => {
        const body = req.body;
        login(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database error " + err
                });
            }
            if (!results || !results.length > 0) {
                return res.json({
                    success: 0,
                    message: "Correo electrónico o contraseña inválidos."
                });
            }
            
            encrypt.compare(body.clave, results[0].clave, (err, result) => {
            if (result) {
                results.password = undefined;
                const token = jwt.sign({ result: results }, "51n4c0nd83©u3md3c0", {
                    expiresIn: "1d"
                });
                const userId = results[0].id;

                return res.status(200).json({
                    success: 1,
                    message: "login successfull",
                    userId,
                    token
                });
            }
            else {
                return res.json({
                    success: 0,
                    message: "contraseña inválida."
                });
            }
            })
        });
    }
};

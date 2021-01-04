const { 
    createFactura, 
    getFacturas, 
    getFacturaById, 
    updateFactura,
    deleteFactura,
    createDetalle,
    getDetalles,
    getDetalleById,
    updateDetalle,
    deleteDetalle,
    chequearAprobacion,
    createAprobacion,
    deleteAprobacion
} = require("./factura.service");


module.exports = {
    createFacturaReg: (req, res) => {
        const body = req.body;
        createFactura(body, (err, results) => {
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
    getFacturasReg: (req, res) => {
        const idC = req.params.idC;
        const idU = req.params.idU;
        
        getFacturas({idC, idU}, (err, results) => {
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
    getFacturaReg: (req, res) => {
        const id = req.params.id;
        getFacturaById(id, (err, results) => {
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
    updateFacturaReg: (req, res) => {
        const body = req.body;
        updateFactura(body, (err, results) => {
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
    deleteFacturaReg: (req, res) => {
        const id = req.params.id;
        deleteFactura(id, (err, results) => {
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
                message: "Registro eliminado correctamente"
            });
        });
    },
    createDetalleReg: (req, res) => {
        const body = req.body;
        createDetalle(body, (err, results) => {
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
    getDetalleReg: (req, res) => {
        const id = req.params.id;
        getDetalles(id, (err, results) => {
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
    getDetalleByIdReg: (req, res) => {
        const id = req.params.id;
        getDetalleById(id, (err, results) => {
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
    updateDetalleReg: (req, res) => {
        const body = req.body;
        updateDetalle(body, (err, results) => {
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
    deleteDetalleReg: (req, res) => {
        const id = req.params.id;
        deleteDetalle(id, (err, results) => {
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
                message: "Registro eliminado correctamente"
            });
        });
    },
    checkAprobacion: (req, res) => {
        const body = req.body;
        chequearAprobacion(body, (err, results) => {
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
    createAprobacion: (req, res) => {
        const body = req.body;
        createAprobacion(body, (err, results) => {
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
    deleteAprobacion: (req, res) => {
        const body = req.body;
        deleteAprobacion(body, (err, results) => {
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
                message: "Registro eliminado correctamente"
            });
        });
    },
};

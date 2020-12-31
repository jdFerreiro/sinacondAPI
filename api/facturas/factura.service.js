const pool = require("../../config/database");

module.exports = {
    createFactura: (data, callBack) => {
        pool.query(
            `INSERT INTO factura (idcompany, proveedor, nroDocumento, fechacompra, idStatus, lastStatusDate, createUserId, createdAt)
                            VALUES(?, ?, ?, ?, 1, utc_timestamp, ?, utc_timestamp)`,
            [
                data.idCompany,
                data.proveedor,
                data.nroDocumento,
                data.fechaCompra,
                data.idUser,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create factura service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getFacturas: (id, callBack) => {
        pool.query( 
            `SELECT f.*, SUM(IFNULL(fdME.precioTotal,0)) montoME, SUM(IFNULL(fdLocal.precioTotal,0)) montoLocal, fs.name status
            FROM factura f
                LEFT JOIN facturadetalle fdME ON fdME.idFactura = f.id AND fdME.dolares = 1
                LEFT JOIN facturadetalle fdLocal ON fdLocal.idFactura = f.id AND fdLocal.dolares = 0
                INNER JOIN facturaStatus fs ON fs.id = f.idStatus
            WHERE idcompany = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get facturas service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getFacturaById: (id, callBack) => {
        pool.query(
            `SELECT * FROM factura WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get factura service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateFactura: (data, callBack) => {
        pool.query(
            `UPDATE factura 
            SET idcompany = ?,
                proveedor = ?,
                nroDocumento = ?,
                fechacompra = ?,
                updatedAt = utc_timestamp,
                updatedUserId = ?
            WHERE id = ?;`,
            [
                data.idCompany,
                data.proveedor,
                data.nroDocumento,
                data.fechaCompra,
                data.idUser,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update factura service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteFactura: (id, callBack) => {
        pool.query(
            `DELETE FROM factura WHERE id = ?`,
            [
                id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete factura service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    createDetalle: (data, callBack) => {
        pool.query(
            `INSERT INTO facturaDetalle (idFactura, cantidad, descripción, precioUnitario, dolares, createUserId, createdAt)
                            VALUES(?, ?, ?, ?, ?, ?, utc_timestamp)`,
            [
                data.idFactura,
                data.cantidad,
                data.descripcion,
                data.precio,
                data.dolares,
                data.idUser,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create detalle factura service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getDetalles: (id, callBack) => {
        pool.query( 
            `SELECT *
            FROM facturadetalle
            WHERE idFactura = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get detalles factura service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getDetalleById: (id, callBack) => {
        pool.query(
            `SELECT * FROM facturadetalle WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get detalle factura service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateDetalle: (data, callBack) => {
        pool.query(
            `UPDATE facturadetalle  
            SET idFactura = ?,
                cantidad = ?,
                descripción = ?,
                precioUnitario = ?,
                updatedAt = utc_timestamp,
                updatedUserId = ?
            WHERE id = ?;`,
            [
                data.idFactura,
                data.cantidad,
                data.descripcion,
                data.precio,
                data.idUser,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update detalle factura service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteDetalle: (id, callBack) => {
        pool.query(
            `DELETE FROM facturadetalle where id = ?`,
            [
                id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete detalle factura service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    chequearAprobacion: (data, callBack) => {
        pool.query(
            `SELECT * FROM facturaaprobacion WHERE idfactura = ? AND idUnit = ?;`,
            [
                data.idFactura,
                data.idUnit,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete detalle factura service error: ' + error)
                }

                if (results.length > 0) {
                    return callBack(null, true);
                } else {
                    return callBack(null, false);
                }
            }
        );
    },
    createAprobacion: (data, callBack) => {
        pool.query(
            `INSERT INTO facturaaprobacion (idfactura, idUnit, fechaaprobacion, createUserId, createdAt)
                            VALUES(?, ?, utc_timestamp, ?, utc_timestamp)`,
            [
                data.idFactura,
                data.idUnit,
                data.idUser,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('Aprobar factura service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    deleteAprobacion: (data, callBack) => {
        pool.query(
            `DELETE FROM facturaaprobacion WHERE idfactura = ? AND idUnit = ?;`,
            [
                data.idFactura,
                data.idUnit
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete detalle factura service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
};

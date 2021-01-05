const pool = require("../../config/database");

module.exports = {
    createFactura: (data, callBack) => {
        pool.query(
            `INSERT INTO factura (idcompany, idproveedor, nroDocumento, fechacompra, idStatus, lastStatusDate, createUserId, createdAt)
                            VALUES(?, ?, ?, ?, 1, utc_timestamp, ?, utc_timestamp)`,
            [
                data.idCompany,
                data.idproveedor,
                data.nroDocumento,
                data.fechaCompra,
                data.idUser,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create factura service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getFacturas: (data, callBack) => {
        pool.query( 
            `SELECT f.*
                , fs.name status
                , p.nombre proveedor
                , (SELECT COUNT(*) FROM facturaaprobacion fp WHERE fp.idFactura = f.id) aprobaciones
                , (SELECT COUNT(*) FROM facturaaprobacion fa WHERE fa.idFactura = f.id AND fa.idUnit = ?) aprobado
                , (SELECT SUM(IFNULL(fdME.precioTotal,0)) FROM facturadetalle fdME WHERE fdME.idFactura = f.id AND IFNULL(fdME.dolares,0) = 1) montoME
                , (SELECT SUM(IFNULL(fdME.precioTotal,0)) FROM facturadetalle fdME WHERE fdME.idFactura = f.id AND IFNULL(fdME.dolares,0) = 0) montoLocal
            FROM factura f
                INNER JOIN facturaStatus fs ON fs.id = f.idStatus
                INNER JOIN proveedor p ON p.id = f.idproveedor
            WHERE idcompany = ?`,
            [
                data.idU,
                data.idC
            ],
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
            `SELECT f.*
                , (SELECT SUM(IFNULL(fdME.precioTotal,0)) FROM facturadetalle fdME WHERE fdME.idFactura = f.id AND IFNULL(fdME.dolares,0) = 1) montoME
                , (SELECT SUM(IFNULL(fdME.precioTotal,0)) FROM facturadetalle fdME WHERE fdME.idFactura = f.id AND IFNULL(fdME.dolares,0) = 0) montoLocal
        FROM factura f
             WHERE id = ?`,
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
        console.log(data);
        pool.query(
            `UPDATE factura 
            SET idcompany = ?,
                idproveedor = ?,
                nroDocumento = ?,
                fechacompra = STR_TO_DATE(?),
                updatedAt = utc_timestamp,
                updatedUserId = ?
            WHERE id = ?;`,
            [
                data.idCompany,
                data.idproveedor,
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
            `INSERT INTO facturaDetalle (idFactura, cantidad, descripcion, precioUnitario, dolares, createUserId, createdAt)
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
                return callBack(null, results)
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
                descripcion = ?,
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
    deleteDetalleFactura: (id, callBack) => {
        pool.query(
            `DELETE FROM facturadetalle where idFactura = ?`,
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
                return callBack(null, results)
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
    facturaAprobada: (data, callBack) => {
        pool.query(`CALL factura_status_aprobado(?)`,
            [data.idFactura],
            (error, results, fields) => {
                if (error) {
                    return callBack('Status factura aprobada service error: ' + error)
                }
                return callBack(null, results);
            }
        );
    },
};

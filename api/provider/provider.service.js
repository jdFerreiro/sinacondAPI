const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO proveedor(nombre, identificacion, direccion, totalfacturado, totalpagado, telefono)
                            VALUES(?, ?, ?, ?, ?, ?)`,
            [
                data.name,
                data.identification,
                data.address,
                data.totalBill,
                data.totalPay,
                data.phone
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create provider service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    linkBuilding: (data, callBack) => {
        pool.query(
            `INSERT INTO proveedoredificio(proveedor_id, edificio_id, fechacreacion)
                            VALUES(?, ?, UTC_TIMESTAMP)`,
            [
                data.providerId,
                data.buildingId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create provider service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    unlinkBuilding: (data, callBack) => {
        pool.query(
            `DELETE 
            FROM proveedoredificio
            WHERE proveedor_id = ? AND edificio_id = ?;`,
            [
                data.providerId,
                data.buildingId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create provider service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT *
             FROM proveedor
             ORDER BY nombre`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get provider service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT * FROM proveedor WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get providerById service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(`UPDATE proveedor
                    SET nombre = ?,
                        identificacion = ?, 
                        direccion = ?, 
                        totalfacturado = ?, 
                        totalpagado = ?, 
                        telefono = ?
                    WHERE id = ?;`,
            [
                data.name,
                data.identification,
                data.address,
                data.totalBill,
                data.totalPay,
                data.phone,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update provider service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM proveedor WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete provider service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
};

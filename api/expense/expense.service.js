const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO gasto (
                numerodocumento, fechagasto, fecharegistro, fechaauthorizacion, monto, edificio_id, tipogasto_id,
                proveedor_id, nropartes, mesinicio) 
            VALUES (?,?,?,?,?,?,?,?,?,?)`,
            [
                data.documentId,
                data.documentDate,
                data.recordDate,
                data.authorizationDate,
                data.amount,
                data.buildingId,
                data.expenseTypeId,
                data.providerId,
                data.partsPayNumber,
                data.startMonth
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create expense type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT id, nombre 
            FROM gasto 
            ORDER BY nombre;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get expense type service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT nombre FROM tipogasto WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get expense type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE tipogasto SET nombre = ? WHERE id = ?;
            `,
            [
                data.nombre,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update expense type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM tipogasto WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete expense type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

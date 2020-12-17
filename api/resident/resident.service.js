const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO resident (unitId, name, identificacion, fechacompra, residentTypeId, email, nroTelefonoPrincipal, nroTelefonoSecundario, createUserId, createdAt) 
                        VALUES (?,?,?,?,?,?,?,?,?,UTC_TIMESTAMP)`,
            [
                data.unitId,
                data.name,
                data.identificacion,
                data.fechaCompra,
                data.residentTypeId,
                data.residentTypeId,
                data.email,
                data.nroTelefonoPrincipal,
                data.nroTelefonoSecundario,
                data.userId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create resident service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getAll: (data, callBack) => {
        pool.query(
            `SELECT * FROM resident WHERE unitId = ? ORDER BY name;`,
            [ data.unitId ],
            (error, results, fields) => {
                if (error) {
                    return callBack('get units service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT * FROM resident WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get resident by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE resident 
                SET unitId = ?
                    , name = ?
                    , identificacion = ?
                    , fechaCompra = ?
                    , residentTypeId = ?
                    , email = ?
                    , nroTelefonoPrincipal = ?
                    , nroTelefonoSecundario = ?
                    , updatedAt = UTC_TIMESTAMP
                    , updatedUserId = ? 
                WHERE id = ?;
            `,
            [
                data.unitId,
                data.name,
                data.unitTypeId,
                data.unitConditionId,
                data.userId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update resident service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM resident WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('deleteunit service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

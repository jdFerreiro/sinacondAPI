const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO unit (companyId, name, alicuota, unitTypeId, unitConditionId, statusId, lastStatusDate, createUserId, createdAt, boughtDate) 
                        VALUES (?, ?, ?, ?, ?, 1, UTC_TIMESTAMP, ?, UTC_TIMESTAMP, ?)`,
            [
                data.companyId,
                data.name,
                data.alicuota,
                data.unitTypeId,
                data.unitConditionId,
                data.userId,
                data.boughtDate
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create unit service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: (id, callBack) => {
        pool.query(
            `SELECT *,
                (SELECT COUNT(*) FROM unitresident WHERE unitresident.idUnit = unit.id) residents
            FROM unit 
            WHERE companyId = ? 
            ORDER BY name;`,
            [id],
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
            `SELECT * FROM unit WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unit by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getByUser: (id, callBack) => {
        pool.query(
            `SELECT u.id, concat(c.name, ' - unidad: ', u.name) unit, unr.idrol, c.id companyId
             FROM userresident ur
                JOIN unitresident unr ON unr.idresident = ur.idresident
                JOIN unit u on u.id = unr.idunit
                JOIN company c ON c.id = u.companyId
             WHERE iduser = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unit by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE unit 
                SET companyId = ?
                    , name = ?
                    , alicuota = ?
                    , unitTypeId = ?
                    , unitConditionId = ?
                    , updatedAt = UTC_TIMESTAMP
                    , updatedUserId = ? 
                    , boughtDate = ?
                WHERE id = ?;
            `,
            [
                data.companyId,
                data.name,
                data.alicuota,
                data.unitTypeId,
                data.unitConditionId,
                data.userId,
                data.boughtDate,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update unit service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateStatusRec: (data, callBack) => {
        pool.query(
            `UPDATE unit 
                SET statusId = ?
                    ,lastStatusDate = UTC_TIMESTAMP
                    , updatedAt = UTC_TIMESTAMP
                    , updatedUserId = ? 
                WHERE id = ?;
            `,
            [
                data.statusId,
                data.userId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update unit status service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM unit WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete unit service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

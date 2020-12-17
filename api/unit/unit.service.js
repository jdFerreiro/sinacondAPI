const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO unit (companyId, name, alicuota, unitTypeId, unitConditionId, statusId, lastStatusDate, createUserId, createdAt) 
                        VALUES (?,?,?,?,?,1,UTC_TIMESTAMP,?,UTC_TIMESTAMP)`,
            [
                data.companyid,
                data.name,
                data.alicuota,
                data.unitTypeId,
                data.unitConditionId,
                data.userId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create unit service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getAll: (data, callBack) => {
        pool.query(
            `SELECT * FROM unit Where companyId = ? ORDER BY name;`,
            [ data.companyId ],
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
                WHERE id = ?;
            `,
            [
                data.companyId,
                data.name,
                data.unitTypeId,
                data.unitConditionId,
                data.userId,
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
                    return callBack('deleteunit service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

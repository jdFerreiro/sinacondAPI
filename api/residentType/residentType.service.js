const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO unitresidenttype (id, name, createUserId, createdAt) VALUES (?,?,1,UTC_TIMESTAMP)`,
            [
                data.id,
                data.name
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create Resident Type service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT * FROM unitresidenttype ORDER BY name;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get Resident Type service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT id, name, createUserId, createdAt, updatedUserId, updateAt FROM unitresidenttype WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get Resident Type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE unitresidenttype SET name = ?, updateAt = UTC_TIMESTAMP, updatedUserId = 1 WHERE id = ?;
            `,
            [
                data.name,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update Resident Type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM unitresidenttype WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete Resident Type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

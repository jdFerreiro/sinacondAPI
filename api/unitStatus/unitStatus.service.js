const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO unitstatus (id, name, createUserId, createdAt) VALUES (?,?,1,UTC_TIMESTAMP)`,
            [
                data.id,
                data.name
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create unit status service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT * FROM unitstatus ORDER BY name;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unit status service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT id, name, createUserId, createdAt, updatedUserId, updateAt FROM unitstatus WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unit status service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE unitstatus SET name = ?, updateAt = UTC_TIMESTAMP, updatedUserId = 1 WHERE id = ?;
            `,
            [
                data.name,
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
            `DELETE FROM unitstatus WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete unit status service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

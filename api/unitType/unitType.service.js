const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO unittype (id, name, createUserId, createdAt) VALUES (?,?,1,UTC_TIMESTAMP)`,
            [
                data.id,
                data.name
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create unit Type service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT id, name FROM unittype ORDER BY name;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unit Type service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT id, name, createUserId, createdAt, updatedUserId, updateAt FROM unittype WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unit Type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE unittype SET name = ?, updateAt = UTC_TIMESTAMP, updatedUserId = 1 WHERE id = ?;
            `,
            [
                data.name,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update unit Type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM unittype WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete unit Type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO role (id, name, createUserId, createdAt) VALUES (?,?,1,UTC_TIMESTAMP)`,
            [
                data.id,
                data.name
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('createRol service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT * FROM role ORDER BY name;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('getRoles service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT id, name, createUserId, createdAt, updatedUserId, updateAt FROM role WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('getRolById service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE role SET name = ?, updateAt = UTC_TIMESTAMP, updatedUserId = 1 WHERE id = ?;
            `,
            [
                data.name,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('updateRol service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM role WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('deleteRol service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

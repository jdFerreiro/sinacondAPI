const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO userstatus (id, name, createUserId, createdAt) VALUES (?,?,1,UTC_TIMESTAMP)`,
            [
                data.id,
                data.name
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create user status service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT * FROM userstatus ORDER BY name;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get user status service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT id, name, createUserId, createdAt, updatedUserId, updateAt FROM userstatus WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get user status by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE userstatus SET name = ?, updateAt = UTC_TIMESTAMP, updatedUserId = 1 WHERE id = ?;`,
            [
                data.name,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update user status service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM userstatus WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete user status service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

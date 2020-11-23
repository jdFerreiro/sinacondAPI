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
                    return callBack('createUserStatus service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT * FROM userstatus`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('getUserStatus service error: ' + error)
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
                    return callBack('getUserStatusById service error: ' + error)
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
                    return callBack('updateUserStatus service error: ' + error)
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
                    return callBack('deleteUserStatus service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

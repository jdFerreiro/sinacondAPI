const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO user (name, idRole, email, password, idStatus, lastStatusUpdate, createAt) VALUES(?, ?, ?, ?, ?, ?, UTC_TIMESTAMP);`,
            [
                data.name,
                data.idRole,
                data.email,
                data.password,
                data.idStatus,
                data.lastStatusUpdate
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
            `SELECT * FROM user`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('getAll user service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT id, name, idRole, email, password, lastlogin, idStatus, lastStatusUpdate, createAt, updateAt FROM user WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('getById user service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE user SET name = ?, idRole = ?, email = ?, password = ?, updateAt = UTC_TIMESTAMP WHERE id = ?;`,
            [
                data.name,
                data.idRole,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('updateRec user service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRecStatus: (data, callBack) => {
        pool.query(
            `UPDATE user SET idStatus = ?, lastStatusUpdate = UTC_TIMESTAMP, updateAt = UTC_TIMESTAMP WHERE id = ?;`,
            [
                data.idStatus,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('updateRecStatus user service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM user WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('deleteRec user service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    login: (data, callBack) => {
        pool.query(
            `SELECT * FROM user WHERE email = ?`,
            data.email,
            (error, results, fields) => {
                if (error) {
                    return callBack('login user service error: ' + error);
                }
                return callBack(null, results);
            }
        );
    }

};

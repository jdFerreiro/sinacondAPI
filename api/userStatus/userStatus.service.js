const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO estadousuario (id, nombre) VALUES (?,?)`,
            [
                data.id,
                data.nombre
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
            `SELECT * FROM estadousuario ORDER BY nombre;`,
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
            `SELECT id, nombre FROM estadousuario WHERE id = ?`,
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
            `UPDATE estadousuario SET nombre = ? WHERE id = ?;`,
            [
                data.nombre,
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
            `DELETE FROM estadousuario WHERE id = ?`,
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

const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO tipotelefono (id, nombre) VALUES (?,?)`,
            [
                data.id,
                data.nombre
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create telephone type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT id, nombre FROM tipotelefono ORDER BY nombre;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get telephone type service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT nombre FROM tipotelefono WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get telephone type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE tipotelefono SET nombre = ? WHERE id = ?;
            `,
            [
                data.nombre,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update telephone type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM tipotelefono WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete telephone type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

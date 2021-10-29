const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO condicion (id, nombre) VALUES (?,?)`,
            [
                data.id,
                data.nombre
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create unit condition service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT id, nombre FROM condicion ORDER BY nombre;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unit condition service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT nombre FROM condicion WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unit condition service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE condicion SET nombre = ? WHERE id = ?;
            `,
            [
                data.nombre,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update unit condition service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM condicion WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete unit condition service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

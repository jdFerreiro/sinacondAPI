const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO tipounidad (nombre) VALUES (?)`,
            [
                data.nombre
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create unit Type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT id, nombre FROM tipounidad ORDER BY nombre;`,
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
            `SELECT nombre FROM tipounidad WHERE id = ?`,
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
            `UPDATE tipounidad SET nombre = ? WHERE id = ?;
            `,
            [
                data.nombre,
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
            `DELETE FROM tipounidad WHERE id = ?`,
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

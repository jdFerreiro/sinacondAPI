const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO estadounidad (id, nombre) VALUES (?,?)`,
            [
                data.id,
                data.nombre
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create unit status service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT * FROM estadounidad ORDER BY nombre;`,
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
            `SELECT nombre FROM estadounidad WHERE id = ?`,
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
            `UPDATE estadounidad SET nombre = ? WHERE id = ?;
            `,
            [
                data.nombre,
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
            `DELETE FROM estadounidad WHERE id = ?`,
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

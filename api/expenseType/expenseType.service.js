const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO tipogasto (id, nombre) VALUES (?,?)`,
            [
                data.id,
                data.nombre
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create expense type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT id, nombre FROM tipogasto ORDER BY nombre;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get expense type service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT nombre FROM tipogasto WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get expense type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE tipogasto SET nombre = ? WHERE id = ?;
            `,
            [
                data.nombre,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update expense type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM tipogasto WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete expense type service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

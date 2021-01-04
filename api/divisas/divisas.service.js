const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO divisa (fechaCambio, monto, createUserId, createdAt)
                            VALUES(?, ?, ?, utc_timestamp)`,
            [
                data.fechacambio,
                data.monto,
                data.idUser,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create divisa service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT *
            FROM divisa
            ORDER BY fechaCambio desc`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get divisas service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getBydate: (data, callBack) => {
        pool.query(
            `SELECT * FROM divisa WHERE fechacambio = ?`,
            [data.fecha],
            (error, results, fields) => {
                if (error) {
                    return callBack('get divisas by date service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE divisa SET monto = ?, updatedUserId = ?, updatedAt = utc_timestamp 
            WHERE fechaCambio = ?;`,
            [
                data.monto,
                data.idUser,
                data.fechacambio
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update divisa service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (data, callBack) => {
        pool.query(
            `DELETE FROM divisa WHERE fechaCambio = ?`,
            [data.fecha],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete divisa service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
};

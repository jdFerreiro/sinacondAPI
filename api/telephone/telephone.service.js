const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO telefono (codigoarea, numero, tipotelefono_id) 
            VALUES (?,?,?);`,
            [
                data.phoneCode,
                data.phoneNumber,
                data.phoneTypeId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create telephone service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT t.*, tt.nombre phoneType
            FROM telefono t
                INNER JOIN tipotelefono tt ON tt.id = t.tipotelefono_id;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get telephone service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT t.*, tt.nombre phoneType
            FROM telefono t
                INNER JOIN tipotelefono tt ON tt.id = t.tipotelefono_id
            WHERE t.id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get telephone service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE telefono 
            SET codigoarea = ?, 
                numero = ?, 
                tipotelefono_id = ?
            WHERE id = ?;
            `,
            [
                data.phoneCode,
                data.phoneNumber,
                data.phoneTypeId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update telephone service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM telefono WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete telephone service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

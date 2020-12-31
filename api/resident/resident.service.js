const pool = require("../../config/database");

module.exports = {
    updateRec: (data, callBack) => {
        pool.query(`CALL updateResident(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                data.id,
                data.name,
                data.identificacion,
                data.residenttypeid,
                data.email,
                data.nrotelefonoprincipal,
                data.nrotelefonosecundario,
                data.userId,
                data.unitId,
                data.password,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create resident service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getEmails: callBack => {
        pool.query(
            `SELECT DISTINCT email
             FROM resident 
             ORDER BY email;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get emails service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getByEmail: (data, callBack) => {
        pool.query(
            `SELECT r.*, ur.residenttypeid
            FROM resident r
                LEFT JOIN unitresident ur on ur.idresident = r.id AND ur.idunit = ?
            WHERE email = ?`,
            [
                data.unitId,
                data.email
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('get resident by email service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: (id, callBack) => {
        pool.query(
            `SELECT r.*, rt.name residentType
             FROM unitresident ur
                JOIN resident r ON r.id = ur.idResident
                LEFT JOIN unitresidenttype rt ON rt.id = ur.residentTypeId
            WHERE idunit = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get resident by unitId service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (data, callBack) => {
        pool.query(
            `SELECT r.*, ur.residenttypeid
             FROM resident r
                LEFT JOIN unitresident ur on ur.idresident = r.id AND ur.idunit = ?
             WHERE id = ?`,
            [
                data.unitId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('get resident by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM unitResident WHERE idResident = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('deleteunit service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

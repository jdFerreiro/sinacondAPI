const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO company (id, idParent, name, address, idCountry, idProvince, idCity, zipCode, email, idStatus, 
                                  lastStatusUpdate, isResidence, createUserId, createdAt, tipoIdentificacion, 
                                  nroIdentificacion, telefonoPrincipal, telefonoSecundario)
                            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, utc_timestamp, ?, ?, utc_timestamp, ?, ?, ?, ?)`,
            [
                data.id,
                data.parentId,
                data.name,
                data.address,
                data.idCountry,
                data.idProvince,
                data.idCity,
                data.zipCode,
                data.email,
                data.idStatus,
                data.isResidence,
                data.idUser,
                data.tipoIdentificacion,
                data.nroIdentificacion,
                data.telefonoPrincipal,
                data.telefonoSecundario
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create company service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT *,
                (SELECT COUNT(*) FROM company cmpChld WHERE cmpChld.idParent = cmp.id) buildings
            FROM sinacond.company cmp 
            WHERE idParent is null 
            ORDER BY Name`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get company service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT * FROM company WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get companyById service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE company SET name = ?, idParent = ?, address = ?, idCountry = ?, idProvince = ?, idCity = ?, zipCode = ?, email = ?, 
                                isResidence = ?, updatedUserId = ?, updateAt = utc_timestamp, tipoIdentificacion = ?, 
                                nroIdentificacion = ?, telefonoPrincipal = ?, telefonoSecundario = ? 
            WHERE id = ?;`,
            [
                data.name,
                data.parentId,
                data.address,
                data.idCountry,
                data.idProvince,
                data.idCity,
                data.zipCode,
                data.email,
                data.isResidence,
                data.idUser,
                data.tipoIdentificacion,
                data.nroIdentificacion,
                data.telefonoPrincipal,
                data.telefonoSecundario,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update company service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM company WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete company service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getResidences: callBack => {
        pool.query(
            `SELECT *,
                (SELECT COUNT(*) FROM unit WHERE unit.companyId = cmp.id) units
            FROM sinacond.company cmp
             WHERE isResidence is not null 
             ORDER BY Name`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get residences service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getAdmins: callBack => {
        pool.query(
            `SELECT * ,
                (SELECT COUNT(*) FROM company cmpChld WHERE cmpChld.idParent = cmp.id) buildings
             FROM sinacond.company cmp 
             WHERE isResidence is null 
             ORDER BY Name`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get admins service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
};

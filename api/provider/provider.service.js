const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO proveedor(nombre, nroregistrofiscal, direccion, idcountry, idprovince, idcity, zipcode, 
                                    email, telefonos, createUserId, createdAt)
                            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, utc_timestamp)`,
            [
                data.name,
                data.nroregistrofiscal,
                data.address,
                data.idCountry,
                data.idProvince,
                data.idCity,
                data.zipCode,
                data.email,
                data.telefonos,
                data.idUser,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create provider service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT *
             FROM proveedor
             ORDER BY nombre`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get provider service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT * FROM proveedor WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get providerById service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(`UPDATE proveedor
                    SET nombre = ?,
                        nroregistrofiscal = ?,
                        direccion = ?,
                        idcountry = ?,
                        idprovince = ?,
                        idcity = ?,
                        zipcode = ?,
                        email = ?,
                        telefonos = ?,
                        updatedAt = utc_timestamp,
                        updatedUserId = ?
                    WHERE id = ?;`,
            [
                data.name,
                data.nroregistrofiscal,
                data.address,
                data.idCountry,
                data.idProvince,
                data.idCity,
                data.zipCode,
                data.email,
                data.telefonos,
                data.idUser,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update provider service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM proveedor WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete provider service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
};

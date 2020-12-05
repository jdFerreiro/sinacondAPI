const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO company (id, name, address, idCountry, idProvince, idCity, zipCode, email, idStatus, 
                                  lastStatusUpdate, hasMultipleAdministration, createUserId, createdAt)
                            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, utc_timestamp, ?, ?, utc_timestamp)`,
            [
                data.id,
                data.name,
                data.address,
                data.idCountry,
                data.idProvince,
                data.idCity,
                data.zipCode,
                data.email,
                data.idStatus,
                data.lastStatusUpdate,
                data.MultipleAdministration,
                data.idUser
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('createcompany service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT * FROM company Order By Name`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('getcompany service error: ' + error)
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
                    return callBack('getcompanyById service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE company SET name = ?, address = ?, idCountry = ?, idProvince = ?, idCity = ?, zipCode = ?, email = ?, 
                                idStatus = ?, lastStatusUpdate = ?, hasMultipleAdministration = ?, updatedUserId = ?
                                updateAt = utc_timestamp WHERE id = ?;`,
            [
                data.name,
                data.address,
                data.idCountry,
                data.idProvince,
                data.idCity,
                data.zipCode,
                data.email,
                data.idStatus,
                data.lastStatusUpdate,
                data.MultipleAdministration,
                data.idUser,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('updatecompany service error: ' + error)
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
                    return callBack('deletecompany service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getChilds: (id, callBack) => {
        pool.query(
            `SELECT * FROM company WHERE idParent = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('getChilds service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    createChild: (data, callBack) => {
        pool.query(
            `INSERT INTO company (id, idParent, name, address, idCountry, idProvince, idCity, zipCode, email, idStatus, 
                                  lastStatusUpdate, hasMultipleAdministration, createUserId, createdAt)
                            VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, utc_timestamp, ?, ?, utc_timestamp)`,
            [
                data.id,
                data.name,
                data.idParent,
                data.address,
                data.idCountry,
                data.idProvince,
                data.idCity,
                data.zipCode,
                data.email,
                data.idStatus,
                data.lastStatusUpdate,
                data.MultipleAdministration,
                data.idUser
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('createcompanychild service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    }
};

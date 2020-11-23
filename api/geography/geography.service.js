const pool = require("../../config/database");

module.exports = {
    createCountry: (data, callBack) => {
        pool.query(
            `INSERT INTO country (id, name, createUserId, createdAt) VALUES (?,?,1,UTC_TIMESTAMP)`,
            [
                data.id,
                data.name
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('createCountry Geography service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getCountries: callBack => {
        pool.query(
            `SELECT * FROM country`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('getCountries Geography service error: ' + error)
                }
 
                return callBack(null, results)
            }
        );
    },
    getCountryById: (id, callBack) => {
        pool.query(
            `SELECT id, name, createUserId, createdAt, updatedUserId, updateAt FROM Country WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('getCountryById Geography service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateCountryRec: (data, callBack) => {
        pool.query(
            `UPDATE country SET name = ?, updateAt = UTC_TIMESTAMP, updatedUserId = 1 WHERE id = ?;
            `,
            [
                data.name,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('updateCountryRec Geography service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteCountryRec: (id, callBack) => {
        pool.query(
            `DELETE FROM city WHERE idCountry = ?; DELETE FROM country WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('deleteCountryRec Geography service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    createCity: (data, callBack) => {
        pool.query(
            `INSERT INTO City (id, name, idCountry, createUserId, createdAt) VALUES (?,?,?,UTC_TIMESTAMP)`,
            [
                data.id,
                data.name,
                data.countryId,
                data.createUserId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('createCity Geography service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getCities: callBack => {
        pool.query(
            `SELECT * FROM city WHERE idCountry = ?`,
            [countryId],
            (error, results, fields) => {
                if (error) {
                    return callBack('getCities Geography service error: ' + error)
                }
 
                return callBack(null, results)
            }
        );
    },
    getCityById: (id, callBack) => {
        pool.query(
            `SELECT id, name, idCountry, createUserId, createdAt, updatedUserId, updateAt FROM city WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('getCityById Geography service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateCityRec: (data, callBack) => {
        pool.query(
            `UPDATE city SET name = ?, idCountry = ?, updateAt = UTC_TIMESTAMP, updatedUserId = 1 WHERE id = ?;
            `,
            [
                data.name,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('updateCountryRec Geography service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteCityByCountryRec: (id, callBack) => {
        pool.query(
            `DELETE FROM city WHERE idCountry = ?; DELETE FROM country WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('deleteCountryRec Geography service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteCityRec: (id, callBack) => {
        pool.query(
            `DELETE FROM city WHERE WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('deleteCityRec Geography service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

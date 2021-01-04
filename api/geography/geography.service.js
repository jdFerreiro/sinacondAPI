const pool = require("../../config/database");

module.exports = {
    createCountry: (data, callBack) => {
        pool.query(
            `INSERT INTO country (name, createUserId, createdAt) VALUES (?,?,UTC_TIMESTAMP)`,
            [
                data.name,
                data.userId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create country service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getCountries: callBack => {
        pool.query(
            `SELECT * FROM country ORDER BY name;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get countries service error: ' + error)
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
                    return callBack('get country by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateCountryRec: (data, callBack) => {
        pool.query(
            `UPDATE country SET name = ?, updateAt = UTC_TIMESTAMP, updatedUserId = ? WHERE id = ?;
            `,
            [
                data.name,
                data.userId,
                data.id,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update country service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteCountryRec: (id, callBack) => {
        pool.query(
            `DELETE FROM country WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete country service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    createProvince: (data, callBack) => {
        pool.query(
            `INSERT INTO Province (name, idCountry, createUserId, createdAt) VALUES (?,?,?,UTC_TIMESTAMP)`,
            [
                data.name,
                data.countryId,
                data.userId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create province service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getProvinces: (id, callBack) => {
        pool.query(
            `SELECT * FROM province WHERE idCountry = ? ORDER BY name;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get province service error: ' + error)
                }
 
                return callBack(null, results)
            }
        );
    },
    getProvinceById: (id, callBack) => {
        pool.query(
            `SELECT id, name, idCountry, createUserId, createdAt, updatedUserId, updateAt FROM province WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get province by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateProvinceRec: (data, callBack) => {
        pool.query(
            `UPDATE province SET name = ?, idCountry = ?, updateAt = UTC_TIMESTAMP, updatedUserId = ? WHERE id = ?;
            `,
            [
                data.name,
                data.countryId,
                data.userId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update province service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteProvinceByCountryRec: (id, callBack) => {
        pool.query(
            `DELETE FROM city WHERE idCountry = ?; DELETE FROM country WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete province by country service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteProvinceRec: (id, callBack) => {
        pool.query(
            `DELETE FROM province WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete province service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    createCity: (data, callBack) => {
        pool.query(
            `INSERT INTO City (name, idProvince, createUserId, createdAt) VALUES (?,?,?,UTC_TIMESTAMP)`,
            [
                data.name,
                data.provinceId,
                data.userId,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create city service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getCities: (id, callBack) => {
        pool.query(
            `SELECT * FROM city WHERE idProvince = ? ORDER BY name;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get city service error: ' + error)
                }
 
                return callBack(null, results)
            }
        );
    },
    getCityById: (id, callBack) => {
        pool.query(
            `SELECT id, name, idProvince, createUserId, createdAt, updatedUserId, updateAt FROM city WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get city by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateCityRec: (data, callBack) => {
        pool.query(
            `UPDATE city SET name = ?, idProvince = ?, updateAt = UTC_TIMESTAMP, updatedUserId = ? WHERE id = ?;
            `,
            [
                data.name,
                data.idProvince,
                data.userId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update city service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteCityByProvinceRec: (id, callBack) => {
        pool.query(
            `DELETE FROM city WHERE idProvince = ?; DELETE FROM country WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete city by province service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteCityRec: (id, callBack) => {
        pool.query(
            `DELETE FROM city WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete city service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

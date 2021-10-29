const pool = require("../../config/database");

module.exports = {
    createCountry: (data, callBack) => {
        pool.query(
            `INSERT INTO pais (nombre) VALUES (?)`,
            [
                data.nombre
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
            `SELECT * FROM pais ORDER BY nombre;`,
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
            `SELECT nombre FROM pais WHERE id = ?`,
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
            `UPDATE pais SET nombre = ? WHERE id = ?;
            `,
            [
                data.nombre,
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
            `DELETE FROM pais WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete country service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    createState: (data, callBack) => {
        pool.query(
            `INSERT INTO estado (nombre, pais_id) VALUES (?,?)`,
            [
                data.nombre,
                data.countryId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create state service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getStates: (id, callBack) => {
        pool.query(
            `SELECT id, nombre FROM estado WHERE pais_id = ? ORDER BY nombre;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get state service error: ' + error)
                }
 
                return callBack(null, results)
            }
        );
    },
    getStateById: (id, callBack) => {
        pool.query(
            `SELECT nombre, pais_id FROM estado WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get state by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateStateRec: (data, callBack) => {
        pool.query(
            `UPDATE estado SET nombre = ?, pais_id = ? WHERE id = ?;
            `,
            [
                data.nombre,
                data.countryId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update state service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteStateByCountryRec: (id, callBack) => {
        pool.query(
            `DELETE FROM estado WHERE pais_id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete state by pais service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteStateRec: (id, callBack) => {
        pool.query(
            `DELETE FROM estado WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete state service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    createCounty: (data, callBack) => {
        pool.query(
            `INSERT INTO municipio (nombre, estado_id) VALUES (?,?)`,
            [
                data.nombre,
                data.stateId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create county service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getCounties: (id, callBack) => {
        pool.query(
            `SELECT id, nombre FROM municipio WHERE estado_id = ? ORDER BY nombre;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get city service error: ' + error)
                }
 
                return callBack(null, results)
            }
        );
    },
    getCountyById: (id, callBack) => {
        pool.query(
            `SELECT nombre, estado_id FROM municipio WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get county by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateCountyRec: (data, callBack) => {
        pool.query(
            `UPDATE municipio SET nombre = ?, estado_id = ? WHERE id = ?;
            `,
            [
                data.nombre,
                data.stateId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update county service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteCountyByStateRec: (id, callBack) => {
        pool.query(
            `DELETE FROM municipio WHERE estado_id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete county by state service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteCountyRec: (id, callBack) => {
        pool.query(
            `DELETE FROM municipio WHERE id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete county service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

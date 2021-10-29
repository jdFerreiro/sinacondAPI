const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO edificio (nombre, direccion, municipio_idmunicipio, administradora_id, correoelectronico, identificacion) 
                        VALUES (?,?,?,?,?,?)`,
            [
                data.name,
                data.address,
                data.countyId,
                data.adminId,
                data.email,
                data.identification
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create building service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT building.*, m.nombre county, a.nombre administrator
            FROM edificio building
                INNER JOIN municipio m ON m.id = building.municipio_idmunicipio
                INNER JOIN administradora a ON a.id = building.administradora_id
            ORDER BY building.nombre;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get buildings service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT building.*, m.nombre county, a.nombre administrator
            FROM edificio building
                INNER JOIN municipio m ON m.id = building.municipio_idmunicipio
                INNER JOIN administradora a ON a.id = building.administradora_id
            WHERE building.id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get building by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE edificio 
                SET nombre = ?
                    , direccion = ?
                    , municipio_idmunicipio = ?
                    , administradora_id = ?
                    , correoelectronico = ?
                    , identificacion = ?
                WHERE id = ?;
            `,
            [
                data.name,
                data.address,
                data.countyId,
                data.adminId,
                data.email,
                data.identification,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update building service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM edificio WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete building service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

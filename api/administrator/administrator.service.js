const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO administradora (nombre, direccion, municipio_idmunicipio, codigopostal, correoelectronico, identificacion, telefono_id) 
                        VALUES (?,?,?,?,?,?,?)`,
            [
                data.name,
                data.address,
                data.countyId ?? null,
                data.zipCode ?? null,
                data.email ?? null,
                data.identification ?? null,
                data.phoneId ?? null,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create administrator service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT admin.*, m.nombre county, t.codigoarea phoneArea, t.numero phoneNumber, tt.nombre phoneType
            FROM administradora admin
                LEFT JOIN municipio m ON m.id = admin.municipio_idmunicipio
                LEFT JOIN telefono t ON t.id = admin.telefono_id
                LEFT JOIN tipotelefono tt ON tt.id = t.tipotelefono_id
            ORDER BY admin.nombre;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('get administrators service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT admin.*, m.nombre county, t.codigoarea phoneArea, t.numero phoneNumber, tt.nombre phoneType
            FROM administradora admin
                LEFT JOIN municipio m ON m.id = admin.municipio_idmunicipio
                LEFT JOIN telefono t ON t.id = admin.telefono_id
                LEFT JOIN tipotelefono tt ON tt.id = t.tipotelefono_id
            WHERE admin.id = ?
            ORDER BY admin.nombre;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get administrator by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE administradora 
                SET nombre = ?
                    , direccion = ?
                    , municipio_idmunicipio = ?
                    , codigopostal = ?
                    , correoelectronico = ?
                    , identificacion = ?
                    , telefono_id = ? 
                WHERE id = ?;
            `,
            [
                data.name,
                data.address,
                data.countyId,
                data.zipCode,
                data.email,
                data.identification,
                data.phoneId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update administrator service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM administradora WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete administrator service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

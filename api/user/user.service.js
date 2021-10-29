const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO usuario (email, clave, fechaestado, primeravez, nombre, apellidos, identificacion, estadousuario_id, rol_id) 
                VALUES(?, ?, UTC_TIMESTAMP, 1, ?, ?, ?, ?, ?);`,
            [
                data.email,
                data.clave,
                data.nombre,
                data.apellidos,
                data.identificacion,
                data.idStatus,
                data.idRol
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create user service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT * FROM usuario WHERE id <> 1 ORDER BY apellidos, nombre;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('getAll user service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT * FROM usuario WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('getById user service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE usuario 
                SET email = ?, clave = ?, fechaestado = UTC_TIMESTAMP, nombre = ?, apellidos = ?, identificacion = ?, rol_id = ? 
                WHERE id = ?;`,
            [
                data.email,
                data.clave,
                data.nombre,
                data.apellidos,
                data.identificacion,
                data.idRol,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('updateRec user service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRecStatus: (data, callBack) => {
        pool.query(
            `UPDATE usuario SET estadousuario_id = ?, fechaestado = UTC_TIMESTAMP WHERE id = ?;`,
            [
                data.idStatus,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update status user service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM usuario WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete user service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    login: (data, callBack) => {
        pool.query(
            `SELECT * FROM usuario WHERE email = ?`,
            data.email,
            (error, results, fields) => {
                if (error) {
                    return callBack('login user service error: ' + error);
                }
                return callBack(null, results);
            }
        );
    }

};

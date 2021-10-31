const pool = require("../../config/database");

module.exports = {
    addMenuRol: (data, callBack) => {
        pool.query(
            `INSERT INTO modulo_rol (rol_id, modulo_id) VALUES (?,?)`,
            [
                data.idRol,
                data.idMenu,
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create menu service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    menuByRol: (id, callback) => {
        pool.query(
            `SELECT m.*
            FROM modulo m
                LEFT JOIN modulo_rol rm on rm.modulo_id = m.id
            WHERE IFNULL(m.modulo_id, 0) = 0 AND rm.rol_id = ?;`, 
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback('get menu by rol service error: ' + error);
                }
                return callback(null, results);
            }
        );
    },
    menuChilds: (id, callback) => {
        pool.query(
            `SELECT m.*
            FROM modulo m
            WHERE m.modulo_id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback('get menu childs service error: ' + error);
                }
                return callback(null, results);
            }
        );
    },
    menuRol: (id, callback) => {
        pool.query(
            `SELECT rm.rol_id, m.*
            FROM modulo m
                LEFT JOIN modulo_rol rm ON rm.modulo_id = m.id AND rm.rol_id = ?
            `,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback('get menu rol service error: ' + error);
                }
                return callback(null, results);
            }
        );
    },
    deleteMenuOption: (data, callback) => {
        pool.query(
            `DELETE rm
            FROM modulo_rol rm
            WHERE rm.rol_id = ? AND rm.modulo_id IN (SELECT id FROM modulo WHERE id = ? OR modulo_id = ?);`,
            [
                data.idRol,
                data.idMenu,
                data.idMenu,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback('delete menu service error: ' + error);
                }
                return callback(null, results);
            }
        );
    },

};

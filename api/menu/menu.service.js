const pool = require("../../config/database");

module.exports = {
    addMenuRol: (data, callBack) => {
        pool.query(
            `INSERT INTO rolemenu (idrol, idmenu, createUserId, createdAt) VALUES (?,?,?,UTC_TIMESTAMP)`,
            [
                data.idRol,
                data.idMenu,
                data.idUser
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('createRol service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    menuUser: (id, callback) => {
        pool.query(
            `SELECT m.*
            FROM rolemenu mr 
                JOIN menu m ON m.id = mr.idmenu
            WHERE mr.idrol = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback('login user service error: ' + error);
                }
                return callback(null, results);
            }
        );
    },
    menuRol: (id, callback) => {
        pool.query(
            `SELECT rm.idrol, m.*
            FROM menu m
                LEFT JOIN rolemenu rm ON rm.idMenu = m.id AND rm.idrol = ?
            `,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback('login user service error: ' + error);
                }
                return callback(null, results);
            }
        );
    },
    deleteMenuOption: (data, callback) => {
        pool.query(
            `DELETE rm
            FROM rolemenu rm
            WHERE rm.idrol = ? AND rm.idMenu IN (SELECT id FROM menu WHERE id = ? OR idParent = ?);`,
            [
                data.idRol,
                data.idMenu,
                data.idMenu,
            ],
            (error, results, fields) => {
                if (error) {
                    return callback('login user service error: ' + error);
                }
                return callback(null, results);
            }
        );
    },

};

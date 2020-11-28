const pool = require("../../config/database");

module.exports = {
    menuMainOptions: (id, callback) => {
        pool.query(
            `SELECT m.id, m.name, m.route
            FROM usermenu um
            JOIN menu m ON m.id = um.idmenu
            WHERE m.idParent is null AND um.iduser = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback('login user service error: ' + error);
                }
                return callback(null, results);
            }
        );
    },
    menuChildOptions: (data, callback) => {
        pool.query(
            `SELECT m.id, m.name, m.route
            FROM usermenu um
            JOIN menu m ON m.id = um.idmenu
            WHERE m.idParent = ? AND um.iduser = ?;`,
            [
                data.idParent,
                data.idUser
            ],
            (error, results, fields) => {
                if (error) {
                    return callback('login user service error: ' + error);
                }
                return callback(null, results);
            }
        );
    }

};

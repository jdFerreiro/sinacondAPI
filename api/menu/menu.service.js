const pool = require("../../config/database");

module.exports = {
    menuUser: (id, callback) => {
        pool.query(
            `SELECT m.id, m.name, idParent, route
            FROM usermenu um
                JOIN menu m ON m.id = um.idmenu
            WHERE um.iduser = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback('login user service error: ' + error);
                }
                return callback(null, results);
            }
        );
    }

};

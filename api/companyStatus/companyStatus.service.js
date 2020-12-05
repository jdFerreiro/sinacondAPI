const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO companyStatus (id, name, createUserId, createdAt) VALUES (?,?,1,UTC_TIMESTAMP)`,
            [
                data.id,
                data.name
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('createCompanyStatus service error: ' + error)
                }
                return callBack(null, results[0])
            }
        );
    },
    getAll: callBack => {
        pool.query(
            `SELECT * FROM companyStatus ORDER BY name;`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack('getCompanyStatuses service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT id, name, createUserId, createdAt, updatedUserId, updateAt FROM companyStatus WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('getCompanyStatusById service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE companyStatus SET name = ?, updateAt = UTC_TIMESTAMP, updatedUserId = 1 WHERE id = ?;
            `,
            [
                data.name,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('updateCompanyStatus service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM companyStatus WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('deleteCompanyStatus service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

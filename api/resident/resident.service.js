const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO copropietario (nombre, apellido, correoelectronico, fechaultimacondicion, telefono_id) 
                        VALUES (?,?,?,?,?)`,
            [
                data.name,
                data.surname,
                data.email,
                data.lastCondition,
                data.telephone_id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create resident service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    setUnit: (data, callBack) => {
        pool.query(
            `INSERT INTO unidadresidente (unidad_id, copropietario_id, fecharegistro) 
                        VALUES (?,?,?)`,
            [
                data.unitId,
                data.residentId,
                data.recordDate
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create resident service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT resident.*, tt.nombre phoneType, t.codigoarea phoneCode, t.numero phoneNumber
            FROM copropietario resident
                INNER JOIN telefono t ON t.id = resident.telefono_id
                INNER JOIN tipotelefono tt ON tt.id = t.tipotelefono_id
            WHERE resident.id = ?;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get resident by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE copropietario 
                SET nombre = ?, 
                    apellido = ?, 
                    correoelectronico = ?, 
                    fechaultimacondicion = ?, 
                    telefono_id = ?
                WHERE id = ?;
            `,
            [
                data.name,
                data.surname,
                data.email,
                data.lastCondition,
                data.telephone_id,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update resident service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM copropietario WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete resident service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteUnitRec: (data, callBack) => {
        pool.query(
            `DELETE 
            FROM unidadresidente 
            WHERE unidad_id = ? 
                AND copropietario_id = ?;`,
            [
                data.unitId, 
                data.residentId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete resident service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
};

const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO unidad (identificacion, piso, alicuota, fechaultimoestado, fechaultimopropietario, totalrecibo, totalpago, tipounidad_id, estadounidad_id, edificio_id, condicion_id) 
                        VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.identification,
                data.floor,
                data.percent,
                data.lastStateDate,
                data.lastCopropertyDate,
                data.totalCosts,
                data.totalPays,
                data.typeId,
                data.stateId,
                data.buildingId,
                data.conditionId
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('create unidad service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getAll: (id, callBack) => {
        pool.query(
            `SELECT u.*, cond.nombre 'condition', edf.nombre building, edoUnd.nombre estatus, tipUnd.nombre UnitType,
                (SELECT COUNT(*) FROM unidadresidente WHERE unidadresidente.unidad_id = u.id) residents
            FROM unidad u
                INNER JOIN condicion cond ON cond.id = u.condicion_id
                INNER JOIN edificio edf ON edf.id = u.edificio_id
                INNER JOIN estadounidad edoUnd ON edoUnd.id = u.estadounidad_id
                INNER JOIN tipounidad tipUnd ON tipUnd.id = u.tipounidad_id
            WHERE edificio_id = ? 
            ORDER BY u.identificacion;`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unidades service error: ' + error)
                }

                return callBack(null, results)
            }
        );
    },
    getById: (id, callBack) => {
        pool.query(
            `SELECT u.*, cond.nombre 'condition', edf.nombre building, edoUnd.nombre estatus, tipUnd.nombre UnitType,
                (SELECT COUNT(*) FROM unidadresidente ur WHERE ur.unidad_Id = u.id) residents
            FROM unidad u
                INNER JOIN condicion cond ON cond.id = u.condicion_id
                INNER JOIN edificio edf ON edf.id = u.edificio_id
                INNER JOIN estadounidad edoUnd ON edoUnd.id = u.estadounidad_id
                INNER JOIN tipounidad tipUnd ON tipUnd.id = u.tipounidad_id
            WHERE u.id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unidad by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    getResidents: (id, callBack) => {
        pool.query(
            `SELECT u.*, cond.nombre 'condition', edf.nombre building, edoUnd.nombre estatus, tipUnd.nombre UnitType,
                (SELECT COUNT(*) FROM unidadresidente ur WHERE ur.unidad_Id = u.id) residents
            FROM unidad u
                INNER JOIN condicion cond ON cond.id = u.condicion_id
                INNER JOIN edificio edf ON edf.id = u.edificio_id
                INNER JOIN estadounidad edoUnd ON edoUnd.id = u.estadounidad_id
                INNER JOIN tipounidad tipUnd ON tipUnd.id = u.tipounidad_id
            WHERE u.id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('get unidad by id service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateRec: (data, callBack) => {
        pool.query(
            `UPDATE unidad 
                SET identificacion = ?
                    , piso = ?
                    , alicuota = ?
                    , fechaultimoestado = ?
                    , fechaultimopropietario = ?
                    , totalrecibo = ?
                    , totalpago = ? 
                    , tipounidad_id = ?
                    , estadounidad_id = ?
                    , edificio_id = ?
                    , condicion_id = ?
                WHERE id = ?;
            `,
            [
                data.identification,
                data.floor,
                data.percent,
                data.lastStateDate,
                data.lastCopropertyDate,
                data.totalCosts,
                data.totalPays,
                data.typeId,
                data.stateId,
                data.buildingId,
                data.conditionId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update unidad service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateStatusRec: (data, callBack) => {
        pool.query(
            `UPDATE unidad 
                SET estadounidad_id = ?
                    ,fechaultimoestado = UTC_TIMESTAMP
                WHERE id = ?;
            `,
            [
                data.statusId,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update unidad status service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateTotalBillRec: (data, callBack) => {
        pool.query(
            `UPDATE unidad 
                SET totalrecibo = ?
                WHERE id = ?;
            `,
            [
                data.totalBill,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update total bill service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    updateTotalPayRec: (data, callBack) => {
        pool.query(
            `UPDATE unidad 
                SET totalpago = ?
                WHERE id = ?;
            `,
            [
                data.totalPay,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack('update total pay service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    },
    deleteRec: (id, callBack) => {
        pool.query(
            `DELETE FROM unidad WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack('delete unidad service error: ' + error)
                }
                return callBack(null, results)
            }
        );
    }
};

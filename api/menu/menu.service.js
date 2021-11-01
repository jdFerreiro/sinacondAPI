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
    menuByRolOld: (id, callback) => {
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
    menuByRol: (id, callback) => {
        pool.query(
            `SELECT m.id moduleId,
                m.nombre moduleName, 
                m.título moduleTitle, 
                m.descripcion moduleDescription, 
                m.controller moduleController, 
                m.activo moduleIsActive, 
                m.accion moduleAction, 
                m.imageroot moduleImageRoot, 
                childs.id childId,
                childs.nombre childName, 
                childs.título childTitle, 
                childs.descripcion childDescription, 
                childs.controller childController, 
                childs.activo childIsActive, 
                childs.accion childAction, 
                childs.imageroot childImageRoot
            FROM modulo m
                LEFT JOIN modulo_rol rm on rm.modulo_id = m.id
                LEFT JOIN (SELECT * FROM modulo) childs ON childs.modulo_id = m.id
            WHERE IFNULL(m.modulo_id, 0) = 0 
                AND rm.rol_id = ?
            ORDER BY m.id;`, 
            [id],
            (error, results, fields) => {
                if (error) {
                    return callback('get menu by rol service error: ' + error);
                }

                if (results && results.length > 0) {
                    var menu = [];
                    var childsMenu = [];
                    var parentId = results[0].moduleId;

                    var menuObj = { 
                        "id": results[0].moduleId,
                        "name": results[0].moduleName,
                        "title": results[0].moduleTitle,
                        "description": results[0].moduleDescription,
                        "path": results[0].moduleController + '/' + results[0].moduleAction,
                        "isActive": (results[0].moduleIsActive == 1) ? true : false,
                        "imageRoot": results[0].moduleImageRoot,
                        "isOpen": false, 
                        "childs": []
                    };

                    for (var i = 1; i < results.length; i++) {
                        // cambió el módulo
                        if (results[i].moduleId != parentId) {
                            menuObj.childs = childsMenu;
                            menu.push(menuObj);

                            var menuObj = { 
                                "id": results[i].moduleId,
                                "name": results[i].moduleName,
                                "title": results[i].moduleTitle,
                                "description": results[i].moduleDescription,
                                "path": results[i].moduleController + '/' + results[i].moduleAction,
                                "isActive": (results[0].moduleIsActive == 1) ? true : false,
                                "imageRoot": results[0].moduleImageRoot,
                                "isOpen": false, 
                                "childs": []
                            };

                            childsMenu = [];
                            var parentId = results[i].moduleId;;
                        }
                        else {
                            // procesar hijos
                            var childObj = {
                                "id": results[i].childId,
                                "name": results[i].childName,
                                "title": results[i].childTitle,
                                "description": results[i].childDescription,
                                "path": results[i].childController + '/' + results[i].childAction,
                                "active": (results[i].childIsActive == 1) ? true : false,
                                "materializeIconName": results[i].childImageRoot
                            };

                            childsMenu.push(childObj);
                        }
                    }

                    menuObj.childs = childsMenu;
                    menu.push(menuObj);

                    return callback(null, menu);    
                
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

const
    {
        menuUser, 
        deleteMenuOption,
        menuByRol,
        addMenuRol,
        menuChilds
    } = require("./menu.service");

module.exports = {
    addReg: (req, res) => {
        const body = req.body;
        addMenuRol(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    menuUserReg: (req, res) => {
        const id = req.params.id;
        menuUser(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database error " + err
                });
            }
            if (!results || !results.length > 0) {
                return res.json({
                    success: 0,
                    message: "Id usuario inválido."
                });
            }
            if (results) {
                return res.status(200).json({
                    success: 1,
                    message: "menuUser data send",
                    data: results
                });
            }
        });
    },
    menuRolRegOld: (req, res) => {
        const id = req.params.id;
        menuByRol(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database error " + err
                });
            }
            if (!results || !results.length > 0) {
                return res.json({
                    success: 0,
                    message: "Id usuario inválido."
                });
            }
            if (results) {
                return res.status(200).json({
                    success: 1,
                    message: "menuUser data send",
                    data: results
                });
            }
        });
    },
    menuRolReg: (req, res) => {
        const id = req.params.id;
        menuByRol(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database error " + err
                });
            }
            if (!results || !results.length > 0) {
                return res.json({
                    success: 0,
                    message: "Id usuario inválido."
                });
            }
            if (results) {
                return res.status(200).json({
                    success: 1,
                    message: "menuUser data send",
                    data: results
                });
            }
        });
    },
    menuChildsReg: (req, res) => {
        const id = req.params.id;
        menuChilds(id, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database error " + err
                });
            }
            if (!results || !results.length > 0) {
                return res.json({
                    success: 0,
                    message: "Id usuario inválido."
                });
            }
            if (results) {
                return res.status(200).json({
                    success: 1,
                    message: "menuUser data send",
                    data: results
                });
            }
        });
    },
    deleteMenuReg: (req, res) => {
        const body = req.body;
        console.log(body);
        deleteMenuOption(body, (err, results) => {
            if (err) {
                console.log('service error: ' + err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error",
                    error: err
                });
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "No se encontró el registro indicado"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Registro eliminado satisfactoriamente"
            });
        });
    }

};

const
    {
        menuMainOptions,
        menuChildOptions
    } = require("./menu.service");

module.exports = {
    menuUser: (req, res) => {
        const id = req.params.id;
        menuMainOptions(id, (err, results) => {
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
                    results
                });
            }
        });
    },
    menuChildUser: (req, res) => {
        const body = req.body;
        menuChildOptions(body, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "Database error " + err
                });
            }
            return res.status(200).json({
                success: 1,
                message: "menuChildUser data send",
                results
            });
        });
    }

};

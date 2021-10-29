const { verify } = require('jsonwebtoken');

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);
            verify(token, "51n4c0nd83©u3md3c0", (err, decoded) => {
                if (err) {
                    res.json({
                        success: 0,
                        message: "token inválido"
                    });
                } else {
                    next();
                }
            })
        } else {
            res.json({
               success: 0,
                message: "Acceso restringido: Usuario no autorizado"
            });
        }
    }   
}
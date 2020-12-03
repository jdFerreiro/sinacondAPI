const
    {
        menuData
    } = require("./menu.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.get("/:id", checkToken, menuData);

module.exports = router;

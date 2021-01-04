
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { 
    createFacturaReg, 
    getFacturasReg, 
    getFacturaReg, 
    updateFacturaReg,
    deleteFacturaReg,
    createDetalleReg,
    getDetalleReg,
    getDetalleByIdReg,
    updateDetalleReg,
    deleteDetalleReg,
    checkAprobacion,
    createAprobacion,
    deleteAprobacion
} = require("./factura.controller");

router.post("/", checkToken, createFacturaReg);
router.get("/company/:idC/unit/:idU", checkToken, getFacturasReg);
router.get("/:id", checkToken, getFacturaReg);
router.patch("/", checkToken, updateFacturaReg);
router.delete("/:id", checkToken, deleteFacturaReg);
router.post("/detalle/", checkToken, createDetalleReg);
router.get("/detalleByFactura/:id", checkToken, getDetalleReg);
router.get("/detalle/:id", checkToken, getDetalleByIdReg);
router.patch("/detalle/", checkToken, updateDetalleReg);
router.delete("/detalle/:id", checkToken, deleteDetalleReg);
router.post("/data/approve/unit", checkToken, checkAprobacion)
router.post("/data/approve", checkToken, createAprobacion)
router.delete("/data/approve", checkToken, deleteAprobacion)

module.exports = router;

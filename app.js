require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const userRouter = require("./api/user/user.router");
const rolRouter = require("./api/rol/rol.router");
const userStatusRouter = require('./api/userStatus/userStatus.router');
const geographyRouter = require('./api/geography/geography.router');
const residentTypeRouter = require("./api/residentType/residentType.router");
const unitTypeRouter = require("./api/unitType/unitType.router");
const unitStatusRouter = require("./api/unitStatus/unitStatus.router");
const unitRouter = require("./api/unit/unit.router");
const menuRouter  = require("./api/menu/menu.router");
const unitConditionRouter = require("./api/unitCondition/unitCondition.router");
const residentRouter = require("./api/resident/resident.router");
const divisaRouter = require("./api/divisas/divisas.router");
const facturaRouter = require("./api/facturas/factura.router");
const providerRouter = require("./api/provider/provider.router");
const administratorRouter = require("./api/administrator/administrator.router");
const buildingRouter = require("./api/building/building.router");
const telephoneTypeRouter = require("./api/telephoneType/telephoneType.router");
const telephoneRouter = require("./api/telephone/telephone.router");
const expenseTypeRouter = require("./api/expenseType/expenseType.router");

app.use("/api/geography", geographyRouter);
app.use("/api/userStatus", userStatusRouter);
app.use("/api/user", userRouter);
app.use("/api/rol", rolRouter);
app.use("/api/menu", menuRouter);
app.use("/api/residentType", residentTypeRouter);
app.use("/api/unitType", unitTypeRouter);
app.use("/api/unitStatus", unitStatusRouter);
app.use("/api/unit", unitRouter);
app.use("/api/unitCondition", unitConditionRouter);
app.use("/api/resident", residentRouter);
app.use("/api/divisas", divisaRouter);
app.use("/api/factura", facturaRouter);
app.use("/api/provider", providerRouter);
app.use("/api/administrator", administratorRouter);
app.use("/api/building", buildingRouter);
app.use("/api/telephoneType", telephoneTypeRouter);
app.use("/api/telephone", telephoneRouter);
app.use("/api/expenseType", expenseTypeRouter);


app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: "Rest API working"
    });
});

app.listen(process.env.APP_PORT, () => { 
    console.log("Server runing at port: ", process.env.APP_PORT);
});




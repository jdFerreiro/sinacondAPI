require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());


const userRouter = require("./api/user/user.router");
app.use("/api/user", userRouter);

const rolRouter = require("./api/rol/rol.router");
app.use("/api/rol", rolRouter);

const userStatusRouter = require('./api/userStatus/userStatus.router');
app.use("/api/userStatus", userStatusRouter);

const geographyRouter = require('./api/geography/geography.router');
app.use("/api/geography", geographyRouter);

const companyStatusRouter = require('./api/companyStatus/companyStatus.router');
app.use("/api/companyStatus", companyStatusRouter);

const companyRouter = require('./api/company/company.router');
app.use("/api/company", companyRouter);

const menuRouter = require("./api/menu/menu.router");
app.use("/api/menu", menuRouter);

app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: "Rest API working"
    });
});

app.listen(process.env.APP_PORT, () => { 
    console.log("Server runing at port: ", process.env.APP_PORT);
});




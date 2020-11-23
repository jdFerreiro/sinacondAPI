require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./api/user/user.router");
const rolRouter = require("./api/rol/rol.router");
const userStatusRouter = require('./api/userStatus/userStatus.router');

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/rol", rolRouter);
app.use("/api/userStatus", userStatusRouter);

app.get('/api', (req, res) => {
    res.json({
        success: 1,
        message: "Rest API working"
    });
});

app.listen(process.env.APP_PORT, () => { 
    console.log("Server runing at port: ", process.env.APP_PORT);
});




const express = require('express');
require('dotenv').config();
require("./models/db");

const app = require('./app');
const PORT = process.env.PORT || 3000;
const userRouter = require("./routers/user.router");

app.use("/", userRouter);

app.get("/", (req, res) => {
    res.send("Hello JWT");
});


app.on("ready", () => {
    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}`);
    });
});

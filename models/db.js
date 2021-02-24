const mongoose = require('mongoose');
const app = require("../app");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    })
.then(() => {
    console.log("Connected to database!");
    app.emit("ready");
})
.catch((err) => {
    console.log("Cannot connect to the database", err.message);
    process.exit();
});
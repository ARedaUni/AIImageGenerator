const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json())

app.use('/users', require("./routes/routes"))
app.use(errorHandler)
app.listen(port, () => {
    console.log(port)
})
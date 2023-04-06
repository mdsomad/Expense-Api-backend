

const express = require("express");
const app = express();
const cors = require("cors")


//* Using Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));




const ExpenseAdd = require("./routes/expense");  //* import user routes


app.use("/api/v1",ExpenseAdd);




module.exports = app;
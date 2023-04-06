const express = require("express");
const {expenseAdd, getExpnse, expnseDelete} = require('../controllers/expenseControllers')
const routes = express.Router();


routes.route("/get").get(getExpnse)
routes.route("/post").post(expenseAdd);
routes.route("/delete/:id").delete(expnseDelete);




module.exports = routes
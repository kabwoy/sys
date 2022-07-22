const express = require("express")
const methodOverride = require("method-override")
const workersRoutes = require("./routes/workers-routes")
const sequelize = require("./connection/conn")
const Worker = require("./models/worker")
const app = express()
app.set('view engine' , "ejs")
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))
app.use(workersRoutes)

const port = process.env.PORT ||  3000

sequelize.sync()

app.listen(port)
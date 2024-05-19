require("dotenv").config()
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')
// routes

connectDB()

const PORT = process.env.PORT || 5050
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use("/", require("./landing/route"))


if(process.env.PORT){
const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
)
}
// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})

module.exports = app;
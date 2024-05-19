require("dotenv").config()
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')
// routes

connectDB()

const PORT = process.env.PORT || 5050
const app = express();
const corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000', 'http://localhost:8000', "https://one-health-study.vercel.app/", "https://one-health-study-frontend.vercel.app", "https://one-health-study-frontend.vercel.app/home"],
}
//middlewares
app.use(cors(corsOptions));
app.use(express.json());

app.use(cookieParser())

app.use("/", require("./landing/route"))



const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
)
// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})
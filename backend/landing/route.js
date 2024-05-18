const express = require("express")
const {search} = require('./search')
const router = express.Router()

router.route("/").post(search)


module.exports = router

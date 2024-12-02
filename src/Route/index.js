const express = require("express")
const router = express.Router();

const v1Apirouter = require('./v1/index')


const Routes = router.use('/v1', v1Apirouter);


module.exports = Routes;

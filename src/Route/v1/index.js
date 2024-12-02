const express = require("express");
const router = express.Router();

const {writeDBControllers} = require("../../Controllers/mainController");


    router.get('/', (req, res) => {
        try {
            return res.status(200).json({
                message: 'Welcome home',
                success: true,
                data: {},
                err: {}
            });
        } catch (error) {
            console.log("Something went wrong in v1/index.js routing ");
            // throw error;
            return res.status(500).json({
                message: 'Welcome home',
                success: true,
                data: {},
                err: {}
            });

        }
    })

    router.post('/create', writeDBControllers);

    


module.exports = router;
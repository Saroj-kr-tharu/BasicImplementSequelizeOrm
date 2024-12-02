
const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./Route/index');

const CURD = require('./Repository/CURD');
const curd = new CURD;

const newData = { 
      title: 'Learn Sequelize',
      description: 'pending'
     };

const serverSetupAndStart = () => {
    const app = express();
    const PORT = 3000;

    // middlewares
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json());
    app.use('/api', Routes);

    app.listen(PORT, () => {
        console.log(`Server is Running at port ${PORT}`);
        // curd.write(newData);

        // curd.updateCom(4, {complete: true});
    })
}


serverSetupAndStart();
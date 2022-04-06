try {
    const express = require('express');
    const app = express();
    const morgan = require('morgan');
    const bodyParser = require('body-parser');
    const cors = require('cors');

    const connection = require('./database/databaseprueba');

    const port = process.env.PORT || 3000;
   
    //Settings
    app.set('port', port);
   
    //Middlewares
    app.use(morgan('dev'));
    app.use(bodyParser.json());

    app.use(cors({ origin: '*'}));    
   
    //Routes
    app.use('/api/users', require('./router/user.routes'));
    app.use('/api/products', require('./router/product.routes'));
   
    //Server
    app.listen(port, () => {
        console.log('server on port: ' + port);
    });

} catch (error) {
   
}
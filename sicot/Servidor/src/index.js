
const express = require('express');
const morgan = require('morgan');

//inicializaciones

const app = express();


//settings
app.set('port', process.env.PORT || 4000);


//Middelware
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Routes

app.use(require('./routes/index.js'));
app.use('/user', require('./routes/user.js'));
app.use('/person', require('./routes/person.js'));
app.use('/empresa', require('./routes/empresa.js'));
app.use('/tabla', require('./routes/tabla.js'));



//starting server
app.listen(app.get('port'), () =>{
    console.log("Server on port", app.get('port'))
} )
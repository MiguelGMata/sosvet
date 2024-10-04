var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const apiRouter = require('./routes/apiRouter').router;
const helmet = require('helmet');
const logger = require('morgan');
const { notFoundHandler, errorLogger, errorHandler } = require('./middlewares');

const app = express()
const port = process.env.PORT || 4000

//Helmet
app.use(helmet());

//Morgan
app.use(logger('tiny'));


const corsOptions = {
    origin: [
        'http://localhost:8080', // Permitir el frontend en localhost
        'https://sosvet.vercel.app' // Permitir el frontend en producción
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true // Si necesitas manejar credenciales (opcional)
};

// Usa la configuración de CORS
app.use(cors(corsOptions));
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configure routes
app.get('/', function (request, response) {
    response.json({ message: 'hello ! ' });
});

app.use('/sos', apiRouter);

app.use('*', notFoundHandler);
app.use(errorLogger);
app.use(errorHandler);

app.listen(port, function () {
    console.log('Le serveur fonctionne sur le port : ' + port)
})

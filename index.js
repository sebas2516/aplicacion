const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
//const port = 3000;
const port=process.env.PORT || 3000;
app.use(express.json());

//const whitelist = ['http://localhost:8080', 'https://myapp.co']
// const whitelist = ['http://localhost:8080'];
// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else{
//       callback(new Error('no permitido'));
//     }
//   }
// }
// routerApi(app);
// app.use(cors(options));
//app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send ('Hola, soy nueva ruta');
});

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log (' Mi port' + port);
});

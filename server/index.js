const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db.js')

// CREATE EXPRESS SERVER
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('message', ({playerName, text}) => {
    io.emit('message', {
      playerName,
      text,
    })
  })

  socket.on('nextquestion', (currentQuestion) =>{
    console.log('sending next question')
    io.emit('nextquestionindex', currentQuestion+1)
  })

  socket.on('requestanswer', () =>{
    io.emit('revealanswer')
  })

  socket.on('finalscore', ({playerName, score}) => {
    io.emit('playerscore', {
      playerName,
      score,
    })
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Some helpful middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Middleware for CORS Headers
app.use((req, res, next) => {
    // Website you wish to allow to connect
    var allowedOrigins = ['http://localhost', 'http://localhost:8080', 'http://104.248.189.238'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
      console.log(origin)
      res.setHeader('Access-Control-Allow-Origin', origin)
    }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});

// Connect API routes
require('./routes/routes.js')(app, express);

app.use(express.static(__dirname + '../app/dist'));

//Set server to listen
http.listen(3000, () => {
  console.log('listening on *:3000');
});

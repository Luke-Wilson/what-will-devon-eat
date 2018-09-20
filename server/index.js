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
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Pass to next layer of middleware
    next();
});

// Connect API routes
require('./routes/routes.js')(app, express);

app.use(express.static('../app/dist'));

//Set server to listen
http.listen(3000, () => {
  console.log('listening on *:3000');
});

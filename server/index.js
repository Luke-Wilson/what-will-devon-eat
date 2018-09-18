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
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Some helpful middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

// Connect API routes
require('./routes/routes.js')(app, express);

app.use(express.static('../app/dist'));

//Set server to listen
http.listen(3000, () => {
  console.log('listening on *:3000');
});

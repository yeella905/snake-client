const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here
    port: PORT // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK"); 

const moves = ["Move: up", "Move: down", "Move: left", "Move: right"];
let moveIndex = 0;
setInterval(() => {
  conn.write(moves[moveIndex]);
  moveIndex = (moveIndex + 1) % moves.length;  // Cycle through moves
}, 500);

  });

  return conn;
};

module.exports = { connect };

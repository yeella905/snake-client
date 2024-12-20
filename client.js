const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here
    port: 50541 // PORT number here
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");
    setInterval(() => { conn.write("Move: up"); }, 500);
    setInterval(() => { conn.write("Move: down"); }, 1000);
    setInterval(() => { conn.write("Move: left"); }, 1500);
    setInterval(() => { conn.write("Move: right"); }, 2000);

  });

  return conn;
};

module.exports = { connect };

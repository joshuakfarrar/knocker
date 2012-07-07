var net = require('net');

function Knocker() {
};
exports.Knocker = Knocker;

exports.setTarget = function(host_arg) {
  var host = host_arg || "127.0.0.1",
      knocker;

  var knocker = new Knocker;
  knocker.host = host;

  return knocker;
};

Knocker.prototype.knock = function(port_arg) {
  var knocked = net.connect(port_arg, this.host);

  // We shouldn't be able to connect, really.
  knocked.on('error', function (exception) {
    // So ignore the exception :3
    //console.log(exception);
  });

  // But if we do, we don't want to keep the connection alive
  knocked.on('connect', function () {
    //console.log("Connected to port " + port_arg);
    knocked.end();
  });

  return this;
};

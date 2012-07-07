# knocker

Knocks on ports if you have something like knockd running.

## example

On host running knockd:

/etc/knockd
```shell
[openHTTP]
  sequence	= 7000,8000,9000
  seq_timeout	= 5
  command	= /sbin/iptables -A INPUT -s %IP% -p tcp --dport 80 -j ACCEPT
  tcpflags	= syn

[closeHTTP]
  sequence	= 9000,8000,7000
  seq_timeout	= 5
  command	= /sbin/iptables -D INPUT -s %IP% -p tcp --dport 80 -j ACCEPT
  tcpflags	= syn
```

And using knocker:

```js
var knocker = require('knocker')
  .setTarget('10.0.0.3')
  .knock(7000)
  .knock(8000)
  .knock(9000);
```

# API

## knocker.setTarget(host)

Use the IP address of the host you want to knock

## knocker.knock(port)

Attempts to open a connection on a given port. If the connection attempt fails, as is expected, the exception is ignored. If the connection.. connects? Knocker will attempt to close the connection immediately.

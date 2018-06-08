const WebSocket = require('ws');
const redis = require("redis");

const wss = new WebSocket.Server({ port: 8080 });




wss.on('connection', function connection(ws) {
	ws.on('open', function open() {
		console.log("opened")
	});

	ws.on('message', function incoming(message) {
		console.log('received: %s', message);
		const sub = redis.createClient();
		sub.subscribe(message);
		sub.on("message", function (channel, data) {
		    console.log(channel + ": " + data);
			ws.send(data, function (e){ console.log(e); });
		});


		ws.on('close', function close(message){
	        sub.unsubscribe();
	        sub.quit();
		})

	});
});
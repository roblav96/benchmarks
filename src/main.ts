// 

import * as Polka from 'polka'
import * as net from 'turbo-net'
import * as http from 'turbo-http'



const polka = Polka()

console.log('polka.server ->', polka.server)

polka.get('/', function(req, res) {
	res.end(Buffer.from('Hello'))
})

http.createServer(polka.handler).listen(process.env.PORT, function(error) {
	if (error) return console.error('listening Error ->', error);
	console.log('listening ->', process.env.PORT)
})

console.log('polka.server ->', polka.server)




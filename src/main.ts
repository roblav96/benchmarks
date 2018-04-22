// 

require('source-map-support').install()

import './console'
import { ServiceContextAccessor } from 'pandora/dist/service/ServiceContextAccessor'
import { Server } from 'http'
import * as pandora from 'pandora'
import * as _ from 'lodash'
import * as turbo from 'turbo-http'



const server = turbo.createServer(function(req, res) {
	res.setHeader('Content-Length', '11')
	res.write(Buffer.from('hello world'))
}) as Server

let port = Number.parseInt(process.env.PORT)
console.log('start port ->', port)
setTimeout(function() {
	server.listen(port, '127.0.0.1', function(error) {
		if (error) return console.error('listen Error ->', error);
		console.log('listen ->', port)
	})
}, 1000)



// const onexit = _.once(
function onexit(signal) {
	console.log('onexit signal ->', signal)
	if (!signal || signal.constructor != String) signal = 'SIGKILL';
	server.close(function() {
		console.log('\nserver.close\n')
		process.kill(process.pid, signal)
		// process.exit(0)
		// process.nextTick(process.exit, 0)
	})
	// process.nextTick(process.exit, 0)
}
// )
process.once('exit', onexit);
process.once('beforeExit', onexit);
process.once('SIGINT', onexit)
process.once('SIGILL', onexit)
process.once('SIGTERM', onexit)
process.once('SIGABRT', onexit)
process.once('SIGUSR1', onexit)
process.once('SIGUSR2', onexit)
// process.once('SIGKILL', onexit)












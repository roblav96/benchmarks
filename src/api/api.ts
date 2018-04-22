// 

import { ServiceContextAccessor } from 'pandora/dist/service/ServiceContextAccessor'
import { Server } from 'http'
import * as pandora from 'pandora'
import * as _ from 'lodash'
import * as turbo from 'turbo-http'



export = class Api {

	constructor(public context: ServiceContextAccessor) {
		
	}

	server = turbo.createServer(function(req, res) {
		res.setHeader('Content-Length', '11')
		res.write(Buffer.from('hello world'))
	}) as Server

	async start() {
		let port = this.context.config.port || Number.parseInt(process.env.PORT)
		console.log('start port ->', port)
		await new Promise((resolve, reject) => {
			this.server.listen(port, '127.0.0.1', function(error) {
				if (error) return reject(error);
				resolve()
			})
		})
		console.log('listening ->', port)
	}

	async stop() {
		console.log('stops pid ->', process.pid)
		await new Promise(resolve => {
			this.server.close(resolve)
		})
		// process.kill(process.pid)
	}

}



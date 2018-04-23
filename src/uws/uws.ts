// 

import '../main'
import { ServiceContextAccessor } from 'pandora/dist/service/ServiceContextAccessor'
import * as pandora from 'pandora'
import * as _ from 'lodash'
import * as uws from 'uws'



export = class Uws {

	constructor(public context: ServiceContextAccessor) {

	}

	wss = new uws.Server({
		host: '127.0.0.1',
		port: Number.parseInt(process.env.PORT),
		path: 'radio',
		verifyClient(incoming, next) {
			console.log('incoming ->', incoming)
			next(true)
			// let host = incoming.req.headers['host']
			// next(host == `${process.HOST}:${PORT}`)
		},
	})

	async start() {
		await new Promise(resolve => {
			this.wss.once('listening', resolve)
		})
		console.info('listening ->', Number.parseInt(process.env.PORT))
		
		await new Promise(function(resolve, reject) {
			setTimeout(resolve, 5000)
		})

		// setInterval(() => {
		// 	let hub = this.context.getHub()
		// 	let client = hub.getHubClient()
		// 	client.send({ appName: 'benchmarks' }, 'setInterval', null)
		// }, 1000)

	}

	async stop() {
		console.warn('stop ->', process.pid)
		this.wss.close()
		console.warn('exit ->', process.pid)
	}

}



// 

import '../main'
import { ServiceContextAccessor } from 'pandora/dist/service/ServiceContextAccessor'
import { Server } from 'http'
import * as pandora from 'pandora'
import * as _ from 'lodash'
import * as turbo from 'turbo-http'
import * as cluster from 'cluster'



export = class Api {

	constructor(public context: ServiceContextAccessor) {

	}

	server = turbo.createServer(function(req, res) {
		res.setHeader('Content-Length', '11')
		res.write(Buffer.from('hello worlds'))
	}) as Server

	async start() {
		// let dep = this.context.getDependency('radio')
		// console.log('dep ->', dep)
		// let hub = pandora.getHub().getHubClient()
		// console.log('hub ->', hub)
		// let radio = await this.context.getProxy('radio')
		// console.log('radio ->', radio)

		let hub = this.context.getHub()
		let client = hub.getHubClient()
		client.on('setInterval', function(message) {
			console.log('message ->', message)
		})

		let port = Number.parseInt(process.env.PORT)
		if (cluster.worker) port += cluster.worker.id;
		await new Promise((resolve, reject) => {
			this.server.listen(port, '127.0.0.1', function(error) {
				if (error) return reject(error);
				resolve()
			})
		})
		console.info('listening ->', port)
	}

	async stop() {
		console.warn('stop ->', process.pid)
		await new Promise(resolve => {
			this.server.close(resolve)
		})
		console.warn('exit ->', process.pid)
	}

}



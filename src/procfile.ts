// 

import './main'
import { ProcessContextAccessor } from 'pandora/dist/application/ProcessContextAccessor'
import { ProcfileReconcilerAccessor, DefaultEnvironment } from 'pandora'
import * as os from 'os'



export = async function(pandora: ProcfileReconcilerAccessor) {

	pandora.process('uws').env({
		PORT: 12300,
	}).scale(1).nodeArgs(['--no-warnings'])
	pandora.service('uws', './uws/uws.js').process('uws').config({
	}).publish(true)



	// pandora.process('radio').env({
	// 	PORT: 12299,
	// }).scale(1).order(1).nodeArgs(['--no-warnings'])
	// pandora.service('radio', './radio/radio.js').process('radio').config({
	// }).publish(true)

	// pandora.process('api').env({
	// 	PORT: 12300,
	// }).scale(1).order(2).nodeArgs(['--no-warnings'])
	// pandora.service('api', './api/api').process('api').config({
	// }).publish(true)

	// pandora.service('logger').drop()

	// pandora.fork('benchmarks', './main.js').env({
	// 	NODE_ENV: 'development',
	// 	PORT: 12300,
	// }).nodeArgs(['--no-warnings'])

	// pandora.process('dashboard').scale(1)
	// pandora.service('dashboard', '../node_modules/pandora-dashboard/dist/Dashboard').process('dashboard')

}



import * as clc from 'cli-color'
if (DEVELOPMENT) setInterval(() => process.stdout.write(clc.erase.lineRight), 1000);



// import * as inspector from 'inspector'
// inspector.open((process as any).debugPort - 1)
// // console.clear()

// // const onexit = _.once(
// function onexit() {
// 	inspector.close()
// 	setImmediate(process.exit, 0)
// }
// // )
// process.once('exit', onexit);
// process.once('SIGINT', onexit)
// process.once('SIGTERM', onexit)
// process.once('SIGUSR2', onexit)



// import * as util from 'util'
// _.merge(util.inspect, {
// 	defaultOptions: { showHidden: true, showProxy: true, depth: 1, compact: false, breakLength: Infinity, maxArrayLength: Infinity, colors: true, },
// 	styles: { string: 'green', regexp: 'green', date: 'green', number: 'magenta', boolean: 'blue', undefined: 'red', null: 'red', symbol: 'cyan', special: 'cyan', },
// } as Partial<typeof util.inspect>)



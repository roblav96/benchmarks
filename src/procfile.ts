// 

import './console'
import { ProcessContextAccessor } from 'pandora/dist/application/ProcessContextAccessor'
import { ProcfileReconcilerAccessor } from 'pandora'
import * as os from 'os'



export = function(pandora: ProcfileReconcilerAccessor) {
	const cpus = os.cpus().length
	
	// pandora.process('api').nodeArgs(['-r', 'ts-node/register', '--trace-warnings'])

	pandora.process('api').env({
		NODE_ENV: 'development',
		PORT: 12300,
	}).nodeArgs(['--no-warnings']).scale(1)

	pandora.service('api', './api/api.js').process('api').config({
		env: 'development',
		port: 12300,
	}).publish()

	// pandora.fork('benchmarks', './main.js').env({
	// 	NODE_ENV: 'development',
	// 	PORT: 12300,
	// }).nodeArgs(['--no-warnings'])



}



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



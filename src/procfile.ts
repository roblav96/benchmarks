// 

import './console'
import * as os from 'os'
import { ProcfileReconcilerAccessor } from 'pandora'
import { ProcessContextAccessor } from 'pandora/dist/application/ProcessContextAccessor'



export = function(pandora: ProcfileReconcilerAccessor) {
	const cpus = os.cpus().length

	pandora.fork('benchmarks', './main.js').env({
		NODE_ENV: 'development',
		PORT: 12300,
	})



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



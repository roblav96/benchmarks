// 



import * as util from 'util'
Object.assign(util.inspect.defaultOptions, { showHidden: false, showProxy: false, depth: 1, compact: false, breakLength: Infinity, maxArrayLength: Infinity, colors: true } as Partial<typeof util.inspect.defaultOptions>)
Object.assign(util.inspect.styles, { string: 'green', regexp: 'green', date: 'green', number: 'magenta', boolean: 'blue', undefined: 'red', null: 'red', symbol: 'cyan', special: 'cyan' })



import chalk from 'chalk'
import * as luxon from 'luxon'
import * as StackTracey from 'stacktracey'
const _console = {} as typeof console
let methods = ['log', 'info', 'warn', 'error']
let i: number, len = methods.length
for (i = 0; i < len; i++) {
	let method = methods[i]
	Object.assign(_console, { [method]: console[method] })
	Object.assign(console, {
		[method](...args: any[]) {
			let stack = new StackTracey()
			let site = stack[1]
			let stamp = luxon.DateTime.local().toFormat('hh:mm:ss:SSS')
			let colors = { log: 'blue', info: 'green', warn: 'yellow', error: 'red' }
			let color = (colors[method] || 'magenta') as string
			let square = chalk[color + 'Bright']('█') as string
			if (method == 'error') color = color + 'Bright';
			let file = chalk.bold(`${chalk[color](site.fileName)}:${site.line}`)
			let output = `${square}[${file}]${chalk.grey(`${site.callee}[${stamp}]`)}`
			let write = `\r\n${chalk.underline(output)}\r\n`
			process.stdout.write(write)
			// args.unshift(write)
			// args.push(`\r\n`)
			_console[method].apply(console, args)
			process.stdout.write(`\r\n`)
		},
	})
}



// import * as inspector from 'inspector'
// if (process.env.PORT) {
// 	let port = Number.parseInt(process.env.PORT)
// 	inspector.open((process as any).debugPort + (port - 12300))
// 	// { (console as any).clear() }
// 	// process.once('SIGTERM', console.clear)
// }



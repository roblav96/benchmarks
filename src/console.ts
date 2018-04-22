// 

import * as _ from 'lodash'
import * as util from 'util'



_.merge(util.inspect, {
	defaultOptions: { showHidden: true, showProxy: true, depth: 1, compact: false, breakLength: Infinity, maxArrayLength: Infinity, colors: true, },
	styles: { string: 'green', regexp: 'green', date: 'green', number: 'magenta', boolean: 'blue', undefined: 'red', null: 'red', symbol: 'cyan', special: 'cyan', },
} as Partial<typeof util.inspect>)



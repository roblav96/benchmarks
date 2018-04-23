// 

global.DEVELOPMENT = process.env.NODE_ENV == 'development'
global.PRODUCTION = process.env.NODE_ENV == 'production'
declare global { const DEVELOPMENT: boolean; const PRODUCTION: boolean; namespace NodeJS { export interface Global { DEVELOPMENT: typeof DEVELOPMENT, PRODUCTION: typeof PRODUCTION } } }

import * as sourcemaps from 'source-map-support'
sourcemaps.install()

import './adapters/console'



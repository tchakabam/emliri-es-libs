// TODO: Move to Objec-TS long-term

const PREFIX_ROOT = 'R14lt0'

export type LoggerFunc = (...args: any[]) => void

export type Logger = {
  info: LoggerFunc,
  log: LoggerFunc
  debug: LoggerFunc
  warn: LoggerFunc
  error: LoggerFunc
}

const getPrefix = function(type: string, category: string): string {
  const prefix = `[${PREFIX_ROOT}]:[${type}]:[${category}]>`

  return prefix
}

export const getLogger = function(category: string): Logger {
  return {
    info: window.console.info.bind(window.console, getPrefix('i', category)),
    log: window.console.log.bind(window.console, getPrefix('l', category)),
    debug: window.console.debug.bind(window.console, getPrefix('d', category)),
    warn: window.console.warn.bind(window.console, getPrefix('w', category)),
    error: window.console.error.bind(window.console, getPrefix('e', category))
  }
}

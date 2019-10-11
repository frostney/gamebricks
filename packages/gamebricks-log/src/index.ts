interface ILog {
  connector?: any
  plugins?: any
  logLevelMap?: any
  logLevel?: string
}

const Log: ILog = {};

Log.connector = null;

Log.plugins = {};

Log.plugins.console = {
  e: function error() {
    if (window.console && window.console.error) {
      return window.console.error.apply(window.console, arguments);
    }
  },
  w: function warn() {
    if (window.console && window.console.warn) {
      return window.console.warn.apply(window.console, arguments);
    }
  },
  i: function info() {
    if (window.console && window.console.info) {
      return window.console.info.apply(window.console, arguments);
    }
  },
  d: function debug() {
    if (window.console && window.console.log) {
      return window.console.log.apply(window.console, arguments);
    }
  },
  v: function verbose() {
    if (window.console && window.console.log) {
      return window.console.log.apply(window.console, arguments);
    }
  },
};

Log.connector = Log.plugins.console;

Log.logLevelMap = {
  'error': ['e'],
  'warn': ['w', 'e'],
  'info': ['i', 'w', 'e'],
  'debug': ['d', 'i', 'w', 'e'],
  'verbose': ['v', 'd', 'i', 'w', 'e'],
};

Log.logLevel = 'verbose';

const logFunctions = ['v', 'd', 'i', 'w', 'e'];

logFunctions.forEach(name => {
  Log[name] = function logFunction() {
    if (Log.logLevelMap[Log.logLevel].indexOf(name) >= 0) {
      Log.connector[name].apply(this, arguments);
    }
  };
});

export default Log;

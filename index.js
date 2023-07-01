(function() {
  // Backup of original console.log
  const originalConsoleLog = console.log;
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;
  const originalConsoleDebug = console.debug;

  console.moan = function(message) {
    originalConsoleLog("UwU " + message);
  };

  console.whisper = function(message) {
    originalConsoleLog("psst, " + message);
  };

  console.yelp = function(message) {
    originalConsoleWarn("Yikes! %c" + message, "color:orange");
  };

  console.rage = function(message) {
    originalConsoleError("RRRRAAAAAGGGGGHHHH!!! %c" + message, "color:red");
  };

  console.babble = function(message) {
    originalConsoleDebug("Mumble, mumble: %c" + message + "... hmmmm ", "color:green");
  };

  console.panic = function(message) {
    originalConsoleError("AHHHHH!!! %c" + message, "color:purple");
  };

  console.scream = function(message, color = 'red', prefix = '!!!', postfix = '!!!') {
    message = `%c ${prefix} ${message.toUpperCase()} ${postfix}`;
    originalConsoleLog(message, `color:${color}`);
  };

})();

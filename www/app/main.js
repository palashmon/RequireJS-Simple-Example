require.config({
  paths: {
      // specify a path to jquery, the second declaration is the local fallback
      jquery: ["https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min"]
  }
});

define(function (require) {
	
	//debugger;
	console.log("JS : main");

    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var p = require('print');
	var c = require('./console');
    
	var msg = messages.getHello();
    p.print(msg);
});

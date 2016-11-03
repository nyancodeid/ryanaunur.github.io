
	/*
	 * NyanLibs.JS 
	 * Version 1.0
	 *  
	 *
	 * @author 		Ryan Aunur Rassyid
	 * @country 	Indonesia
	 * @demo 		https://ryanaunur.github.io/nyanlibs/1.0 
	 */


	// var
	var $_GET;
	var $_SERVER;

	// Function
	function parseResponseHeaders(headerStr) {
	  var headers = {};
	  if (!headerStr) {
	    return headers;
	  }
	  var headerPairs = headerStr.split('\u000d\u000a');
	  for (var i = 0; i < headerPairs.length; i++) {
	    var headerPair = headerPairs[i];
	    var index = headerPair.indexOf('\u003a\u0020');
	    if (index > 0) {
	      var key = headerPair.substring(0, index).toUpperCase();
	      var val = headerPair.substring(index + 2);
	      headers[key] = val;
	    }
	  }
	  return headers;
	}

	// Main 
	var qs = document.location.search;
	qs = qs.split('+').join(' ');
	var params = {},
	    tokens,
	    re = /[?&]?([^=]+)=([^&]*)/g;
	while (tokens = re.exec(qs)) {
	    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
	}
	var result = params;
	$_GET = params;


	var engine = new XMLHttpRequest();
	engine.open('GET', document.location, false);
	engine.send(null);
	var headers = engine.getAllResponseHeaders().toLowerCase();
	headers = parseResponseHeaders(headers);
	headers["PROTOCOL"] = location.protocol;
	headers["HOSTNAME"] = location.hostname;
	headers["PORT"] = (location.port ? ':'+location.port: '80');


	$_SERVER = headers;


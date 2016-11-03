
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
	function parseUri (str) {
		var	o   = parseUri.options,
			m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
			uri = {},
			i   = 14;

		while (i--) uri[o.key[i]] = m[i] || "";

		return uri;
	};
	parseUri.options = {
		strictMode: false,
		key: ["SOURCE","PROTOCOL","AUTHORITY","USERINFO","USER","PASSWORD","HOST","PORT","RELATIVE","PATH","DIRECTORY","FILE","QUERY","ANCHOR"],
		q:   {
			name:   "queryKey",
			parser: /(?:^|&)([^&=]*)=?([^&]*)/g
		},
		parser: {
			strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
			loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
		}
	};

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
	var uri = parseUri(document.location);

	headers = headers.push(uri);

	$_SERVER = headers;


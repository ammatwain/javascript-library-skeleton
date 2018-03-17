;(function(window){
	// You can enable the strict mode commenting the following line  
	'use strict';

	// This function will contain all our code
	var javascript_library_skeleton = function (root_value=null){
		let rootValue = root_value;
		let SELF = {}; // SELF = Internal javascript_library_skeleton Object

		// This variable will be inaccessible to the user,
		// only can be visible in the scope of your library.
		let options = {
			option_a:null,
			option_b:null,
		};

		// Set a private property
		SELF.setOptionA = function(value){
			options.option_a = 'Option A is ' + rootValue + ' ' + value;
			return SELF;
		};

		// Set a private property
		SELF.setOptionB = function(value){
			options.option_b = 'Option B is ' + rootValue + ' ' + value;
			return SELF;
		};

		// Get a private property
		SELF.getOptionA = function(){
			return options.option_a;
		};

		// Get a private property
		SELF.getOptionB = function(){
			return options.option_b;
		};

		// Get a protected copy of the private properties 
		SELF.getOptions = function(){
			return Object.assign(options);
		};

		return SELF;
	}

	// We need that our library is globally accesible,
	// then we save in the window
	if(typeof(window.JavascriptLibrarySkeleton) === 'undefined'){
		window.Wawa = javascript_library_skeleton;
	}
	if(typeof(window.jls) === 'undefined'){
		window.jls = javascript_library_skeleton;
	}
})(window); // We send the window variable withing our function

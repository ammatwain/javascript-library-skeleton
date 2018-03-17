;(function(window){
	// You can enable the strict mode commenting the following line  
	'use strict';

	// This function will contain all our code
	var javascript_library_skeleton = function (root_value=null){

		let rootValue = root_value;
		let javascript_library_skeleton_object = {};

		// This variable will be inaccessible to the user, only can be visible in the scope of your library.
		let options = {
			option_a:null,
			option_b:null,
		};
		

		// Change a private property
		javascript_library_skeleton_object.setOptionA = function(value){
			options.option_a = value;
			return value;
		};
		
		// Change a private property
		javascript_library_skeleton_object.setOptionB = function(value){
			options.option_b = value;
			return settings.mute;
		};
		
		// Change a private property
		javascript_library_skeleton_object.getOptionA = function(){
			return options.option_a;
		};
		
		javascript_library_skeleton_object.getOptionB = function(){
			return options.option_b;
		};

		javascript_library_skeleton_object.getOptions = function(){
			return Object.clone(settings);
		};

		return javascript_library_skeleton_object;
	}

	// We need that our library is globally accesible, then we save in the window
	if(typeof(window.JavascriptLibrarySkeleton) === 'undefined'){
		window.Wawa= javascript_library_skeleton;
	}
	if(typeof(window.jls) === 'undefined'){
		window.jls= javascript_library_skeleton;
	}
})(window); // We send the window variable withing our function

/*
Component.js
Author: Alex Boisselle
Date: 04-14-2016
Description: Custom component class for in-class experiment
			 This component simply houses the default functionalities
			 that a "Component" should have and can be inherited to
			 form other more specific component classes
Dependencies: jQuery
Options:
	container:STRING  		jQuery css selector that will be the target container
	opts:OBJECT 	  		JSON object containing custom styles (component dependant)
	data:OBJECT             JSON object containing raw data to pass through to template
*/

function Component(){
	var component = {
		init: function(target, data, opts){
			//sets instance values
			this.target = target;
			this.data = data;
			this.opts = opts;

			this.render();
		},
		// getDependency: function(url, parseCallback){
		// 	$.ajax({
		// 	  url: url
		// 	}).done(function(data) {
		// 	  parseCallback(data);
		// 	});
		// },
		getHTML: function(callback){
			var html = "html";
			callback(html);
		},
		getCSS: function(callback){
			var css = "css";
			callback(css);
		},
		render: function(){

			var self = this;

			// 1. get the html
			// 2. append the html into the page
			
			//get the html (overwritten)
			this.getHTML(function(htmlResponse){
				//we have html, append it
				$("#save-form-button").append(htmlResponse);

				self.bind();
			});

		},
		bind: function(){
			if(this.opts){
				$(this.target).on('click', this.opts.onClick);
			}
		},
		destroy: function(){

		}
	};

	return component;
}





function testFn(callback){
	console.log("test fn fired.");
	
	callback(10);
}

testFn(function(number){
	console.log(number);
});
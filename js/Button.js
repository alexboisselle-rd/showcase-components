/*
Button.js
Author: Alex Boisselle
Date: 04-14-2016
Description: Custom button component class for in-class experiment
			 This button is quite simple, it pulls CSS and view, generates
			 the button and wires up the events
Dependencies: jQuery
			  Component.js
			  templates/template.button.html
			  css/styles.button.css
Options:
	
*/

//inheriting Component properties
Button.prototype = new Component();

function Button(target, data, opts){
	this.getCSS= function(){
		
	};

	this.getHTML = function(continueRender){
		//1. set html
		var htmlString = '<input id="submitBtn" type="button" value="">';

		//2. parse html

		//3. respond to parent class with the html
		continueRender(htmlString);


		// $.ajax('http://localhost:3000/users/').done(function(response){
		// 	console.log(response);
		// });

		$.ajax({
			type:'POST',
			url: "http://localhost:3000/users/",
			data: {}
		}).done(function(response){
			console.log(response);
		});
	};

	this.init(target, data, opts);
}
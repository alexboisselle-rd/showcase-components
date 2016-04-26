/*
Card.js
Author: Alex Boisselle
Date: 04-14-2016
Description: Custom card component class for in-class experiment
			 This card is quite simple, it pulls CSS and view, generates
			 the button and wires up the events
Dependencies: jQuery
			  Component.js
			  template/template.card.html
			  css/styles.card.css
Options:

*/

//inheritance
Card.prototype = new Component();

function Card(target, data, opts){
	this.makeCSS = function(){
		console.log("card make css");
	}

	this.init(target, data, opts);
}
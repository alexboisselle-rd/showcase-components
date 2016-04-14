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
	onClick:FUNCTION  		events to bind on click
	onComplete:FUNCTION     events to bind on completion
	onDestroy:FUNCTION      events to bind when destroying the component
*/
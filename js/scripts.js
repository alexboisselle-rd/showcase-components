var $ = jQuery;


//when all the HTML has loaded, start up
$(document).ready(function(){

	//setup the upload button events
	$('#file').change(function(){
		if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e){
            	//sets the upload background styles
            	$('#upload_container').attr('style', 'background-image:url(' + e.target.result + ');');

            	//sets the upload data-image attribute to the URL of the uploaded image for use later
            	$('#upload_container').attr('data-image', e.target.result);
            };
            reader.readAsDataURL(this.files[0]);
        }
	});

	//create save button component, on click of that button, it generates a card

	$('#submitBtn').on('click' , function(){
		extractData();
	});
});




//global function scollBottom
//scrolls to the bottom and resizes window
function scrollBottom(){
	$( window ).resize();
    $('html, body').animate({scrollTop: $("#myStock").offset().top});
}



//global function extractData
//gets the data from the form
function extractData(){

	//extract the data
	var data = {
		username: 		$('#inputName').val(),
    	carBrand: 		$('#car-brand').val(),
    	carModel: 		$('#car-model').val(),
    	carYear: 		$('#car-year').val(),
    	carColor: 		$('#car-color').val(),
    	carLux: 		$('#car-luxury').val(),
    	carPerform: 	$('#car-performance').val(),
    	carDescription: $('#car-description').val(),
    	carImageUrl:    $('#upload_container').attr('data-image'),
    	luxIcon:        "<!-- not lux -->",
    	performIcon:    "<!-- not perm -->"
	}

	//set the lux & perform icons
    if($("#car-luxury").prop('checked') == true){
    	data.luxIcon = "<img class='type-icon' src='images/luxury.svg' />";
    }

    if($("#car-performance").prop('checked') == true){
    	data.performIcon = "<img class='type-icon' src='images/transport.svg' />";
    }

    //Validation
    //this loop goes throung the extracted data, if something hasn't 
    //been filled, this function will end and return false
    for(var p in data){
    	var value = data[p];

    	if(value == "" || !value || !value.length){
    		return false;
    	}
    }

    //each field has been filled since it passed the check
    //return the data, this will also return as "true"
    return data;

}
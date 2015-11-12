$(document).ready(function() {

var city = "none";

//choose button for output//
	
$('#submit-btn').click(chooseCity);

//create function to check and change backgrounds//
function chooseCity()
//no auto reset//
{
	event.preventDefault()
  	
  	city = $("#city-type").val();
  	city = city.toLowerCase();

  	if (city == "new york" ||  city == "new york city" || city == "nyc" || city == "NYC" || 
  		city = "ny")

	{
		$("body").attr("class", "nyc")
	}
	else if (city == "san francisco" || city == "sf" || city == "san fran")
	{
		$("body").attr("class", "sf")
	}	
	else if (city == "los angeles" || city == "la" || city == "lax")
	{
		$("body").attr("class", "la")
	}
	else if (city == "austin" || city == "atx")
	{
		$("body").attr("class", "austin")
	}
	else if (city == "sydney" || city == "syd")
	{
		$("body").attr("class","sydney")
	}
	else if (city == "seattle" || city == "sea")

	else

	{
		$("body").css("background-image","url("images/citi_skyline.jpg")")

	}

}

});
 





















//    $('#city-type').change(function(){
		
// 		var selectedCity = $('#city-type').val();
		
// 		if (selectedCity == 'NYC'){
// 			$('body').css('background-image', 'url(../images/nyc.jpg)';
// 		}

// 		else if (selectedCity == 'SF'){
// 			$('body').css('background-image', 'url(../images/sf.jpg)';
// 		}
// 		else if (selectedCity == 'LA'){
// 			$('body').css('background-image', 'url(../images/la.jpg)';
// 		}
// 		else if (selectedCity == 'ATX'){
// 			$('body').css('background-image', 'url(../images/austin.jpg)';
// 		}
// 		else if (selectedCity == 'SYD'){
// 			$('body').css('background-image', 'url(../images/sydney.jpg)';
// 		}
// 		else if (selectedCity == 'SEA'){
// 			$('body').css('background-image', 'url(../images/seattle.jpg)';
// 		}
// 		else {
// 			$('body').css('background-image','url(../images/citipix_skyline.jpg)';
// 		}
// 		//print the var selectedCity to console for debugging
// 		console.log('Selected City = ' + selectedCity);
// 	});



// });























// // $(document).ready(function(){
//  	var cities = ["NYC","SF","LA","ATX","SYD","SEA"];

//  	cities.forEach(function(city){
//  		$("#city-type").append("<option>"+ city + "</option>");
//  	}

//  });

//  $("#city-type").change(function(){
//  	var selectedCity = $(this).val();
//  	console.log("Selected City = " + selectCity);
//  	$("body").attr("class",selectedCity);

//  	});

//  });
















































// $(document).ready(function(){

// 	var city-type = 0;

// 	$("#form").submit(outputCity);

// 	function outputCity() {

// 		event.preventDefault();

// 		var entry = $("#text").val();

// 		entry = parseFloat(entry);

		

		
// 	}





// }




// <img id = "background">

// $("background(x,y)
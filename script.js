$(document).ready(function() {


	$("p").click(function() {
		$("p").css("color","red");
	});
	$("h2").hover(function() {
		$("h2").css("background-color","lightblue");
		$(this).css("font-size","24px");
	});
	$(".bottom_button").hover(
		function() {
			$("body").css("background-color","black");
			}, function() {
				$("body").css("background-color","grey");
			}
		); 
 

 	$("#stream1_btn").on("click", function() {			// can use instead $("#stream1_btn").click(function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


}); 

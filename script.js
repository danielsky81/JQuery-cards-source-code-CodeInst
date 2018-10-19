$(document).ready(function() {

	$("p").click(function() {
		$(this).children("a").css("background-color", "yellow");
	});

	

	// $("a").replaceWith("<button>Button</button>");
	// $("button").addClass("bottom_button makeRed");

	// $("button").addClass("makeRed");

	// $("button")
	// .mouseenter(function() {
	// 	$(this).removeClass("makeRed").addClass("makeBorder");
	// })
	// .mouseleave(function() {
	// 	$(this).removeClass("makeBorder").addClass("makeRed")
	// });

	// $("button").click(function() {
	// 	$("p").slideToggle("slow");
	// });
	
		

	// $("p").click(function() {
	// 	$("p").css("color","red");
	// });
	// $("h2").hover(function() {
	// 	$("h2").css("background-color","lightblue");
	// 	$(this).css("font-size","24px");
	// });
	// $(".bottom_button").hover(
	// 	function() {
	// 		$("body").css("background-color","black");
	// 		}, function() {
	// 			$("body").css("background-color","grey");
	// 		}
	// 	); 
 	
	// $("#stream1_btn").on("click", function() {
	// 	$(".stream1").toggle("fast");
	// });



	// $("button")
	// .mouseenter(function() {
	// 	$(this).fadeTo("slow", 0.3);
	// })
	// .mouseleave(function() {
	// 	$(this).fadeTo("slow", 1);
	// });


 // 	$("#stream1_btn").on("click", function() {			
 // 		$(".stream1").removeClass('highlight_stream');
	// 	$(".stream2").removeClass('highlight_stream');
	// 	$(".stream3").removeClass('highlight_stream');
	//   	$(".stream1").addClass('highlight_stream');
	// });
	// $("#stream2_btn").on("click", function() {
	// 	$(".stream1").removeClass('highlight_stream');
	// 	$(".stream2").removeClass('highlight_stream');
	// 	$(".stream3").removeClass('highlight_stream');
	//   	$(".stream2").addClass('highlight_stream');
	// });
	// $("#stream3_btn").on("click", function() {
	// 	$(".stream1").removeClass('highlight_stream');
	// 	$(".stream2").removeClass('highlight_stream');
	// 	$(".stream3").removeClass('highlight_stream');
	//   	$(".stream3").addClass('highlight_stream');
	// });


}); 

// Event on button in portfolio
$(".portfolio button").click(function(event) {
	/* Act on the event */
	var data = $(this).attr("data");
	$(this).addClass('active');
	$(this).siblings('button.active').removeClass("active");	

	if (data == undefined) {
		$(this).nextAll(".row").children().show();
	}
	else {
		//Hiển thị những div thõa mãn giá trị của biến data
		$("div[data=" + data + "]").show();
		//còn lại sẽ ẩn đi những div không thõa mãn giá trị của biến data
		$(this).nextAll(".row").children().not("div[data=" + data + "]").hide();
	}
});

//Gọi hàm ẩn/hiện back-to-top
toggleBackToTop();

// Animation Menu
$(window).scroll(function(event) {
	/* Act on the event */
	// console.log($(this).scrollTop());
	// Menu fixed top chỉ xuất hiện khi window sroll top >= vị trí top của portfolio
	if($(this).scrollTop() >= $("#portfolio").offset().top) {
		$("nav").addClass('fixed-top');
		$("#home").addClass('dummy-padding');
	}
	else {
		$("nav").removeClass('fixed-top');
		$("#home").removeClass('dummy-padding');
	}

	//gọi hàm ẩn/hiện back-to-top
	toggleBackToTop();

});


function toggleBackToTop() {
	//window scroll top là 0 thì ẩn
	//Ngược lại thì hiện
	if ($(window).scrollTop() == 0) {
		//ẩn
		$(".back-to-top").fadeOut();
	}
	else {
		//hiện
		$(".back-to-top").fadeIn();
	}
}

$(".back-to-top").click(function(event) {
	/* Act on the event */
	//chạy với vận tốc v = 2px/ms
	var positionTopOfButtonBack = $(this).offset().top;
	var distance = positionTopOfButtonBack - 0;//px
	var v = 2;//2px/ms
	var time = distance / v;
	$("body,html").animate({
		scrollTop: 0,
		},
		time, function() {
		/* stuff to do after animation is complete */
	});
});
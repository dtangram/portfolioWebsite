$(document).ready(function() {
	const preloader = $(".preloader"),
				loadImag = $(".loadImag"),
				particleClass = $(".particleClass"),
				particle1 = $(".particle1"),
				particle2 = $(".particle2"),
				particle3 = $(".particle3"),
				loadTxt = $(".loadTxt"),
				projects = $("#projects"),
				contact = $("#contact"),
				linkHome = $("#linkHome"),
				linkprojects = $("#linkprojects"),
				linkContact = $("#linkContact"),
				thumbsNthchild = $("#projects section:nth-child(2) article .thumbs a:nth-child(1) li"),
				thumbsNthchild2 = $("#projects section:nth-child(2) article .thumbs a:nth-child(2) li"),
				thumbsNthchild3 = $("#projects section:nth-child(2) article .thumbs a:nth-child(3) li"),
				thumbsNthchild4 = $("#projects section:nth-child(2) article .thumbs a:nth-child(4) li"),
				thumbsNthchild5 = $("#projects section:nth-child(3) article .thumbs a:nth-child(1) li"),
				thumbsNthchild6 = $("#projects section:nth-child(3) article .thumbs a:nth-child(2) li"),
				thumbsNthchild7 = $("#projects section:nth-child(3) article .thumbs a:nth-child(3) li"),
				thumbsNthchild8 = $("#projects section:nth-child(3) article .thumbs a:nth-child(4) li"),
				overlay1 = $("#overlay1"),
				overlay2 = $("#overlay2"),
				overlay3 = $("#overlay3"),
				overlay4 = $("#overlay4"),
				overlay5 = $("#overlay5"),
				overlay6 = $("#overlay6"),
				overlay7 = $("#overlay7"),
				overlay8 = $("#overlay8"),
				projectsThumbs1 = $("#projects article:nth-child(3) .thumbs"),
				projectsThumbs2 = $("#projects article:nth-child(4) .thumbs"),
				projectsThumbs3 = $("#projects article:nth-child(5) .thumbs"),
				projectsThumbs4 = $("#projects article:nth-child(6) .thumbs"),
				thumb1 = $("#thumb1"),
				thumb2 = $("#thumb2"),
				thumb3 = $("#thumb3"),
				thumb4 = $("#thumb4"),
				thumb5 = $("#thumb5"),
				thumb6 = $("#thumb6"),
				thumb7 = $("#thumb7"),
				thumb8 = $("#thumb8"),
				uiTxt = $(".uiTxt");

		// PRELOADER
	$(".particleClass").stop().animate({"opacity": "1"}, 9000);

	$(window).load(
	function(){
		loadTxt.stop().animate({"opacity": "0"}, 800);
		particleClass.stop().animate({"opacity": "0"}, 800,
		function(){
			loadImag.stop().animate({"opacity": "0", "margin-top": "10%"}, 300,
			function(){
				preloader.stop().animate({"opacity": "0", "z-index": "-1", "display": "none", "visibility": "hidden"}, 1000);
			});
		});
	});


	// MOVE SCROLL BAR TO TOP OF PAGE WHEN PAGE RELOADS
	$(window).scrollTop(0);

  // ANCHOR LINK SCROLLING
	jQuery(function(){
		jQuery('a[href*=#]:not([href=#])').click(function()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
			{
				target = jQuery(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length)
				{
					jQuery('html,body').animate({scrollTop: target.offset ().top}, 2000);
					return false;
				}
			}
		});
	});
  //

  $(window).scroll((event) => {
    if ($(window).scrollTop() > 940) {
      $('.bckColor').stop().animate({ opacity: '1' }, 150);
      $('#bck').stop().animate({ opacity: '0', display: 'none' }, 500);
    }

    if ($(window).scrollTop() < 920) {
      $('.bckColor').stop().animate({ opacity: '0' }, 200);
      $('#bck').stop().animate({ opacity: '1', display: 'block' }, 200);
    }
  });

	// DOWN ARROW
	$("#dwnArr").mouseover(function(){
		$("#dwnArr").css({"position": "absolute", "z-index": "4", "left": "0", "right": "0"}).stop().animate({"opacity": "1", "margin-top": "50px"}, 500,
		function(){
			$("#dwnArr").removeClass("down");
		});
	});

	$("#dwnArr").mouseout(function(){
		$("#dwnArr").stop().animate({"opacity": "0"}, 500,
		function(){
			$("#dwnArr").addClass("down");
		});
	});

	// PROJECTS
	thumbsNthchild.mouseover(function()
	{
		thumb1.stop().animate({"opacity": "0", "left": "480px"}, 500);
		overlay1.stop().animate({"left": "480px"}, 500, function(){
			overlay1.css("display", "none");
		});
	});

	thumbsNthchild.mouseout(function()
	{
		overlay1.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb1.stop().animate({"left": "0"}, 500, function() {
			thumb1.stop().animate({"opacity": "1"}, 500);
		});

		// if($(window).width() < 1200)
		// {
		// 	$(overlay1).css("display", "none");
		// 	thumb1.css("display", "none");
		// }
	});


	thumbsNthchild2.mouseover(function()
	{
		thumb2.stop().animate({"opacity": "0", "left": "-480px"}, 500);
		overlay2.stop().animate({"left": "-480px"}, 500, function(){
			overlay2.css("display", "none");
		});
	});

	thumbsNthchild2.mouseout(function()
	{
		overlay2.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb2.stop().animate({"left": "0"}, 500, function() {
			thumb2.stop().animate({"opacity": "1"}, 500);
		});

		// if($(window).width() < 1200)
		// {
		// 	$(overlay2).css("display", "none");
		// 	thumb2.css("display", "none");
		// }
	});


	thumbsNthchild3.mouseover(function()
	{
		thumb3.stop().animate({"opacity": "0", "left": "480px"}, 500);
		overlay3.stop().animate({"left": "480px"}, 500, function(){
			overlay3.css("display", "none");
		});
	});

	thumbsNthchild3.mouseout(function()
	{
		overlay3.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb3.stop().animate({"left": "0"}, 500, function() {
			thumb3.stop().animate({"opacity": "1"}, 500);
		});
	});


	thumbsNthchild4.mouseover(function()
	{
		thumb4.stop().animate({"opacity": "0", "left": "-480px"}, 500);
		overlay4.stop().animate({"left": "-480px"}, 500, function(){
			overlay4.css("display", "none");
		});
	});

	thumbsNthchild4.mouseout(function()
	{
		overlay4.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb4.stop().animate({"left": "0"}, 500, function() {
			thumb4.stop().animate({"opacity": "1"}, 500);
		});
	});


	thumbsNthchild5.mouseover(function()
	{
		thumb5.stop().animate({"opacity": "0", "top": "500px"}, 500);
		overlay5.stop().animate({"top": "500px"}, 500, function(){
			overlay5.css("display", "none");
		});
	});

	thumbsNthchild5.mouseout(function()
	{
		overlay5.css("display", "block").stop().animate({"top": "0"}, 500);
		thumb5.stop().animate({"top": "0"}, 500, function() {
			thumb5.stop().animate({"opacity": "1"}, 500);
		});
	});


	thumbsNthchild6.mouseover(function()
	{
		thumb6.stop().animate({"opacity": "0", "top": "-500px"}, 500);
		overlay6.stop().animate({"top": "-500px"}, 500, function(){
			overlay6.css("display", "none");
		});
	});

	thumbsNthchild6.mouseout(function()
	{
		overlay6.css("display", "block").stop().animate({"top": "0"}, 500);
		thumb6.stop().animate({"top": "0"}, 500, function() {
			thumb6.stop().animate({"opacity": "1"}, 500);
		});
	});


	thumbsNthchild7.mouseover(function()
	{
		thumb7.stop().animate({"opacity": "0", "left": "-480px"}, 500);
		overlay7.stop().animate({"left": "-480px"}, 500, function(){
			overlay7.css("display", "none");
		});
	});

	thumbsNthchild7.mouseout(function()
	{
		overlay7.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb7.stop().animate({"left": "0"}, 500, function() {
			thumb7.stop().animate({"opacity": "1"}, 500);
		});
	});


	thumbsNthchild8.mouseover(function()
	{
		thumb8.stop().animate({"opacity": "0", "left": "480px"}, 500);
		overlay8.stop().animate({"left": "480px"}, 500, function(){
			overlay8.css("display", "none");
		});
	});

	thumbsNthchild8.mouseout(function()
	{
		overlay8.css("display", "block").stop().animate({"left": "0"}, 500);
		thumb8.stop().animate({"left": "0"}, 500, function() {
			thumb8.stop().animate({"opacity": "1"}, 500);
		});
	});

  // AUTOMATIC COPYRIGHT YEAR CHANGE
  const today = new Date();
  const year = today.getFullYear();
  $('footer article p').html(`© ${year}, Douglas Angram Portfolio Website. All rights reserved.`);
});

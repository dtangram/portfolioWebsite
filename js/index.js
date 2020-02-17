$(document).ready(function() {
  // ANCHOR LINK SCROLLING
	jQuery(function(){
		jQuery('a[href*=#]:not([href=#])').click(function()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
			{
				var target = jQuery(this.hash);
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

  // AUTOMATIC COPYRIGHT YEAR CHANGE
  const today = new Date();
  const year = today.getFullYear();
  $('footer article p').html(`© ${year}, Douglas Angram Portfolio Website. All rights reserved.`);
});

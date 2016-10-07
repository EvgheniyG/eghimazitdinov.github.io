/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* Tweetie
------------------------------------------------------ */

$('.tweet').twittie({
    owner: 'evgimov_i',
    dateFormat: '%b. %d, %Y',
    template: '{{tweet}} <div class="date">{{date}}</div>',
    count: 3,
    loadingText: 'Loading!',
    apiPath:'../api/tweet.php'
});

/*----------------------------------------------------*/
/* Progress skills bar
------------------------------------------------------ */

    var color = ['#BEE3F7', '#45AEEA'];

    circles = [], percentages = [30,80,80,75,70,60,0,0];
    images = ['react.png','javascript.png','bootstrap.png','html5.svg','css3.svg','mongo.jpg','nodejs.png','expressjs.png'];
    for (var i = 1; i <= 8; i++) {
      var child = document.getElementById('circles-' + i),
        percentage = percentages[i-1],
        
        circle = Circles.create({
          id:         child.id,
          value:      percentage,
          radius:     80,
          width:      10,
          colors:     color,
          text: '<img src="../images/logos/'+ images[i-1] + '"/>',
          textClass: 'circles-text'
        });
      circles.push(circle);
    }

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismisshyg', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


});










(function ($) {
	"use strict";
   $(document).ready(function($){

			 // Sticky Menu
             $(window).on('scroll', function () {
                var scroll = $(window).scrollTop();
                if (scroll < 245) {
                    $(".header-area").removeClass("sticky");
                } else {
                    $(".header-area").addClass("sticky");
                }
            });
            // Sticky Menu
            
            // Start Slick Nav
            $('#mobile-menu').slicknav({
                prependTo: '.show-mobile-menu',
                allowParentLinks: true
            });
            // End Slick Nav

            // WOW active
            var wow = new WOW(
                {
                  boxClass:     'wow',      
                  animateClass: 'animated', 
                  offset:       0,         
                  mobile:       true,       
                  live:         true,  
                }
              );
              wow.init();
            //   

            // data - background
            $("[data-background]").each(function () {
                $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
            })

            // Choose Active
            $('.choose-box').on('mouseenter', function () {
                $(this).addClass('active').parent().siblings().find('.choose-box').removeClass('active');
            });


             //   Magnific Popup
            $(".video-popup").magnificPopup({
                type: 'iframe',
            });
            //   End  Magnific Popup

            // Testimonial-Carousel
            $('.active-testimonial').slick({
                autoplay: true,
                dots: false,
                arrows: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
                nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
                 centerMode: true,
                 centerPadding: '0',
               responsive: [
                 {
                   breakpoint: 1200,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll:1,
                     infinite: true,
                     dots: false,
                     centerMode: false,
                   }
                 },
                 {
                   breakpoint: 992,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     arrows: false,
                     centerMode: false,
                   }
                 },
                 {
                   breakpoint: 767,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     arrows: false,
                   }
                 }
               ]
             });

            // Brand-Carousel
            $('.brand-active').slick({
                autoplay: true,
                dots: false,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
               responsive: [
                 {
                   breakpoint: 1200,
                   settings: {
                     slidesToShow: 5,
                     slidesToScroll:1,
                     infinite: true,
                     dots: false,
                     centerMode: false,
                   }
                 },
                 {
                   breakpoint: 992,
                   settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1,
                     arrows: false,
                     centerMode: false,
                   }
                 },
                 {
                   breakpoint: 767,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1,
                     arrows: false,
                   }
                 }
               ]
             });

            //  Scroll Up
            $.scrollUp({
                scrollName: 'scrollUp', // Element ID
                topDistance: '300', // Distance from top before showing element (px)
                topSpeed: 300, // Speed back to top (ms)
                animation: 'fade', // Fade, slide, none
                animationInSpeed: 200, // Animation in speed (ms)
                animationOutSpeed: 200, // Animation out speed (ms)
                scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
                activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            });
            //   Scroll Up

      /* Search
  -------------------------------------------------------*/
  var $searchWrap = $('.search-wrap');
  var $navSearch = $('.nav-search');
  var $searchClose = $('#search-close');

  $('.search-trigger').on('click', function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: 'toggle' }, 500);
    $navSearch.add($searchClose).addClass("open");
  });

  $('.search-close').on('click', function (e) {
    e.preventDefault();
    $searchWrap.animate({ opacity: 'toggle' }, 500);
    $navSearch.add($searchClose).removeClass("open");
  });

  function closeSearch() {
    $searchWrap.fadeOut(200);
    $navSearch.add($searchClose).removeClass("open");
  }

  $(document.body).on('click', function (e) {
    closeSearch();
  });

  $(".search-trigger, .main-search-input").on('click', function (e) {
    e.stopPropagation();
  });
// Search======---->>>>

// Info bar
$('.info-bar').on('click', function () {
    $('.extra-info').addClass('info-open');
  })
  $('.close-icon').on('click', function () {
    $('.extra-info').removeClass('info-open');
  })
//   End Info BAr



   });




     // Start Map
  function basicmap() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 11,
      scrollwheel: false,
      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(40.6700, -73.9400), // New York
      // This is where you would paste any style found on Snazzy Maps.
      styles: [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#193341" }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#2c5a71" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#29768a" }, { "lightness": -37 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#406d80" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#406d80" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#3e606f" }, { "weight": 2 }, { "gamma": 0.84 }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "weight": 0.6 }, { "color": "#1a3541" }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#2c5a71" }] }]
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('contact-map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(40.6700, -73.9400),
      map: map,
      title: 'Cryptox'
    });
  }
  if ($('#contact-map').length != 0) {
    google.maps.event.addDomListener(window, 'load', basicmap);
  }
//  End Map

})(jQuery);

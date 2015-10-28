function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* PointerEvents
 ========================================================*/
;
(function ($) {
    if (isIE() && isIE() < 11) {
        include('js/pointer-events.js');
        $('html').addClass('lt-ie11');
        $(document).ready(function () {
            PointerEventsPolyfill.initialize({});
        });
    }
})(jQuery);

/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa fa-angle-up'
            });
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/* Superfish menus
 ========================================================*/
;
(function ($) {
    include('js/superfish.js');
})(jQuery);

/* Navbar
 ========================================================*/
;
(function ($) {
    include('js/jquery.rd-navbar.js');
})(jQuery);


/* Google Map
 ========================================================*/
;
(function ($) {
    var o = document.getElementById("google-map");
    if (o) {
        include('//maps.google.com/maps/api/js?sensor=false');
        include('js/jquery.rd-google-map.js');

        $(document).ready(function () {
            var o = $('#google-map');
            if (o.length > 0) {
                o.googleMap({
                    styles: [{
                        "featureType": "administrative.locality",
                        "elementType": "all",
                        "stylers": [{"hue": "#2c2e33"}, {"saturation": 7}, {"lightness": 19}, {"visibility": "on"}]
                    }, {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [{"hue": "#ffffff"}, {"saturation": -100}, {"lightness": 100}, {"visibility": "simplified"}]
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [{"hue": "#ffffff"}, {"saturation": -100}, {"lightness": 100}, {"visibility": "off"}]
                    }, {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{"hue": "#bbc0c4"}, {"saturation": -93}, {"lightness": 31}, {"visibility": "simplified"}]
                    }, {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [{"hue": "#bbc0c4"}, {"saturation": -93}, {"lightness": 31}, {"visibility": "on"}]
                    }, {
                        "featureType": "road.arterial",
                        "elementType": "labels",
                        "stylers": [{"hue": "#bbc0c4"}, {"saturation": -93}, {"lightness": -2}, {"visibility": "simplified"}]
                    }, {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{"hue": "#e9ebed"}, {"saturation": -90}, {"lightness": -8}, {"visibility": "simplified"}]
                    }, {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [{"hue": "#e9ebed"}, {"saturation": 10}, {"lightness": 69}, {"visibility": "on"}]
                    }, {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{"hue": "#e9ebed"}, {"saturation": -78}, {"lightness": 67}, {"visibility": "simplified"}]
                    }]
                });
            }
        });
    }
})
(jQuery);

/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Mailform
 =============================================*/
;
(function ($) {
    include('js/mailform/jquery.form.min.js');
    include('js/mailform/jquery.rd-mailform.min.js');
})(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');

/* Owl Carousel
 ========================================================*/
;
(function ($) {
    var o = $('.owl-carousel');
    if (o.length > 0) {
        include('js/owl.carousel.min.js');
        $(document).ready(function () {
            o.owlCarousel({
                margin: 20,
                smartSpeed: 450,
                loop: true,
                dots: true,
                dotsEach: 1,
                nav: false,
                navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
                responsive: {
                    0: {items: 1},
                    768: {items: 2},
                    980: {items: 3}
                }
            });
        });
    }
})(jQuery);

/* FancyBox
 ========================================================*/
;
(function ($) {
    var o = $('.thumb');
    if (o.length > 0) {
        include('js/jquery.fancybox.js');
        include('js/jquery.fancybox-media.js');
        include('js/jquery.fancybox-buttons.js');
        $(document).ready(function () {
            o.fancybox();
        });
    }
})(jQuery);

/* Style Switcher
 =============================================*/
;
(function ($) {
    include('js/jquery.rd-styleswitcher.js');
    $(document).ready(function () {
        $.rdstyleswitcher({
            schemes: [
                {
                    'id': 'Scheme 1',
                    'icon': '#ce546b'
                },
                {
                    'id': 'Scheme 2',
                    'url': 'css/colorScheme-1.css',
                    'icon': '#64B5F6'
                },
                {
                    'id': 'Scheme 3',
                    'url': 'css/colorScheme-2.css',
                    'icon': '#9575CD'
                },
                {
                    'id': 'Scheme 4',
                    'url': 'css/colorScheme-3.css',
                    'icon': '#FFA726'
                }, {
                    'id': 'Scheme 5',
                    'url': 'css/colorScheme-4.css',
                    'icon': '#81C784'
                }
            ]
        });
    });
})(jQuery);
/* Parallax
 =============================================*/
;
(function ($) {
    include('js/jquery.rd-parallax.js');
})(jQuery);
'use strict';

(function () {
    'use strict';

    svg4everybody();

    // ***** navigation ***** //

    var trig = document.querySelector('.nav__trigger');
    trig.addEventListener('click', function () {
        var navList = document.querySelector('.nav__list');

        if (navList.classList.contains('opened')) {
            navList.classList.remove('opened');
        } else {
            navList.classList.add('opened');
        }
    });

    // ***** bxslider ***** //
    var countSlide = void 0;

    $('#bxslider').bxSlider({
        auto: true,
        mode: 'fade',
        captions: true
    });

    var slider2 = void 0;

    $(window).on('load', function () {
        var windowWidth = $(window).width();
        if (windowWidth <= 425) {
            var slider = $('#bxslider2').bxSlider({
                pager: false,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 295,
                slideMargin: 15
            });
        } else {
            var slider = $('#bxslider2').bxSlider({
                pager: false,
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 370,
                slideMargin: 45
            });
        }
        return slider2 = slider;
    });

    $(window).resize(function () {
        if ($(window).width() <= 425) {
            slider2.reloadSlider({
                pager: false,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 295,
                slideMargin: 15
            });
        } else {
            slider2.reloadSlider({
                pager: false,
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 370,
                slideMargin: 45
            });
        }
    });
})();
'use strict';

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

//pin the intro
var pinIntroScene1 = new ScrollMagic.Scene({
	triggerElement: '.header',
	triggerHook: 0
}).setPin('.header', { pushFollowers: false }).addTo(controller);

// parallax scene
var parallaxTl = new TimelineMax();
parallaxTl.from('.brands__list', 0.5, { autoAlpha: 0, ease: Power0.easeNone }, 0.3).from('.brands__parallax', 1, { y: '-50%', ease: Power0.easeNone }, 0);

var slideParallaxScene = new ScrollMagic.Scene({
	triggerElement: '.brands',
	triggerHook: 1,
	duration: '100%'
}).setTween(parallaxTl).addTo(controller);

// loop throught each .project elements

var items = document.querySelectorAll('.tittle-wrap');

// build a scene
items.forEach(function (item) {
	var ourScene = new ScrollMagic.Scene({
		triggerElement: item,
		triggerHook: 0.9,
		duration: '100%'
	}).setClassToggle(item, 'fade-in') // add class to project01
	.addTo(controller);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcm9sbGluZy5qcyJdLCJuYW1lcyI6WyJzdmc0ZXZlcnlib2R5IiwidHJpZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZMaXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJjb3VudFNsaWRlIiwiJCIsImJ4U2xpZGVyIiwiYXV0byIsIm1vZGUiLCJjYXB0aW9ucyIsInNsaWRlcjIiLCJ3aW5kb3ciLCJvbiIsIndpbmRvd1dpZHRoIiwid2lkdGgiLCJzbGlkZXIiLCJwYWdlciIsIm1pblNsaWRlcyIsIm1heFNsaWRlcyIsInNsaWRlV2lkdGgiLCJzbGlkZU1hcmdpbiIsInJlc2l6ZSIsInJlbG9hZFNsaWRlciIsImNvbnRyb2xsZXIiLCJTY3JvbGxNYWdpYyIsIkNvbnRyb2xsZXIiLCJwaW5JbnRyb1NjZW5lMSIsIlNjZW5lIiwidHJpZ2dlckVsZW1lbnQiLCJ0cmlnZ2VySG9vayIsInNldFBpbiIsInB1c2hGb2xsb3dlcnMiLCJhZGRUbyIsInBhcmFsbGF4VGwiLCJUaW1lbGluZU1heCIsImZyb20iLCJhdXRvQWxwaGEiLCJlYXNlIiwiUG93ZXIwIiwiZWFzZU5vbmUiLCJ5Iiwic2xpZGVQYXJhbGxheFNjZW5lIiwiZHVyYXRpb24iLCJzZXRUd2VlbiIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJvdXJTY2VuZSIsIml0ZW0iLCJzZXRDbGFzc1RvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQVc7QUFDVjs7QUFFRUE7O0FBRUo7O0FBRUEsUUFBTUMsT0FBT0MsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0FBQ0FGLFNBQUtHLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDdEMsWUFBSUMsVUFBVUgsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFkOztBQUVBLFlBQUdFLFFBQVFDLFNBQVIsQ0FBa0JDLFFB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QUFULENBQTBCLGNBQTFCLENBQWQ7O0FBRUE7QUFDQUQsTUFBTUUsT0FBTixDQUFjLGdCQUFRO0FBQ3JCLEtBQU1DLFdBQVcsSUFBSXZCLFlBQVlHLEtBQWhCLENBQXNCO0FBQ3RDQyxrQkFBZ0JvQixJQURzQjtBQUV0Q25CLGVBQWEsR0FGeUI7QUFHdENhLFlBQVU7QUFINEIsRUFBdEIsRUFLaEJPLGNBTGdCLENBS0RELElBTEMsRUFLSyxTQUxMLEVBS2dCO0FBTGhCLEVBTWhCaEIsS0FOZ0IsQ0FNVlQsVUFOVSxDQUFqQjtBQU9BLENBUkQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBzdmc0ZXZlcnlib2R5KCk7XHJcblxyXG4vLyAqKioqKiBuYXZpZ2F0aW9uICoqKioqIC8vXHJcblxyXG5jb25zdCB0cmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fdHJpZ2dlcicpO1xyXG50cmlnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpc3QnKTtcclxuICAgIFxyXG4gICAgaWYobmF2TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW5lZCcpKSB7XHJcbiAgICAgICAgbmF2TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCdvcGVuZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyAqKioqKiBieHNsaWRlciAqKioqKiAvL1xyXG4gICAgbGV0IGNvdW50U2xpZGU7XHJcblxyXG4gICAgJCgnI2J4c2xpZGVyJykuYnhTbGlkZXIoe1xyXG4gICAgICAgIGF1dG86IHRydWUsXHJcbiAgICAgICAgbW9kZTogJ2ZhZGUnLFxyXG4gICAgICAgIGNhcHRpb25zOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgc2xpZGVyMjtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBpZiAoIHdpbmRvd1dpZHRoIDw9IDQyNSApIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9ICQoJyNieHNsaWRlcjInKS5ieFNsaWRlcih7XHJcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtaW5TbGlkZXM6IDEsXHJcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXM6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiAyOTUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogMTVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9ICQoJyNieHNsaWRlcjInKS5ieFNsaWRlcih7XHJcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtaW5TbGlkZXM6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXM6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiAzNzAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogNDVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbGlkZXIyID0gc2xpZGVyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDw9IDQyNSApIHtcclxuICAgICAgICAgICAgc2xpZGVyMi5yZWxvYWRTbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWluU2xpZGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogMjk1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDE1XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlcjIucmVsb2FkU2xpZGVyKHtcclxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1pblNsaWRlczogMyxcclxuICAgICAgICAgICAgICAgIG1heFNsaWRlczogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IDM3MCxcclxuICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiA0NVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkoKTtcclxuIiwiLy8gSW5pdCBTY3JvbGxNYWdpY1xyXG5jb25zdCBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHJcbi8vcGluIHRoZSBpbnRyb1xyXG5jb25zdCBwaW5JbnRyb1NjZW5lMSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcblx0dHJpZ2dlckVsZW1lbnQ6ICcuaGVhZGVyJyxcclxuXHR0cmlnZ2VySG9vazogMFxyXG59KVxyXG4uc2V0UGluKCcuaGVhZGVyJywge3B1c2hGb2xsb3dlcnM6IGZhbHNlfSlcclxuLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cclxuLy8gcGFyYWxsYXggc2NlbmVcclxuY29uc3QgcGFyYWxsYXhUbCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5wYXJhbGxheFRsXHJcblx0LmZyb20oJy5icmFuZHNfX2xpc3QnLCAwLjUsIHthdXRvQWxwaGE6IDAsIGVhc2U6IFBvd2VyMC5lYXNlTm9uZX0sIDAuMylcclxuXHQuZnJvbSgnLmJyYW5kc19fcGFyYWxsYXgnLCAxLCB7eTogJy01MCUnLCBlYXNlOiBQb3dlcjAuZWFzZU5vbmV9LCAwKTtcclxuXHJcbmNvbnN0IHNsaWRlUGFyYWxsYXhTY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcblx0dHJpZ2dlckVsZW1lbnQ6ICcuYnJhbmRzJyxcclxuXHR0cmlnZ2VySG9vazogMSxcclxuXHRkdXJhdGlvbjogJzEwMCUnXHJcbn0pXHJcbi5zZXRUd2VlbihwYXJhbGxheFRsKVxyXG4uYWRkVG8oY29udHJvbGxlcik7XHJcblxyXG4vLyBsb29wIHRocm91Z2h0IGVhY2ggLnByb2plY3QgZWxlbWVudHNcclxuXHJcbmNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdHRsZS13cmFwJyk7XHJcblxyXG4vLyBidWlsZCBhIHNjZW5lXHJcbml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcblx0Y29uc3Qgb3VyU2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG5cdFx0dHJpZ2dlckVsZW1lbnQ6IGl0ZW0sXHJcblx0XHR0cmlnZ2VySG9vazogMC45LFxyXG5cdFx0ZHVyYXRpb246ICcxMDAlJ1xyXG5cdH0pXHJcblx0LnNldENsYXNzVG9nZ2xlKGl0ZW0sICdmYWRlLWluJykgLy8gYWRkIGNsYXNzIHRvIHByb2plY3QwMVxyXG5cdC5hZGRUbyhjb250cm9sbGVyKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

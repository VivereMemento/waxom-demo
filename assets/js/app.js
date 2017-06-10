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
var pinIntroScene = new ScrollMagic.Scene({
	triggerElement: '.header',
	triggerHook: 0
}).setPin('.header', { pushFollowers: false }).addTo(controller);

var servicesTl = new TimelineMax();
var services = document.querySelectorAll('.service__img');
servicesTl.staggerFrom(services, 0.5, { autoAlpha: 0, transform: 'scale(5)' }, 0.2);

// scaling all .service__img
var servicesScene = new ScrollMagic.Scene({
	triggerElement: '.service',
	triggerHook: 0.8
})
// .addIndicators({
// 		name: "services",
// 		colorTrigger: 'red',
// 		indent: 15,
// 		colorStart: '#75C695',
// 		colorEnd: 'red'
// })
.setTween(servicesTl).addTo(controller);

// loop throught each .tittle elements
var items = document.querySelectorAll('.tittle-wrap');

// build a scene
items.forEach(function (item) {
	var tittleTl = new TimelineMax();
	var tittle = item.querySelector('.tittle');
	var subTittle = item.querySelector('.sub-tittle');

	if (tittle) {
		tittleTl.from(tittle, 0.5, { autoAlpha: 0, transform: 'scale(2)', ease: Power0.easeNone }).from(subTittle, 0.5, { autoAlpha: 0, y: 10, ease: Power0.easeNone });
	} else {
		return;
	};

	var ourScene = new ScrollMagic.Scene({
		triggerElement: item,
		triggerHook: 0.9
	})
	// .addIndicators({
	// 	name: "fade scene",
	// 	colorTrigger: 'red',
	// 	indent: 15,
	// 	colorStart: '#75C695',
	// 	colorEnd: 'red'
	// })
	.setTween(tittleTl).addTo(controller);
});

// parallax scene
var parallaxTl = new TimelineMax();
parallaxTl.from('.brands__list', 0.5, { autoAlpha: 0, ease: Power0.easeNone }, 0.3).from('.brands__parallax', 1, { y: '-50%', ease: Power0.easeNone }, 0);

var slideParallaxScene = new ScrollMagic.Scene({
	triggerElement: '.brands',
	triggerHook: 1,
	duration: '100%'
}).setTween(parallaxTl).addTo(controller);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcm9sbGluZy5qcyJdLCJuYW1lcyI6WyJzdmc0ZXZlcnlib2R5IiwidHJpZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZMaXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJjb3VudFNsaWRlIiwiJCIsImJ4U2xpZGVyIiwiYXV0byIsIm1vZGUiLCJjYXB0aW9ucyIsInNsaWRlcjIiLCJ3aW5kb3ciLCJvbiIsIndpbmRvd1dpZHRoIiwid2lkdGgiLCJzbGlkZXIiLCJwYWdlciIsIm1pblNsaWRlcyIsIm1heFNsaWRlcyIsInNsaWRlV2lkdGgiLCJzbGlkZU1hcmdpbiIsInJlc2l6ZSIsInJlbG9hZFNsaWRlciIsImNvbnRyb2xsZXIiLCJTY3JvbGxNYWdpYyIsIkNvbnRyb2xsZXIiLCJwaW5JbnRyb1NjZW5lIiwiU2NlbmUiLCJ0cmlnZ2VyRWxlbWVudCIsInRyaWdnZXJIb29rIiwic2V0UGluIiwicHVzaEZvbGxvd2VycyIsImFkZFRvIiwic2VydmljZXNUbCIsIlRpbWVsaW5lTWF4Iiwic2VydmljZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RhZ2dlckZyb20iLCJhdXRvQWxwaGEiLCJ0cmFuc2Zvcm0iLCJzZXJ2aWNlc1NjZW5lIiwic2V0VHdlZW4iLCJpdGVtcyIsImZvckVhY2giLCJ0aXR0bGVUbCIsInRpdHRsZSIsIml0ZW0iLCJzdWJUaXR0bGUiLCJmcm9tIiwiZWFzZSIsIlBvd2VyMCIsImVhc2VOb25lIiwieSIsIm91clNjZW5lIiwicGFyYWxsYXhUbCIsInNsaWRlUGFyYWxsYXhTY2VuZSIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBVztBQUNWOztBQUVFQTs7QUFFSjs7QUFFQSxRQUFNQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWI7QUFDQUYsU0FBS0csZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFB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T0MsUUFBekIsRUFGL0IsRUFFbUUsQ0FGbkU7O0FBSUEsSUFBTUkscUJBQXFCLElBQUkvQixZQUFZRyxLQUFoQixDQUFzQjtBQUNoREMsaUJBQWdCLFNBRGdDO0FBRWhEQyxjQUFhLENBRm1DO0FBR2hEMkIsV0FBVTtBQUhzQyxDQUF0QixFQUsxQmYsUUFMMEIsQ0FLakJhLFVBTGlCLEVBTTFCdEIsS0FOMEIsQ0FNcEJULFVBTm9CLENBQTNCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5cclxuLy8gKioqKiogbmF2aWdhdGlvbiAqKioqKiAvL1xyXG5cclxuY29uc3QgdHJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX3RyaWdnZXInKTtcclxudHJpZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0Jyk7XHJcbiAgICBcclxuICAgIGlmKG5hdkxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSkge1xyXG4gICAgICAgIG5hdkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnb3BlbmVkJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gKioqKiogYnhzbGlkZXIgKioqKiogLy9cclxuICAgIGxldCBjb3VudFNsaWRlO1xyXG5cclxuICAgICQoJyNieHNsaWRlcicpLmJ4U2xpZGVyKHtcclxuICAgICAgICBhdXRvOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6ICdmYWRlJyxcclxuICAgICAgICBjYXB0aW9uczogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHNsaWRlcjI7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKCB3aW5kb3dXaWR0aCA8PSA0MjUgKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSAkKCcjYnhzbGlkZXIyJykuYnhTbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWluU2xpZGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogMjk1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDE1XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSAkKCcjYnhzbGlkZXIyJykuYnhTbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWluU2xpZGVzOiAzLFxyXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzOiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogMzcwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDQ1XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xpZGVyMiA9IHNsaWRlcjtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8PSA0MjUgKSB7XHJcbiAgICAgICAgICAgIHNsaWRlcjIucmVsb2FkU2xpZGVyKHtcclxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1pblNsaWRlczogMSxcclxuICAgICAgICAgICAgICAgIG1heFNsaWRlczogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IDI5NSxcclxuICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAxNVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzbGlkZXIyLnJlbG9hZFNsaWRlcih7XHJcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtaW5TbGlkZXM6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXM6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiAzNzAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogNDVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsIi8vIEluaXQgU2Nyb2xsTWFnaWNcclxuY29uc3QgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcblxyXG4vL3BpbiB0aGUgaW50cm9cclxuY29uc3QgcGluSW50cm9TY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcblx0dHJpZ2dlckVsZW1lbnQ6ICcuaGVhZGVyJyxcclxuXHR0cmlnZ2VySG9vazogMFxyXG59KVxyXG4uc2V0UGluKCcuaGVhZGVyJywge3B1c2hGb2xsb3dlcnM6IGZhbHNlfSlcclxuLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cclxuY29uc3Qgc2VydmljZXNUbCA9IG5ldyBUaW1lbGluZU1heCgpO1xyXG5jb25zdCBzZXJ2aWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlX19pbWcnKTtcclxuXHRcdHNlcnZpY2VzVGwuc3RhZ2dlckZyb20oc2VydmljZXMsIDAuNSwge2F1dG9BbHBoYTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoNSknfSwgMC4yKTtcclxuXHJcblxyXG4vLyBzY2FsaW5nIGFsbCAuc2VydmljZV9faW1nXHJcbmNvbnN0IHNlcnZpY2VzU2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG5cdHRyaWdnZXJFbGVtZW50OiAnLnNlcnZpY2UnLFxyXG5cdHRyaWdnZXJIb29rOiAwLjhcclxufSlcclxuLy8gLmFkZEluZGljYXRvcnMoe1xyXG4vLyBcdFx0bmFtZTogXCJzZXJ2aWNlc1wiLFxyXG4vLyBcdFx0Y29sb3JUcmlnZ2VyOiAncmVkJyxcclxuLy8gXHRcdGluZGVudDogMTUsXHJcbi8vIFx0XHRjb2xvclN0YXJ0OiAnIzc1QzY5NScsXHJcbi8vIFx0XHRjb2xvckVuZDogJ3JlZCdcclxuLy8gfSlcclxuLnNldFR3ZWVuKHNlcnZpY2VzVGwpXHJcbi5hZGRUbyhjb250cm9sbGVyKTtcclxuXHJcbi8vIGxvb3AgdGhyb3VnaHQgZWFjaCAudGl0dGxlIGVsZW1lbnRzXHJcbmNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRpdHRsZS13cmFwJyk7XHJcblxyXG4vLyBidWlsZCBhIHNjZW5lXHJcbml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcblx0Y29uc3QgdGl0dGxlVGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuXHRjb25zdCB0aXR0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXR0bGUnKTtcclxuXHRjb25zdCBzdWJUaXR0bGUgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5zdWItdGl0dGxlJyk7XHJcblxyXG5cdGlmKHRpdHRsZSkge1xyXG5cdFx0dGl0dGxlVGxcclxuXHRcdFx0LmZyb20odGl0dGxlLCAwLjUsIHthdXRvQWxwaGE6IDAsIHRyYW5zZm9ybTogJ3NjYWxlKDIpJywgZWFzZTogUG93ZXIwLmVhc2VOb25lfSlcclxuXHRcdFx0LmZyb20oc3ViVGl0dGxlLCAwLjUsIHthdXRvQWxwaGE6IDAsIHk6IDEwLCBlYXNlOiBQb3dlcjAuZWFzZU5vbmV9KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH07XHJcblx0XHJcblx0Y29uc3Qgb3VyU2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG5cdFx0dHJpZ2dlckVsZW1lbnQ6IGl0ZW0sXHJcblx0XHR0cmlnZ2VySG9vazogMC45XHJcblx0fSlcclxuXHQvLyAuYWRkSW5kaWNhdG9ycyh7XHJcblx0Ly8gXHRuYW1lOiBcImZhZGUgc2NlbmVcIixcclxuXHQvLyBcdGNvbG9yVHJpZ2dlcjogJ3JlZCcsXHJcblx0Ly8gXHRpbmRlbnQ6IDE1LFxyXG5cdC8vIFx0Y29sb3JTdGFydDogJyM3NUM2OTUnLFxyXG5cdC8vIFx0Y29sb3JFbmQ6ICdyZWQnXHJcblx0Ly8gfSlcclxuXHQuc2V0VHdlZW4odGl0dGxlVGwpXHJcblx0LmFkZFRvKGNvbnRyb2xsZXIpO1xyXG59KTtcclxuXHJcbi8vIHBhcmFsbGF4IHNjZW5lXHJcbmNvbnN0IHBhcmFsbGF4VGwgPSBuZXcgVGltZWxpbmVNYXgoKTtcclxucGFyYWxsYXhUbFxyXG5cdC5mcm9tKCcuYnJhbmRzX19saXN0JywgMC41LCB7YXV0b0FscGhhOiAwLCBlYXNlOiBQb3dlcjAuZWFzZU5vbmV9LCAwLjMpXHJcblx0LmZyb20oJy5icmFuZHNfX3BhcmFsbGF4JywgMSwge3k6ICctNTAlJywgZWFzZTogUG93ZXIwLmVhc2VOb25lfSwgMCk7XHJcblxyXG5jb25zdCBzbGlkZVBhcmFsbGF4U2NlbmUgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG5cdHRyaWdnZXJFbGVtZW50OiAnLmJyYW5kcycsXHJcblx0dHJpZ2dlckhvb2s6IDEsXHJcblx0ZHVyYXRpb246ICcxMDAlJ1xyXG59KVxyXG4uc2V0VHdlZW4ocGFyYWxsYXhUbClcclxuLmFkZFRvKGNvbnRyb2xsZXIpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

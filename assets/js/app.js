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

var scrollWindow = function () {

	var init = function init() {
		_setUpListners();
	};
	var _setUpListners = function _setUpListners() {
		window.addEventListener('scroll', debounce(checkSlide));
	};

	// less speed of scroll
	function debounce(func) {
		var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
		var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

		var timeout;
		return function () {
			var context = this,
			    args = arguments;
			var later = function later() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	var tl = new TimelineMax();
	var sections = document.querySelectorAll('section');
	var serviceItem = document.querySelectorAll('.service__item');

	function checkSlide() {

		var check = void 0;

		sections.forEach(function (section) {

			// half way through the image
			var slideInAt = window.scrollY + window.innerHeight - section.clientHeight / 4;
			// bottom of the image
			var bottomSection = section.offsetTop + section.clientHeight;
			var isHalfShown = slideInAt > section.offsetTop;
			var isNotScrolledPast = window.scrollY < bottomSection;

			if (isHalfShown && isNotScrolledPast) {
				section.classList.add('action');
			} else {
				section.classList.remove('action');
			};
		});

		return check;
	}

	return {
		init: init
	};
}();

scrollWindow.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsInNjcm9sbGluZy5qcyJdLCJuYW1lcyI6WyJzdmc0ZXZlcnlib2R5IiwidHJpZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZMaXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJjb3VudFNsaWRlIiwiJCIsImJ4U2xpZGVyIiwiYXV0byIsIm1vZGUiLCJjYXB0aW9ucyIsInNsaWRlcjIiLCJ3aW5kb3ciLCJvbiIsIndpbmRvd1dpZHRoIiwid2lkdGgiLCJzbGlkZXIiLCJwYWdlciIsIm1pblNsaWRlcyIsIm1heFNsaWRlcyIsInNsaWRlV2lkdGgiLCJzbGlkZU1hcmdpbiIsInJlc2l6ZSIsInJlbG9hZFNsaWRlciIsInNjcm9sbFdpbmRvdyIsImluaXQiLCJfc2V0VXBMaXN0bmVycyIsImRlYm91bmNlIiwiY2hlY2tTbGlkZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImNvbnRleHQiLCJhcmdzIiwiYXJndW1lbnRzIiwibGF0ZXIiLCJhcHBseSIsImNhbGxOb3ciLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGwiLCJUaW1lbGluZU1heCIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInNlcnZpY2VJdGVtIiwiY2hlY2siLCJmb3JFYWNoIiwic2xpZGVJbkF0Iiwic2Nyb2xsWSIsImlubmVySGVpZ2h0Iiwic2VjdGlvbiIsImNsaWVudEhlaWdodCIsImJvdHRvbVNlY3Rpb24iLCJvZmZzZXRUb3AiLCJpc0hhbGZTaG93biIsImlzTm90U2Nyb2xsZWRQYXN0Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBVztBQUNWOztBQUVFQTs7QUFFSjs7QUFFQSxRQUFNQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWI7QUFDQUYsU0FBS0csZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVztBQUN0QyxZQUFJQyxV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S0FBS1EsS0FBTCxDQUFXSixPQUFYLEVBQW9CQyxJQUFwQjtBQUNmLEdBVkQ7QUFXQTs7QUFFRCxLQUFNTyxLQUFLLElBQUlDLFdBQUosRUFBWDtBQUNBLEtBQU1DLFdBQVc5QyxTQUFTK0MsZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBakI7QUFDQSxLQUFNQyxjQUFjaEQsU0FBUytDLGdCQUFULENBQTBCLGdCQUExQixDQUFwQjs7QUFFQSxVQUFTaEIsVUFBVCxHQUFzQjs7QUFFckIsTUFBSWtCLGNBQUo7O0FBRUFILFdBQVNJLE9BQVQsQ0FBaUIsbUJBQVc7O0FBRTNCO0FBQ0EsT0FBTUMsWUFBYXBDLE9BQU9xQyxPQUFQLEdBQWlCckMsT0FBT3NDLFdBQXpCLEdBQXdDQyxRQUFRQyxZQUFSLEdBQXVCLENBQWpGO0FBQ0E7QUFDQSxPQUFNQyxnQkFBZ0JGLFFBQVFHLFNBQVIsR0FBb0JILFFBQVFDLFlBQWxEO0FBQ0EsT0FBTUcsY0FBY1AsWUFBWUcsUUFBUUcsU0FBeEM7QUFDQSxPQUFNRSxvQkFBb0I1QyxPQUFPcUMsT0FBUCxHQUFpQkksYUFBM0M7O0FBRUEsT0FBSUUsZUFBZUMsaUJBQW5CLEVBQXNDO0FBQ3JDTCxZQUFRbEQsU0FBUixDQUFrQkcsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDQSxJQUZELE1BRU87QUFDTitDLFlBQVFsRCxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixRQUF6QjtBQUNBO0FBQ0QsR0FkRDs7QUFnQkEsU0FBTzJDLEtBQVA7QUFDQTs7QUFFRCxRQUFPO0FBQ05yQixRQUFNQTtBQURBLEVBQVA7QUFJQSxDQXhEb0IsRUFBckI7O0FBMERBRCxhQUFhQyxJQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5cclxuLy8gKioqKiogbmF2aWdhdGlvbiAqKioqKiAvL1xyXG5cclxuY29uc3QgdHJpZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX3RyaWdnZXInKTtcclxudHJpZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IG5hdkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0Jyk7XHJcbiAgICBcclxuICAgIGlmKG5hdkxpc3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSkge1xyXG4gICAgICAgIG5hdkxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnb3BlbmVkJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gKioqKiogYnhzbGlkZXIgKioqKiogLy9cclxuICAgIGxldCBjb3VudFNsaWRlO1xyXG5cclxuICAgICQoJyNieHNsaWRlcicpLmJ4U2xpZGVyKHtcclxuICAgICAgICBhdXRvOiB0cnVlLFxyXG4gICAgICAgIG1vZGU6ICdmYWRlJyxcclxuICAgICAgICBjYXB0aW9uczogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHNsaWRlcjI7XHJcblxyXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKCB3aW5kb3dXaWR0aCA8PSA0MjUgKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSAkKCcjYnhzbGlkZXIyJykuYnhTbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWluU2xpZGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogMjk1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDE1XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSAkKCcjYnhzbGlkZXIyJykuYnhTbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWluU2xpZGVzOiAzLFxyXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzOiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogMzcwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDQ1XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2xpZGVyMiA9IHNsaWRlcjtcclxuICAgIH0pO1xyXG5cclxuICAgICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8PSA0MjUgKSB7XHJcbiAgICAgICAgICAgIHNsaWRlcjIucmVsb2FkU2xpZGVyKHtcclxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1pblNsaWRlczogMSxcclxuICAgICAgICAgICAgICAgIG1heFNsaWRlczogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IDI5NSxcclxuICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAxNVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzbGlkZXIyLnJlbG9hZFNsaWRlcih7XHJcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtaW5TbGlkZXM6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXM6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiAzNzAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogNDVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKCk7XHJcbiIsImNvbnN0IHNjcm9sbFdpbmRvdyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdF9zZXRVcExpc3RuZXJzKCk7XHJcblx0XHR9O1xyXG5cdGNvbnN0IF9zZXRVcExpc3RuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlKGNoZWNrU2xpZGUpKTtcclxuXHR9XHJcblxyXG5cdC8vIGxlc3Mgc3BlZWQgb2Ygc2Nyb2xsXHJcblx0ZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCA9IDIwLCBpbW1lZGlhdGUgPSB0cnVlKSB7XHJcblx0XHR2YXIgdGltZW91dDtcclxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xyXG5cdFx0XHR2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0ICB0aW1lb3V0ID0gbnVsbDtcclxuXHRcdFx0ICBpZiAoICFpbW1lZGlhdGUgKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHR2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG5cdFx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XHJcblx0XHRcdGlmICggY2FsbE5vdyApIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHR9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHRsID0gbmV3IFRpbWVsaW5lTWF4KCk7XHJcblx0Y29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uJyk7XHJcblx0Y29uc3Qgc2VydmljZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VydmljZV9faXRlbScpO1xyXG5cclxuXHRmdW5jdGlvbiBjaGVja1NsaWRlKCkge1xyXG5cclxuXHRcdGxldCBjaGVjaztcclxuXHJcblx0XHRzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG5cclxuXHRcdFx0Ly8gaGFsZiB3YXkgdGhyb3VnaCB0aGUgaW1hZ2VcclxuXHRcdFx0Y29uc3Qgc2xpZGVJbkF0ID0gKHdpbmRvdy5zY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0KSAtIHNlY3Rpb24uY2xpZW50SGVpZ2h0IC8gNDtcclxuXHRcdFx0Ly8gYm90dG9tIG9mIHRoZSBpbWFnZVxyXG5cdFx0XHRjb25zdCBib3R0b21TZWN0aW9uID0gc2VjdGlvbi5vZmZzZXRUb3AgKyBzZWN0aW9uLmNsaWVudEhlaWdodDtcclxuXHRcdFx0Y29uc3QgaXNIYWxmU2hvd24gPSBzbGlkZUluQXQgPiBzZWN0aW9uLm9mZnNldFRvcDtcclxuXHRcdFx0Y29uc3QgaXNOb3RTY3JvbGxlZFBhc3QgPSB3aW5kb3cuc2Nyb2xsWSA8IGJvdHRvbVNlY3Rpb247XHJcblxyXG5cdFx0XHRpZiAoaXNIYWxmU2hvd24gJiYgaXNOb3RTY3JvbGxlZFBhc3QpIHtcclxuXHRcdFx0XHRzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FjdGlvbicpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3Rpb24nKVxyXG5cdFx0XHR9O1x0XHRcdFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGNoZWNrO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6IGluaXRcclxuXHR9XHJcblxyXG59KSgpO1xyXG5cclxuc2Nyb2xsV2luZG93LmluaXQoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

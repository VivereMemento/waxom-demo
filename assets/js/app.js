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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdmc0ZXZlcnlib2R5IiwidHJpZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYXZMaXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJjb3VudFNsaWRlIiwiJCIsImJ4U2xpZGVyIiwiYXV0byIsIm1vZGUiLCJjYXB0aW9ucyIsInNsaWRlcjIiLCJ3aW5kb3ciLCJvbiIsIndpbmRvd1dpZHRoIiwid2lkdGgiLCJzbGlkZXIiLCJwYWdlciIsIm1pblNsaWRlcyIsIm1heFNsaWRlcyIsInNsaWRlV2lkdGgiLCJzbGlkZU1hcmdpbiIsInJlc2l6ZSIsInJlbG9hZFNsaWRlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFlBQVc7QUFDVjs7QUFFRUE7O0FBRUo7O0FBRUEsUUFBTUMsT0FBT0MsU0FBU0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0FBQ0FGLFNBQUtHLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDdEMsWUFBSUMsVUFBVUgsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixDQUFkOztBQUVBLFlBQUdFLFFBQVFDLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCLFFBQTNCLENBQUgsRUFBeUM7QUFDckNGLG9CQUFRQyxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixRQUF6QjtBQUNILFNBRkQsTUFFTztBQUNISCxvQkFBUUMsU0FBUixDQUFrQkcsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDSDtBQUNKLEtBUkQ7O0FBVUE7QUFDSSxRQUFJQyxtQkFBSjs7QUFFQUMsTUFBRSxXQUFGLEVBQWVDLFFBQWYsQ0FBd0I7QUFDcEJDLGNBQU0sSUFEYztBQUVwQkMsY0FBTSxNQUZjO0FBR3BCQyxrQkFBVTtBQUhVLEtBQXhCOztBQU1BLFFBQUlDLGdCQUFKOztBQUVBTCxNQUFFTSxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLFlBQVc7QUFDNUIsWUFBSUMsY0FBY1IsRUFBRU0sTUFBRixFQUFVRyxLQUFWLEVBQWxCO0FBQ0EsWUFBS0QsZUFBZSxHQUFwQixFQUEwQjtBQUN0QixnQkFBSUUsU0FBU1YsRUFBRSxZQUFGLEVBQWdCQyxRQUFoQixDQUF5QjtBQUNsQ1UsdUJBQU8sS0FEMkI7QUFFbENDLDJCQUFXLENBRnVCO0FBR2xDQywyQkFBVyxDQUh1QjtBQUlsQ0MsNEJBQVksR0FKc0I7QUFLbENDLDZCQUFhO0FBTHFCLGFBQXpCLENBQWI7QUFPSCxTQVJELE1BUU87QUFDSCxnQkFBSUwsU0FBU1YsRUFBRSxZQUFGLEVBQWdCQyxRQUFoQixDQUF5QjtBQUNsQ1UsdUJBQU8sS0FEMkI7QUFFbENDLDJCQUFXLENBRnVCO0FBR2xDQywyQkFBVyxDQUh1QjtBQUlsQ0MsNEJBQVksR0FKc0I7QUFLbENDLDZCQUFhO0FBTHFCLGFBQXpCLENBQWI7QUFPSDtBQUNELGVBQU9WLFVBQVVLLE1BQWpCO0FBQ0gsS0FwQkQ7O0FBc0JBVixNQUFFTSxNQUFGLEVBQVVVLE1BQVYsQ0FBaUIsWUFBVztBQUN4QixZQUFLaEIsRUFBRU0sTUFBRixFQUFVRyxLQUFWLE1BQXFCLEdBQTFCLEVBQWdDO0FBQzVCSixvQkFBUVksWUFBUixDQUFxQjtBQUNqQk4sdUJBQU8sS0FEVTtBQUVqQkMsMkJBQVcsQ0FGTTtBQUdqQkMsMkJBQVcsQ0FITTtBQUlqQkMsNEJBQVksR0FKSztBQUtqQkMsNkJBQWE7QUFMSSxhQUFyQjtBQU9ILFNBUkQsTUFRTztBQUNIVixvQkFBUVksWUFBUixDQUFxQjtBQUNqQk4sdUJBQU8sS0FEVTtBQUVqQkMsMkJBQVcsQ0FGTTtBQUdqQkMsMkJBQVcsQ0FITTtBQUlqQkMsNEJBQVksR0FKSztBQUtqQkMsNkJBQWE7QUFMSSxhQUFyQjtBQU9IO0FBQ0osS0FsQkQ7QUFtQkgsQ0F0RUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBzdmc0ZXZlcnlib2R5KCk7XHJcblxyXG4vLyAqKioqKiBuYXZpZ2F0aW9uICoqKioqIC8vXHJcblxyXG5jb25zdCB0cmlnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fdHJpZ2dlcicpO1xyXG50cmlnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgbmF2TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpc3QnKTtcclxuICAgIFxyXG4gICAgaWYobmF2TGlzdC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW5lZCcpKSB7XHJcbiAgICAgICAgbmF2TGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCdvcGVuZWQnKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyAqKioqKiBieHNsaWRlciAqKioqKiAvL1xyXG4gICAgbGV0IGNvdW50U2xpZGU7XHJcblxyXG4gICAgJCgnI2J4c2xpZGVyJykuYnhTbGlkZXIoe1xyXG4gICAgICAgIGF1dG86IHRydWUsXHJcbiAgICAgICAgbW9kZTogJ2ZhZGUnLFxyXG4gICAgICAgIGNhcHRpb25zOiB0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgc2xpZGVyMjtcclxuXHJcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICBpZiAoIHdpbmRvd1dpZHRoIDw9IDQyNSApIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9ICQoJyNieHNsaWRlcjInKS5ieFNsaWRlcih7XHJcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtaW5TbGlkZXM6IDEsXHJcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXM6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiAyOTUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogMTVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9ICQoJyNieHNsaWRlcjInKS5ieFNsaWRlcih7XHJcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtaW5TbGlkZXM6IDMsXHJcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXM6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiAzNzAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogNDVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzbGlkZXIyID0gc2xpZGVyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDw9IDQyNSApIHtcclxuICAgICAgICAgICAgc2xpZGVyMi5yZWxvYWRTbGlkZXIoe1xyXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWluU2xpZGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzOiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogMjk1LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDE1XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNsaWRlcjIucmVsb2FkU2xpZGVyKHtcclxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIG1pblNsaWRlczogMyxcclxuICAgICAgICAgICAgICAgIG1heFNsaWRlczogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IDM3MCxcclxuICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiA0NVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

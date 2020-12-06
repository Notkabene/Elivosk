$(function () {
  $('.burger').on("click", function() {
		$('.burger, .header__content').toggleClass('active');
		$('body').toggleClass('lock');
  });

  $("#lightgallery").lightGallery({
    counter: false,
    download: false,
    hideBarsDelay: 0
  });

  $('.spoller').on("click", function() {
		$('.spoller').toggleClass('active');
  });

  $('.products__top-form').on("click", function() {
		$('.products__top-form').toggleClass('_active');
  });


  // Isotope
  var $container = $('.grid');
  $container.imagesLoaded(function(){
    $container.isotope({
      itemSelector: '.grid-item',
      masonry: {
        singleMode: false,
        isResizable: true,
        gutter: 20,
        columnWidth: 100,
        isAnimated: true,
          animationOptions: {
          queue: false,
          duration: 500
        }
      }
      
    });
  });

  // Фильтр Isotope

  var $grid = $('.products__items').isotope({
    itemSelector: '.products__item',
    layoutMode: 'fitRows'
  });

  $('.aside-store__list').on( 'click', '.aside-store__item', function() {
    var filterValue = $( this ).attr('data-filter');

    $grid.isotope({ filter: filterValue });
  });
  
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', '.aside-store__item', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


  //~~~~~~~ Полноэкранный режим
  $('#fullpage').fullpage({
    licenseKey: 'C4198C2E-BF8F4FE3-B535FFC1-A0D1CBFC',
    // sectionsColor: ['#000'],
    // responsiveWidth: 1023,
    // responsiveHeight: 767
  });
  // $.fn.fullpage.setAllowScrolling(false);
})

//=================
//Spollers
// let spollers = document.querySelectorAll("._spoller");
// let spollersGo = true;
// if (spollers.length > 0) {
// 	for (let index = 0; index < spollers.length; index++) {
// 		const spoller = spollers[index];
// 		spoller.addEventListener("click", function (e) {
// 			if (spollersGo) {
// 				spollersGo = false;
// 				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
// 					return false;
// 				}
// 				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
// 					return false;
// 				}
// 				if (spoller.closest('._spollers').classList.contains('_one')) {
// 					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
// 					for (let i = 0; i < curent_spollers.length; i++) {
// 						let el = curent_spollers[i];
// 						if (el != spoller) {
// 							el.classList.remove('_active');
// 							_slideUp(el.nextElementSibling);
// 						}
// 					}
// 				}
// 				spoller.classList.toggle('_active');
// 				_slideToggle(spoller.nextElementSibling);

// 				setTimeout(function () {
// 					spollersGo = true;
// 				}, 500);
// 			}
// 		});
// 	}
// }


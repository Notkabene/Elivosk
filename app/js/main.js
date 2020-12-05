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

  $('.products__top-form').on("click", function() {
		$('.products__top-form').toggleClass('active');
		$('body').toggleClass('lock');
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




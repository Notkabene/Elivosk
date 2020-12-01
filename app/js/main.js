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


  // Masonry
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







})




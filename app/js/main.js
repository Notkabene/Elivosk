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

  $('.color-name--mobile').on("click", function() {
		$('.product-buy__color').toggleClass('_active');
  });
  $('.size-name--mobile').on("click", function() {
		$('.product-buy__size').toggleClass('_active');
  });


  
  


  //*======= Фильтр Isotope =======
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


  //*======= Полноэкранный режим =======
  $('#fullpage').fullpage({
    licenseKey: 'C4198C2E-BF8F4FE3-B535FFC1-A0D1CBFC',
    anchors:[
      'firstPage',
      'secondPage',
      'thirdPage',
      'fourthPage',
      'fifthPage',
      'sixth',
    ],
    responsiveWidth: 1025,

  });


   //*======= Isotope Album =======
   var $container = $('.grid');
   $container.imagesLoaded(function(){
     $container.isotope({
       itemSelector: '.grid-item',
       masonry: {
         gutter: 20,
         isAnimated: true,
           animationOptions: {
           queue: false,
           duration: 500
         }
       }
       
     });
  });

  // Pop-up
  $(".fancybox").fancybox({
    padding: 0,
    margin: 35,
    closeClick: true,
    helpers : {
      overlay : {
          css : {
              'background' : 'rgba(0, 0, 0, 0.8)'
          }
      }
  }
  });

  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".photo-some"); 
    if(windowWidth > 1025){
      $('.photo-some').slick('unslick');
      $('.photos-trip__items').slick('unslick');
      $('.store-polygraphy__items').slick('unslick');
      $('.product-page__images').slick('unslick');
      sliderIsLive = false; 
    }
    else{
      
      $('.photo-some').slick({
        dots: true,
        arrows:false,
      });

      $('.photos-trip__items').slick({
        dots: true,
        arrows:false,
        slidesToShow: 1,
      });

      $('.product-page__images').slick({
        dots: true,
        arrows:false,
        slidesToShow: 1,
      });
      
      $('.store-polygraphy__slider').slick({
        dots: true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 660,
            settings: "unslick"
          }
        ]
      });
      sliderIsLive = true;

      
    }
  }

  checkWidth();

  $(window).resize(function(){
    checkWidth();
  });


  $('.aside-store__title').click(function() {
    $('.aside-store').toggleClass('active');
  });


  // Placeholder
  $('.feedback__form-input').focus(function(e){
    var $self = $(this);
    $self.data('placeholder-tmp', $self.attr('placeholder'));
    $self.attr('placeholder', '');
    
  });
  
  $('.feedback__form-input').blur(function(e){
    var $self = $(this);
    
    $self.attr('placeholder', $self.data('placeholder-tmp'));
  });

})






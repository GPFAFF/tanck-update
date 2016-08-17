function initSlider() {
  var center = $('.center');
  var fade = $('.fade');

  center.slick({
      dots: true,
      centerPadding: '20px',
      slidesToShow: 1,
      adaptiveHeight: true,
      accessibility: true,
      autoplaySpeed: 3000,
      prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>',
      responsive: [{
          breakpoint: 768,
          settings: {
              arrows: true,
              adaptiveHeight: true,
              accessibility: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              settings: 'unslick'
          }
      }, {
          breakpoint: 480,
          settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
              settings: 'unslick'
          }
      }]
  });
  fade.slick({
      dots: true,
      infinite: true,
      accessibility: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      settings: 'unslick'
  });
}

function moveTo() {

  $('.navigation li > a').click(function(e){
    e.preventDefault();

    var active_tabs = $('.navigation li.active > a').attr('href');

    var activated_nav = $('.navigation li.active');
    activated_nav.removeClass('active');

    $(this).parents('li').addClass('active');

    $(active_tabs).removeClass('active');
    $(active_tabs).addClass('hidden');

    var targetTab = $(this).attr('href');
    $(targetTab).removeClass('hidden');
    $(targetTab).addClass('active');
  })
}

function slickInit() {
  $(".navigation > li").on("click", 'a', function(e) {
    // re-inits sliders when tab or browser window size changes
    console.log('style');
    console.log('home');
    $('.fade').slick('setPosition');
    $('.center')[0].slick.refresh();
  });
}


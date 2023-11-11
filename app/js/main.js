$(function(){



});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('.fixed-footer').addClass("sticky");
    }
    else{
    $('.fixed-footer').removeClass("sticky");
    }
    });

    var $element = $('.footer');
    let counter = 0;
    
    $(window).scroll(function() {
      var scroll = $(window).scrollTop() + $(window).height();
      var offset = $element.offset().top
    
      if (scroll > offset) {
        $('.fixed-footer').removeClass('sticky');
        counter = 1;
      
    } else {
      $('.fixed-footer').addClass('sticky');
    }
    });
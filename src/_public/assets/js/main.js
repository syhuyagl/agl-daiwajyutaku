$(document).ready(function () {
  $(".c-mainvisual__slides").slick({
    fade: true,
    speed: 1100,
    infinite: true,
    autoplay: true,
    cssEase: "linear",
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  });
  $(".c-header__menu").click(function () { 
    if(!$(".c-header__overlay").hasClass('c-header__overlay--active')){
      $(".c-header__overlay").addClass('c-header__overlay--active')
    }
    else{
      $(".c-header__overlay").removeClass('c-header__overlay--active')
    }
  })
});

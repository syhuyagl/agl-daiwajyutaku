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
});

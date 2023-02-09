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
  function disableScroll() {
    var ycoord = $(window).scrollTop();
    $(".c-header__overlay").data("ycoord", ycoord);
    ycoord = ycoord * -1;
    $("body")
      .css("position", "fixed")
      .css("left", "0px")
      .css("right", "0px")
      .css("top", ycoord + "px");
  }
  function enableScroll() {
    $("body")
      .css("position", "")
      .css("left", "auto")
      .css("right", "auto")
      .css("top", "auto");
    $(window).scrollTop($(".c-header__overlay").data("ycoord"));
  }
  var menu = $(".c-header__menuicon").attr("src");
  var open = menu.replace("_open.", "_close.");
  $(".c-header__menu").click(function () {
    if (!$(".c-header__overlay").hasClass("c-header__overlay--active")) {
      $(".c-header__overlay").addClass("c-header__overlay--active");
      $(".c-header__menuicon").attr("src", open);
      disableScroll();
    } else {
      $(".c-header__overlay").removeClass("c-header__overlay--active");
      $(".c-header__menuicon").attr("src", menu);
      enableScroll();
    }
  });
  $(window).scroll(function () {
    if ($(window).width() >= 768) {
      var headerHeight = $(".c-header").height();
      if ($(this).scrollTop() > headerHeight) {
        $(".c-top").removeClass("is-hidden")
      } else {
        $(".c-top").addClass("is-hidden");
      }
    }
  });
  $('.c-top').click(function(){
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  })
});

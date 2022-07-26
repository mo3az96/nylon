$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /***** Menu *****/
  if ($(window).width() <= 991) {
    $(".menu-icon").click(function () {
      $(".overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".close-icon,.overlay").click(function () {
      $(".overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });

    if ($(window).width() <= 767) {
      $(".has-sub>a>i").click(function (Event) {
        Event.preventDefault();
        Event.stopPropagation();
        var parent = $(this).parent("a");
        $(".has-sub>a").not(parent).removeClass("active");
        parent.toggleClass("active");
        if (parent.siblings().css("display") == "none") {
          parent.siblings().slideDown(500);
        } else {
          parent.siblings().slideUp(500);
        }
        $(".has-sub>a").not(parent).siblings().slideUp(500);
      });
    }
  }

  /***** main slider *****/
  var mainswiper = new Swiper(".main-slider .swiper-container", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-btn-next",
      prevEl: ".main-slider .swiper-btn-prev",
    },
  });

  /***** product slider *****/
  var slides = document.getElementsByClassName("products-slider");
  for (var i = 0; i < slides.length; i++) {
    var productswiper = new Swiper(
      ".products-slider-" + i + " .swiper-container",
      {
        loop: true,
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 31,
          },
        },
        pagination: {
          el: ".products-slider-" + i + " .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".products-slider-" + i + " .swiper-btn-next",
          prevEl: ".products-slider-" + i + " .swiper-btn-prev",
        },
      }
    );
  }

  /***** Footer *****/
  if ($(window).width() <= 767) {
    $(".nav-foot-header").click(function () {
      $(".nav-foot-header").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".nav-foot-header").not(this).siblings().slideUp(500);
    });
  }

  /***** Arrow *****/
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(500)
      : $(".arrow-top").fadeOut(500);
  });
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

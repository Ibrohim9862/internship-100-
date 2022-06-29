$(document).ready(function () {
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
let x = [];
x.replace;
const button_1 = document.getElementsByClassName("button_bg_2");
const header_ul = document.getElementsByClassName("header_nav_ul");
button_1[0].addEventListener("click", function () {
  header_ul[0].classList.toggle("animation_ul");
  button_1[0].children[0].classList.toggle("animation_button");
  button_1[0].children[0].classList.toggle("fa-xmark-large");
});

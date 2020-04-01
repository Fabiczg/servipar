// Cache selectors
var topMenu = $(".nav__menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
  });

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  // Set/remove active class
  menuItems
    .parent().removeClass("active")
    .end().filter("[href='#" + id + "']").parent().addClass("active");
});



const responsiveBtnIcon = document.querySelector(".responsive-menu-btn");
const navMenu = document.querySelector(".nav__menu");

responsiveBtnIcon.addEventListener("click", () => {
  responsiveBtnIcon.classList.toggle("--is-open");
  navMenu.classList.toggle("--is-open");
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header__main').addClass("fixed-me");
    } else {
      $(".header__main").removeClass("fixed-me");
    }
  });
});




$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.nav-item a').addClass("nav-color-change");
    } else {
      $(".nav-item a").removeClass("nav-color-change");
    }
  });
});

$(document).ready(function () {
$('.single-banner').slick({
  autoplay:false,
  dots: true,
  arrow:false,
  autoplaySpeed: 2000,
});
});

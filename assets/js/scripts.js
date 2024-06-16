// HOME SCRIPT
function toggleHamburger(x) {
  x.classList.toggle("change");
  document.getElementById("bottommenu").classList.toggle("show");

  var header = document.querySelector(".headerrowtop");
  header.classList.toggle("noborderradius-onclick");

  // Check if #bottommenu2 has the 'show' class and remove it if present
  var bottomMenu2 = document.getElementById("bottommenu2");
  if (bottomMenu2.classList.contains("show")) {
    bottomMenu2.classList.remove("show");
  }

  // Remove the 'open' class from all elements with the 'underlinestate' class
  var underlineStateElements = document.querySelectorAll(".underlinestate");
  underlineStateElements.forEach(function (element) {
    if (element.classList.contains("open")) {
      element.classList.remove("open");
    }
  });
}

document.querySelector(".underlinestate1").addEventListener("click", function () {
  // Add the 'show' class to #bottommenu2
  document.getElementById("bottommenu2").classList.add("show");

  // Check if .hamburger contains the 'change' class and remove it if present
  var hamburger = document.querySelector(".hamburger");
  if (hamburger.classList.contains("change")) {
    hamburger.classList.remove("change");
  }

  // Remove the 'show' class from #bottommenu
  var bottomMenu = document.getElementById("bottommenu");
  if (bottomMenu.classList.contains("show")) {
    bottomMenu.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".underlinestate");

  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      // Remove 'open' class from all nav items
      navItems.forEach((nav) => nav.classList.remove("open"));

      // Toggle 'open' class on the clicked item
      this.classList.toggle("open");
    });
  });
});

// Function to trigger the custom event
function triggerCustomEvent() {
  const event = new CustomEvent("translatesubmenu");
  document.querySelector(".underlinestate2").dispatchEvent(event);
}

// Event listener to toggle the 'show' class on 'translatesubmenu' event
document.querySelector(".underlinestate2").addEventListener("translatesubmenu", function () {
  this.classList.toggle("show");
});

/* EXCITING DEALS SLIDERS */
jQuery(document).ready(function ($) {
  $(".esd-left-slider").slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-chevron-right"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-left"></i>',
  });
  $(".esd-box-slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<i class="fa-solid fa-chevron-right"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-left"></i>',
  });

  function setEqualHeight() {
    var rightHeight = $(".esd-right-content").outerHeight();
    $(".esd-left-slider img").css("height", rightHeight);
  }

  // Call the function on page load and window resize
  setEqualHeight();
  $(window).resize(function () {
    setEqualHeight();
  });
});

// Hurry COUNTER
var countDownDate = new Date("June 26, 2024 23:59:59").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
  document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
  document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// HURRY SLIDER
$(".hurryslider").slick({
  infinite: true,
  arrows: false,
  fade: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
$(".testislider").slick({
  infinite: true,
  arrows: false,
  fade: false,
  dots: false,
  centerMode: true,
  centerPadding: "230px",
  slidesToShow: 3,
  slidesToScroll: 3,
});

$(document).ready(function () {
  $(".slide-perfect-holiday").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    // centerMode: true,
    // variableWidth: true,
  });
});

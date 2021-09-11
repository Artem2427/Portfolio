// $(function () {
//   $(".header__menu").click(function (event) {
//     $(".header__menu li a").toggleClass("active");

//   });
// });

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
$(function () {
  $(".header__menu li a").click(function (event) {
    $(".header__burger,.header__menu").removeClass("active");
  });
});

// First picture
var modal = document.getElementById("myModal1");
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close");
span.onclick = function () {
  modal.style.display = "none";
};

// Second picture
var modal = document.getElementById("myModal2");
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption2");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close");
span.onclick = function () {
  modal.style.display = "none";
};
// Third picture
var modal = document.getElementById("myModal3");
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption3");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close");
span.onclick = function () {
  modal.style.display = "none";
};

// Fourth picture
var modal = document.getElementById("myModal4");
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption4");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close");
span.onclick = function () {
  modal.style.display = "none";
};

// Five picture
var modal = document.getElementById("myModal5");
var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img05");
var captionText = document.getElementById("caption5");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close");
span.onclick = function () {
  modal.style.display = "none";
};

// Sixth picture
var modal = document.getElementById("myModal6");
var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img06");
var captionText = document.getElementById("caption6");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close");
span.onclick = function () {
  modal.style.display = "none";
};

$(function () {
  $(".portfolio__button").click(function (event) {
    $(".portfolio__button").css({ display: "none" });
    $(".portfolio__wrapper1").css({ display: "block" });
    $(".portfolio__wrapper").css({ padding: "0" });
  });
});

$(function () {
  $(".portfolio__button1").click(function (event) {
    $(".portfolio__wrapper1").css({ display: "none" });
    $(".portfolio__button").css({ display: " list-item" });
  });
});



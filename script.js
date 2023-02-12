// Button Active
$(document).ready(menu);

function menu() {
  $("#menu-icon").on("click", function () {
    $("#menu-icon").toggleClass("active");
    $("#top, #middle, #bottom").toggleClass("active");
    $("#overlay-nav").toggleClass("active");
  });
  $("#nav-content li").on("click", function () {
    $("#menu-icon-shape").removeClass("active");
    $("#top, #middle, #bottom").removeClass("active");
    $("#overlay-nav").removeClass("active");
  });
}

// //Overlay Click
// const navLi = document.querySelectorAll('#nav-content li');
// navLi.

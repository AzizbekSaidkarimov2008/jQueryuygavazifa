$(document).ready(function () {
  var $menu = $("menu");
  var $link = $(".menu-link");
  var $btn = $(".close-btn");
  var $navLink = $("menu a");
  var $section = $("section");
  var $main = $("#main");
  var $news = $("#news");
  var $feedback = $("#feedback");
  var $maps = $("#maps");
  //   var $map = $("#maps");
  $link.on("click", function () {
    $menu.css({ transform: "translateX(0)", transition: "1s" });
  });
  $btn.on("click", function () {
    $menu.css({ transform: "translateX(-100%)", transition: "1s" });
  });
  //   $map.on("click", function () {
  //     $map.css({ transition: "2s" });
  //   });
  $navLink.click(function () {
    
  });
});

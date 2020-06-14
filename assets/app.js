$(function() {
  // スリックの記述
  $(".pictures").slick({
    dots: true
  });

  // rippleriaの記述
  $(".hamon").rippleria();
  $(".hamon").click(function() {
    return false;
  });

  // 文字数制限の記述
  $(".js-max-char-warning").maxCharWarning();

  // ツールチップの記述
  $(".tooltip").tooltipster();

  // ドロップダウンメニューの記述
  $("ul.sf-menu").superfish();
  $("ul.sf-menu a").click(function() {
    return false;
  });

  // スクロールイベントの記述
  $("#menu").waypoint(function() {
    $("header").toggleClass("fix");
  });
  $("#menu1").waypoint(function() {
    $("header ul li").removeClass("recent");
    $("header ul li:nth-child(1)").addClass("recent");
  });
  $("#menu2").waypoint(function() {
    $("header ul li").removeClass("recent");
    $("header ul li:nth-child(2)").addClass("recent");
  });
  $("#menu3").waypoint(function() {
    $("header ul li").removeClass("recent");
    $("header ul li:nth-child(3)").addClass("recent");
  });
  $("#menu4").waypoint(function() {
    $("header ul li").removeClass("recent");
    $("header ul li:nth-child(4)").addClass("recent");
  });

  // svgの記述
  var $svg = $("svg").drawsvg();
  $("#menu3").waypoint(function() {
    $svg.drawsvg("animate");
  });
});
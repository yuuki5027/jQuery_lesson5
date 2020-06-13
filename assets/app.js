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
});


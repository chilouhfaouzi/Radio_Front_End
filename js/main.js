/* Passer par des onglets ( FTP , Commandes ...) and change active class */

$(".main-content .main-control").click(function () {
  $(".my_collapse > div").hide();
  $("." + $(this).attr("data-class")).show();
  $(".main-control").removeClass("active");
  $(this).addClass("active");
});

/*Change active class de aside list*/
$(".side-list li").click(function () {
  $(".side-list li").removeClass("active");
  $(this).addClass("active");
});

// play les stations des radios

$(".play-radio").click(function () {
  var all = $(".myAudio");

  for (var i = 0; i < all.length; i++) {
    all[i].pause();
  }

  $(this).parent().find("#myAudio")[0].play();
  var pauses = $(".pause");
  var playes = $(".play-radio").each(function () {
    $(this).show();
  });
  pauses.each(function () {
    $(this).hide();
  });
  $(this).hide();

  $(this).parent().find(".pause").css("display", "inline");
});

// Pauses les stations des radios
$(".pause").click(function () {
  $(this).hide();
  $(this).parent().find("#myAudio")[0].pause();
  $(this).parent().find(".play-radio").css("display", "inline");
});

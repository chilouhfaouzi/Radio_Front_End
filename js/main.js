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

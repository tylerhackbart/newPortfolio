  $(document).ready(function () {

  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 2000);
            return false;
        }
      }
    });
  $("header").removeClass("light");

$(".circle").mouseenter(function() {
  $(this).css("background", "#FFFFFF");
}). mouseleave(function() {
  $(this).css("background", "transparent");
});


  $(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value < 270 ){
      $("header").removeClass("light");
      $("#blackMD").addClass("white");
    }
    else {
      $("header").addClass("light", 400);
      $("#blackMD").removeClass("white").addClass("black");
    }
  });

  $('#myCarousel').carousel();
$("#playButton").click(function() {
    $("#myCarousel").carousel("cycle");
});
$("#pauseButton").click(function() {
    $("#myCarousel").carousel("pause");
});




$('a').click(function() {
    var elementClicked = $(this).attr("href");
    var destination = $(elementClicked).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination-15}, 500);
});




});
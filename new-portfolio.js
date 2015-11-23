$(document).ready(function () {


  $(window).on("load resize scroll", function() {
    var value = $(this).scrollTop();
    if ( value < 275 ){
      $("header").removeClass("light");
      $("#menu-list ul li a").addClass("white");
      $("#blue-sky").addClass("hide");
      $("#change").addClass("black").removeClass("white");
    } else {
      $("header").addClass("light", 400);
      $("#menu-list ul li a").removeClass("white").addClass("black");
      $("#blue-sky").removeClass("hide");
    }

  });

$("#change").on("click scroll", function () {
    $("header, .navbar-fixed-top").toggleClass("mobile-navbar-shadow");
    var value = $(this).scrollTop();
    var frame = Math.round(value /1000);
});

$(".circle").mouseenter(function() {
  $(this).css("background", "#FFFFFF");
  $(this).addClass("hover-blue");
}).mouseleave(function() {
  $(this).css("background", "transparent");
  $(this).removeClass("hover-blue");
});


    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('#menu-list a').each(function () {
        $(this).removeClass('frost');
      })
      $(this).addClass('frost');

      var target = this.hash;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });


});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('#menu-list a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if ( refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('#menu-list ul li a').removeClass("frost");
        currentLink.addClass("frost");
      }
      else{
        currentLink.removeClass("frost");
      }
    });
  }

$(function coffeecount() {
  var currentTime = new Date();
  var month = currentTime.getMonth()+1;
  var day = currentTime.getDate();
  var cups = Math.floor((((month* 30)+(day-30))*6));
  document.getElementById("numberOfCoffees").innerHTML = cups;
});

function deleteEverything() {
  $('body').hide();
}





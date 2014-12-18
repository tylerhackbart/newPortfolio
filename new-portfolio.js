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
  $(".circle-info").css("color", "#000000");
}). mouseleave(function() {
  $(this).css("background", "transparent");
});


function coffeecount(){
  var currentTime = new Date();
  var month = currentTime.getMonth()+1;
  var day = currentTime.getDate();
  var cups = (((month* 30)+(day-30))*4.5);
  document.getElementById("numberOfCoffees").innerHTML=cups;
};

window.onload = coffeecount;

$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value < 270 ){
      $("header").removeClass("light");
      $("#menu-list ul li a").addClass("white");
    }
    else {
      $("header").addClass("light", 400);
      $("#menu-list ul li a").removeClass("white").addClass("black");
    }
  });


/*
$(document).scroll(function() {
  var navTop = $("#nav").offset();
  var navHeight = $("#nav").height();
  var windowH = $(window).height();

  $('.section').height(windowH);
  var st = $(this).scrollTop();

});



    
    //for the nav bar:
if(st > navTop ){
$('#nav').addClass('fix');
$('.section:eq(0)').css({'margin-top':navHeight});//fix  scrolling issue due to the fix nav bar
}else{
$('#nav').removeClass('fix');
$('.section:eq(0)').css({'margin-top':'0'});
}
    
$('.section').each(function(index, element) {
if(st + navHeight > $(this).offset().top && st + navHeight  <= $(this).offset().top + $(this).height()  ){
$(this).addClass('active');
            
            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').parent('li').addClass('active');
// or $('#nav li:eq('+index+')').addClass('active');
}else{
$(this).removeClass('active');
            
            var id = $(this).attr('id');
            $('a[href="#'+id+'"]').parent('li').removeClass('active');
//or $('#nav li:eq('+index+')').removeClass('active');
}

});

});
};
*/





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
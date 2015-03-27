$(document).ready(function () {

  $(window).scroll( function() {
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


function onScroll(event){
  var scrollPosition = $(document).scrollTop();
  $('#menu-list ul').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
  if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
  $('#menu-list ul li a').removeClass("frost");
  currentLink.addClass("frost");
  }
});
};


  $(window).on("scroll", onScroll);


  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
      $('#menu-list a').each(function () {
        $(this).removeClass('frost');
      });
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





function coffeecount() {
  var currentTime = new Date();
  var month = currentTime.getMonth()+1;
  var day = currentTime.getDate();
  var cups = Math.floor((((month* 30)+(day-30))*4.5));
  document.getElementById("numberOfCoffees").innerHTML = "Hey";
};





$(".circle").mouseenter(function() {
  $(this).css("background", "#FFFFFF");
  $(this).addClass("hover-blue");
}).mouseleave(function() {
  $(this).css("background", "transparent");
  $(this).removeClass("hover-blue");
});





/*
$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value < 375 ){
      $("header").removeClass("light");
      $("#menu-list ul li a").addClass("white");
    }
    else {
      $("header").addClass("light", 400);
      $("#menu-list ul li a").removeClass("white").addClass("black");
    }
  });

$('.parallax-window').parallax({imageSrc: 'images/tyler-main-2.jpg'});
*/


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
/*




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


*/

});

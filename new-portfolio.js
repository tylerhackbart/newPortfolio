$(document).ready(function () {
  var name = "undefined";
  var email = "undefined";
  var subject = "undefined";
  var message = "undefined";

  $('#send_email').click(function(){
    $('#replacementOnceSent').html('<button id="Submit_sent" class="lead red_main_block submitButtonShape"> Sent Message To Tyler</button>')
    removedNotification();
  });



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

  window.onload = function(){
    window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
      responsive: true
    });
  }


var radarChartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [65,59,90,81,56,55,40]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [28,48,40,19,96,27,100]
      }
    ]
  };

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
// working on validate for emails
function areYouHuman() {
$('body').addClass('stop-scrolling');
  name = $('#name').val();

  email = $('#email').val();

    var x = email
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        $('#email').addClass("error_empty");
        return false;
    }

  subject = $('#subject').val();
  message = $('#message').val();
  $('#pop_up_human').show();

  $('#send_email').attr("href", "mailto:t.hackbart@gmail.com?Subject="+ subject +'&body= Hello my name is '+ name + ' %0D%0A %0D%0A'+ message + ' %0D%0A %0D%0A My email is '+ email);
};


function clearOut() {
  $('#name').val('');
  $('#email').val('');
  $('#subject').val('');
  $('#message').val('');
  $('#email').removeClass("error_empty");
  removedNotification();
};


function removedNotification() {
  $('body').removeClass('stop-scrolling');
  $('#pop_up_human').hide();
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-79746998-1', 'auto');
ga('send', 'pageview');








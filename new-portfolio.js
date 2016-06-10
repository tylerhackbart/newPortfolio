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

function areYouHuman() {
$('body').addClass('stop-scrolling');
var name = $('#name').val();
var email = $('#email').val();
var subject = $('#subject').val();
var message = $('#message').val();
$('#HumanPopUp').modal('toggle');

};



$(function() {
    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');
});

$(form).submit(function(event) {
    event.preventDefault();
});

var formData = $(form).serialize();

$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
})
.done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text(response);

    // Clear the form.
    $('#name').val('');
    $('#email').val('');
    $('#subject').val('');
    $('#message').val('');
})
.fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
    } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
    }
});





$(document).ready(function () {
  $("header").removeClass("light");
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
  $(".circle").mouseenter(function() {
    $(this).css("background", "#FFFFFF");
    }). mouseleave(function() {
    $(this).css("background", "transparent");
  });
  $(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value < 270 ){
      $("header").removeClass("light");
      $("#menu-list h2").addClass("white");
    }
    else {
      $("header").addClass("light", 200);
      $("#menu-list h2").removeClass("white").addClass("black");
    }
  });
  (function (e) {
    e.fn.countdown = function (t, n) {
    function i() {
      eventDate = Date.parse(r.date) / 1e3;
      currentDate = Math.floor(e.now() / 1e3);
    if (eventDate <= currentDate) {
        n.call(this);
          clearInterval(interval)
    }
      seconds = eventDate - currentDate;
      days = Math.floor(seconds / 86400);
      seconds -= days * 60 * 60 * 24;
      hours = Math.floor(seconds / 3600);
      seconds -= hours * 60 * 60;
      minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;
      days == 1 ? thisEl.find(".timeRefDays").text("day") : thisEl.find(".timeRefDays").text("days");
      hours == 1 ? thisEl.find(".timeRefHours").text("hour") : thisEl.find(".timeRefHours").text("hours");
      minutes == 1 ? thisEl.find(".timeRefMinutes").text("minute") : thisEl.find(".timeRefMinutes").text("minutes");
      seconds == 1 ? thisEl.find(".timeRefSeconds").text("second") : thisEl.find(".timeRefSeconds").text("seconds");
      if (r["format"] == "on") {
      days = String(days).length >= 2 ? days : "0" + days;
      hours = String(hours).length >= 2 ? hours : "0" + hours;
      minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
      seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
    }
    if (!isNaN(eventDate)) {
      thisEl.find(".days").text(days);
      thisEl.find(".hours").text(hours);
      thisEl.find(".minutes").text(minutes);
      thisEl.find(".seconds").text(seconds)
    } else {
    alert("Invalid date. Example: 30 Tuesday 2013 15:50:00");
    clearInterval(interval)
    }
    }
    thisEl = e(this);
    var r = {
    date: null,
    format: null
    };
    t && e.extend(r, t);
    i();
    interval = setInterval(i, 1e3)
    }
    })(jQuery);
  $(document).ready(function () {
    function e() {
      var e = new Date;
      e.setDate(e.getDate() + 60);
      dd = e.getDate();
      mm = e.getMonth() + 1;
      y = e.getFullYear();
      futureFormattedDate = mm + "/" + dd + "/" + y;
      return futureFormattedDate
    }
  $("#countdown").countdown({
    date: "15 December 2014 09:00:00", // Change this to your desired date to countdown to
    format: "on"
  });
  });
});
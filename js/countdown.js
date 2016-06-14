var eventStartDate = new Date(Date.UTC(2016, 5, 23, 8));
var eventEndDate = new Date(Date.UTC(2016, 5, 24, 8));

$(document).ready(function () {
  //
  // utc のイベント開催時刻をローカル時間に変更
  // --------------------------------------------------
  var calcLcalDate = function (utcTime) {
    var date = new Date();
    var timezoneOffset = -1 * date.getTimezoneOffset();
    var localTime = utcTime + timezoneOffset;
    return new Date(localTime);
  };


  //
  // --------------------------------------------------
  var formattedDate = function (date, useFullMonth) {
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var myMonths = (useFullMonth) ? fullMonths : months;

    return  myMonths[date.getMonth()] + " " + date.getDate() + " " + date.getHours() + ":00, " + date.getFullYear();
  };

  var utc = Date.UTC(2016, 5, 23, 8);
  var eventDate = new Date(utc);
  $('#local').html(formattedDate(eventDate));
  setInterval("countDown()", 1000);

  var localDate = calcLcalDate(utc);
  //$('.js-local-time').text(formattedDate(localDate, true));
  $('.js-local-time').text(formattedDate(eventDate, true));
});

function countDown() {
  var r1 = getTimeRemaining(eventStartDate);
  $('.remain').html(r1.days + " Days " + r1.hours + " Hours " + r1.minutes + " Min " + r1.seconds + " Sec");

  var r2 = getTimeRemaining(eventEndDate);
  $('.remain-02').html(r2.days + " Days " + r2.hours + " Hours " + r2.minutes + " Min " + r2.seconds + " Sec");
}

function getTimeRemaining(targetDate) {
  var t = targetDate - Date.now();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

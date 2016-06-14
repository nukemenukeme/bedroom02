var eventStartDate = new Date(Date.UTC(2016, 5, 23, 7));
var eventEndDate = new Date(Date.UTC(2016, 5, 24, 7));

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

    //return date.getFullYear() + " " + myMonths[date.getMonth()] + " " + date.getDate() + " " + date.getHours() + ":00";
    return date.getDate() + " " + myMonths[date.getMonth()] + " " +  date.getHours() + ":00";
};

setInterval("countDown()", 1000);

document.getElementById('js-local-time').innerHTML = formattedDate(eventStartDate, true) + " ~ " + formattedDate(eventEndDate,true);


function countDown() {
  var r1 = getTimeRemaining(eventStartDate);
  document.getElementById('remain').innerHTML = r1.days + " Days " + r1.hours + " Hours " + r1.minutes + " Min " + r1.seconds + " Sec";

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

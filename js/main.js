var miniClock = function (startCode, endCode) {


  function update(obj) {
    obj.el.innerHTML = "&#" + obj.i + ";";
    if (obj.i <= endCode) {
      obj.i = startCode;
    } else {
      obj.i -= 1;
    }
  }

  function init() {
    var targets = document.querySelectorAll(".js-icon-clock");
    for (var i = 0; i < targets.length; i += 1) {
      var o = {
        el: targets[i],
        i: 194
      };
      setInterval(function (obj) {
        update(obj);
      }, 1000 / 12, o);
    }
  }
  init();
};

window.onload = function () {
  var detective = new Detector();
  if (detective.detect('Wingdings') === true) {
    new miniClock(194, 183);
  } else {
    new miniClock(128347, 128336);
  }

};


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
  var ua = navigator.userAgent;
  var isMac = ua.match(/Mac|PPC/);
  var isWin = ua.match(/Win(dows )?/);
  var hasFont = detective.detect('Wingdings');

  var sun = document.querySelectorAll(".sun")[0];
  var moon = document.querySelectorAll(".moon")[0];
  if (isWin) {
    document.body.classList.add("os-win");
    sun.innerHTML = "&#x52";
    moon.innerHTML = "&#x1F31B";
  }else if(isMac){
    document.body.classList.add("os-mac");

    sun.innerHTML = "&#x1F31E";
    moon.innerHTML = "&#x1F31B";
  }else{
    document.body.classList.add("os-other");
    sun.innerHTML = "&#x1F31E";
    moon.innerHTML = "&#x1F31B";
  }

  new miniClock(128347, 128336);

};


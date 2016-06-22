/**
* Under MIT (1915)
* - made by Gray Sea Star (IDPW )
*/

var VideoFitter;

VideoFitter = (function() {
  VideoFitter.count = -1;

  VideoFitter.prototype.timeoutId = 0;

  function VideoFitter($el) {
    VideoFitter.count = VideoFitter.count + 1;
    this.id = VideoFitter.count;
    this.$el = $el;
    this.trueWidth = $el.attr('width');
    this.trueHeight = $el.attr('height');
    this.trueRatio = this.trueHeight / this.trueWidth;


    this.$window = $(window);
    this.$window.on("resize.vimeo-fitter-" + this.id + ",", (function(_this) {
      return function() {
        return _this.resize();
      };
    })(this));
    this.resize();
  }

  VideoFitter.prototype.resize = function() {
    var newHeight;
    newHeight = Math.floor(this.$el.width() * this.trueRatio);
    return this.$el.css({
      height: newHeight
    });
  };

  return VideoFitter;

})();

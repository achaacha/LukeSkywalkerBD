/**
 * @name SaviorSkywalker
 * @description Star Wars Theme
 * @version 0.1.0
 * @author Acha
 * @authorId 164744231879966720
 * @invite TUdjaNKa
 * @website https://github.com/achaacha/SaviorSkywalker
 * @source https://raw.githubusercontent.com/achaacha/SaviorSkywalker/main/SaviorSkywalker.plugin.js
 * @updateUrl https://raw.githubusercontent.com/achaacha/SaviorSkywalker/main/SaviorSkywalker.plugin.js
 */

module.exports = class SaviorSkywalker {

  start() {
    function addSourceToVideo(element, src, type) {
      var source = document.createElement('source');

      source.src = src;
      source.type = type;

      element.appendChild(source);
  }

    var video = document.createElement('video');

    document.body.appendChild(video);
    video.id = "myVideo";
    video.loop = true;

    addSourceToVideo(video, 'https://i.imgur.com/olqhfSI.mp4', 'video/mp4');

    video.play();
    //clock
    var self = this;
    this.clock = $("<div/>", { id: "clockPluginClock" });
    $("body").append(this.clock);

    this.pad = function(x) {
      return x < 10 ? '0'+x : x;
    };

    this.ticktock = function() {
      var d = new Date();

      var h = self.pad( d.getHours() );
      var m = self.pad( d.getMinutes() );
      var s = self.pad( d.getSeconds() );

      var current_time = [h,m,s].join(':');

      self.clock.html(current_time);
    };
    this.ticktock();

    this.interval = setInterval(this.ticktock, 1000);

  }
  stop() {
    var video = document.getElementById('myVideo')
    video.parentNode.removeChild(video);

    //clock
    clearInterval(this.interval);
  	this.clock.remove();
  }

  getSettingsPanel() {}
}

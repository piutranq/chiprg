var C2Trackers = {
  bgmLoop:
    {tk: new ChiptuneJsPlayer(new ChiptuneJsConfig(-1)), bf: ""},
  bgmNonLoop:
    {tk: new ChiptuneJsPlayer(new ChiptuneJsConfig(0)), bf: ""},
  se1:
    {tk: new ChiptuneJsPlayer(new ChiptuneJsConfig(0)), bf: ""},
  se2:
    {tk: new ChiptuneJsPlayer(new ChiptuneJsConfig(0)), bf: ""},
  se3:
    {tk: new ChiptuneJsPlayer(new ChiptuneJsConfig(0)), bf: ""},
  se4:
    {tk: new ChiptuneJsPlayer(new ChiptuneJsConfig(0)), bf: ""},
};

var C2TrackerControl = {
  load: function(tracker, path){
    tracker.tk.load(path, function(buf) {
      tracker.bf = buf;
    });
  },
  play: function(tracker){
    tracker.tk.load('', function() {
      tracker.tk.play(tracker.bf);
    });
  },
  stop: function(tracker){
    tracker.tk.load('', function() {
      tracker.tk.stop();
    });
  },
};

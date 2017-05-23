var NUM_TRACKERS = 6;
var Trackers = [];
for(var i=0; i<NUM_TRACKERS; i++) {
  Trackers.push({
    tracker: new ChiptuneJsPlayer(new ChiptuneJsConfig(0)),
    buffer: ""
  });
}

var TrackerControl = {
  load: function(num, path){
    Trackers[num].tracker.load(path, function(buf) {
      Trackers[num].buffer = buf;
    });
  },
  play: function(num){
    Trackers[num].tracker.load('', function() {
      Trackers[num].tracker.play(Trackers[num].buffer);
    });
  },
  stop: function(num){
    Trackers[num].tracker.load('', function() {
      Trackers[num].tracker.stop();
    });
  },
  allstop: function(){
    for(var i=0; i<NUM_TRACKERS; i++) {
      this.stop(i);
    }
  }
};

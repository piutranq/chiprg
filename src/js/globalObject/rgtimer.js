var RGtimer = {

  start: 0,
  tempo: 120,
  beatSlicer: 0,

  current_msec: 0,
  current_mbeat: 0,

  // Initialize. bpm decides song tempo for beat per second unit.
  init: function(){
    this.start=0;
    this.tempo=120;
    this.beatSlicer=0;
    this.current_msec=0;
    this.current_mbeat=0;
  },
  timerStart: function(bpm){
    this.start = Date.now();
    this.current_msec = 0;
    this.current_mbeat = 0;

    // set Tempo
    if((bpm>30) && (bpm<6000)) {
      this.setTempo(bpm);
    }
    // if Invalid BPM: set Tempo = 120 (default)
    else {
      this.setTempo(120);
    }
  },
  setTempo: function(bpm){
    this.Tempo = bpm;
    this.beatSlicer = 60/this.Tempo;
  },

  // Get current time for msec unit
  getMsec: function(){
    this.current_msec = Date.now()-this.start;
    return parseInt(this.current_msec);
  },

  // Get current time for beat unit
  getMbeat: function(){
    this.current_mbeat = this.current_msec/this.beatSlicer;
    return parseInt(this.current_mbeat);
  }
};
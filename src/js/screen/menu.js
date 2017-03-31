var screenMenu = {
  name: "screenMenu",

  buttonGoStart: "",
  buttonGoConfig: "",
  buttonGoRanking: "",
  buttonGoSelect: "",

  preload: function(){
    game.load.image('redbutton','assets/img/redbutton.png');
    game.load.image('yellowbutton','assets/img/yellowbutton.png');
    game.load.image('greenbutton','assets/img/greenbutton.png');
    game.load.image('bluebutton','assets/img/bluebutton.png');
  },
  create: function(){
    var title = game.add.text(0, 0, this.name, { font: "14px Arial", fill: "#ffffff"});
    var buttonGoStart = game.add.button(0, 342, 'redbutton', this.goStart, this);
    var buttonGoConfig = game.add.button(64, 342, 'yellowbutton', this.goConfig, this);
    var buttonGoRanking = game.add.button(128, 342, 'greenbutton', this.goRanking, this);
    var buttonGoSelect = game.add.button(192, 342, 'bluebutton', this.goSelect, this);
  },

  goStart: function(buttonGoStart, pointer, isOver) {
    if (isOver){
      this.state.start('screenStart');
    }
  },
  goConfig: function(buttonGoConfig, pointer, isOver) {
    if (isOver){
      this.state.start('screenConfig');
    }
  },
  goRanking: function(buttonGoRanking, pointer, isOver) {
    if (isOver){
      this.state.start('screenRanking');
    }
  },
  goSelect: function(buttonGoSelect, pointer, isOver) {
    if (isOver){
      this.state.start('screenSelect');
    }
  }
};

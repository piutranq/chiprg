var screenMenu = {
  name: "screenMenu",

  buttonGoStart: "",
  buttonGoConfig: "",
  buttonGoRanking: "",
  buttonGoSelect: "",

  preload: function(){
    game.load.spritesheet('buttonCircle', SKIN_PATH + skinName + 'buttonCircle.png', 80, 80);
  },
  create: function(){
    var title = game.add.text(0, 0, this.name, { font: "14px Arial", fill: "#ffffff"});
    var buttonGoStart = game.add.button(0, 324, 'buttonCircle', this.goStart, this);
    var buttonGoConfig = game.add.button(64, 324, 'buttonCircle', this.goConfig, this);
    var buttonGoRanking = game.add.button(128, 324, 'buttonCircle', this.goRanking, this);
    var buttonGoSelect = game.add.button(192, 324, 'buttonCircle', this.goSelect, this);
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

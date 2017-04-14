var screenMenu = {
  name: "screenMenu",

  buttonGoStart: "",
  buttonGoConfig: "",
  buttonGoRanking: "",
  buttonGoSelect: "",

  preload: function(){
    game.load.spritesheet('buttonCircle', SKIN_PATH + skinName + 'buttonCircle.png', 40, 40);
  },
  create: function(){
    var title = game.add.bitmapText(0,  0, 'font57', this.name, 7);
    var buttonGoStart = game.add.button(0, 162, 'buttonCircle', this.goStart, this);
    var buttonGoConfig = game.add.button(32, 162, 'buttonCircle', this.goConfig, this);
    var buttonGoRanking = game.add.button(64, 162, 'buttonCircle', this.goRanking, this);
    var buttonGoSelect = game.add.button(96, 162, 'buttonCircle', this.goSelect, this);
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

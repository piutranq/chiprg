var screenStart = {

  // STRINGS
  name: "screenStart",
  ascii: ' !"#$%&\'()*+,-./\n0123456789:;<=>?\n@ABCDEFGHIJKLMNO\nPQRSTUVWXYZ[\\]^_\n`abcdefghijklmno\npqrstuvwxyz{|}~ ',

  // OBJECTS
  ascii1014: "",
  ascii1418: "",
  buttonGoMenu: "",

  // FUNCTIONS
  preload: function(){
    game.load.bitmapFont('font1014', 'assets/fonts/font1014.png', 'assets/fonts/font1014.xml');
    game.load.bitmapFont('font1418', 'assets/fonts/font1418.png', 'assets/fonts/font1418.xml');
    game.load.image('redbutton','assets/img/redbutton.png');
  },

  create: function(){
    ascii1014 = game.add.bitmapText(0, 0,'font1014', this.ascii,  14);
    ascii1418 = game.add.bitmapText(0, 86,'font1418', this.ascii,  18);
    buttonGoMenu = game.add.button(
      game.world.centerX-32, game.world.centerY-18,
      'redbutton', this.goMenu, this);
  },

  update: function(){ },

  goMenu: function(buttonGoMenu, pointer, isOver){
    if (isOver)this.state.start('screenMenu');
  }
};

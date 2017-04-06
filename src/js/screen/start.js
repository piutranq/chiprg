var screenStart = {

  name: "screenStart",
  buttonGoMenu: "",

  ascii: ' !"#$%&\'()*+,-./\n0123456789:;<=>?\n@ABCDEFGHIJKLMNO\nPQRSTUVWXYZ[\\]^_\n`abcdefghijklmno\npqrstuvwxyz{|}~ ',

  preload: function(){

    game.load.bitmapFont('font1014', 'assets/fonts/font1014.png', 'assets/fonts/font1014.xml');
    game.load.bitmapFont('font1418', 'assets/fonts/font1418.png', 'assets/fonts/font1418.xml');
    game.load.image('redbutton','assets/img/redbutton.png');

  },
  create: function(){
    var ascii1014 = game.add.bitmapText(0, 0,'font1014', this.ascii,  14)
    var ascii1014 = game.add.bitmapText(0, 86,'font1418', this.ascii,  18)
    var buttonStart = game.add.button(
      game.world.centerX-32, game.world.centerY-18,
      'redbutton', this.goMenu, this);
  },
  goMenu: function(buttonGoMenu, pointer, isOver){
    if (isOver){
      this.state.start('screenMenu');
    }
  }
};

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

    // Enable scale is zoomed
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    // Disable Anti-ailas when scale is zoomed
    Phaser.Canvas.setImageRenderingCrisp(game.canvas); // for Canvas renderer
    PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST; // for webGL renderer
    // Phaser.Canvas.setSmoothingEnabled(game.context, false); // Dosen't work. It may be legacy code.

    // Load assets
    game.load.bitmapFont('font1014', 'assets/fonts/font1014.png', 'assets/fonts/font1014.xml');
    game.load.bitmapFont('font1418', 'assets/fonts/font1418.png', 'assets/fonts/font1418.xml');
    game.load.spritesheet('buttonCircle', SKIN_PATH + skinName + 'buttonCircle.png', 80, 80);
  },

  create: function(){
    ascii1014 = game.add.bitmapText(0, 0,'font1014', this.ascii,  14);
    ascii1418 = game.add.bitmapText(0, 86,'font1418', this.ascii,  18);

    buttonGoMenu = game.add.button(
      game.world.centerX-32, game.world.centerY-18,
      'buttonCircle', this.goMenu, this);
  },

  update: function(){ },

  goMenu: function(buttonGoMenu, pointer, isOver){
    if (isOver)this.state.start('screenMenu');
  }
};

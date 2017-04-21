var screenStart = {

  // STRINGS
  name: "screenStart",

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

    game.world.resize(320, 240);



    // Load assets
    game.load.bitmapFont('font57', 'assets/fonts/font57.png', 'assets/fonts/font57.xml');
    game.load.bitmapFont('font79', 'assets/fonts/font79.png', 'assets/fonts/font79.xml');
  },

  create: function(){
    buttonGoMenu = game.add.button(
      game.world.centerX-16, game.world.centerY-9,
      'buttonCircle', this.goMenu, this);
  },

  update: function(){ },

  goMenu: function(buttonGoMenu, pointer, isOver){
    if (isOver)this.state.start('screenPlay');
  }
};

var screenStart = {

  // STRINGS
  name: "screenStart",

  // OBJECTS
  ascii1014: "",
  ascii1418: "",
  buttonGoMenu: "",

  // OBJECTS: sounds
  bgm: "",
  se: "",

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

    // Load plugins
    game.load.script('protracker', 'js/lib/protracker.js');

    // Load Image
    game.load.bitmapFont(
      'font57', FONT_PATH + 'font57.png', FONT_PATH + 'font57.xml');
    game.load.bitmapFont(
      'font79', FONT_PATH + 'font79.png', FONT_PATH + 'font79.xml');

    // Load Sounds
    game.load.binary(
      'bgmStart', BGM_PATH + 'bgmStart.mod', push_menuBGM, this);
    game.load.binary(
      'bgmMenu', BGM_PATH + 'bgmMenu.mod', push_menuBGM, this);
  },

  create: function(){
    buttonGoMenu = game.add.button(
      game.world.centerX-16, game.world.centerY-9,
      'buttonCircle', this.goMenu, this);

    bgm = new Protracker();
    bgm.buffer = game.cache.getBinary(menuBGMlist[0]);
    bgm.parse();
    bgm.play();
  },

  update: function(){ },

  goMenu: function(buttonGoMenu, pointer, isOver){
    bgm.stop();
    bgm.clearsong();
    bgm_temp.stop();
    bgm_temp.clearsong();
    if (isOver)this.state.start('screenPlay');
  }
};

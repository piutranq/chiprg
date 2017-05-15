var screenStart = {

  // STRINGS
  press: "PRESS START / ENTER",

  // OBJECT
  titleImage: "",
  titleText: "",

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

    game.load.image(
      'titleImage', IMG_PATH + 'title/titleImage.png');
  },

  create: function(){

    // Graphic Setup
    this.titleImage = game.add.button(0, 0, 'titleImage', this.titleTouched, this);
    this.titleText = game.add.bitmapText(100, 112, 'font79', this.press, 9);

    // BGM Setup
    bgm = new Protracker();
    bgm.buffer = game.cache.getBinary(menuBGMlist[1]);
    bgm.parse();
    bgm.play();

    // Gamepad Setup
    pad1 = game.input.gamepad.pad1;
    game.input.gamepad.start();

  },

  update: function(){
    // Press start
    if (game.input.gamepad.supported && game.input.gamepad.active && pad1.connected)
      if (pad1.justPressed(Phaser.Gamepad.XBOX360_START))
        this.goLogin();

    // Press enter
    if (game.input.keyboard.justPressed(Phaser.Keyboard.ENTER))
      this.goLogin();
  },

  titleTouched: function(titleImage, pointer, isOver){
    if (isOver) this.goLogin();
  },

  goLogin: function(){
    bgm.stop();
    bgm.clearsong();
    this.state.start('screenInputCheck');
  }
};

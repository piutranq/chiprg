var screenStart = {

  // STRINGS
  press: "PRESS START / ENTER",

  // OBJECT
  titleImage: "",
  titleText: "",

  // FUNCTIONS
  preload: function(){
    game.load.image(
      'titleImage', PATH.IMG + 'title/titleImage.png');
  },

  create: function(){

    // Graphic Setup
    this.titleImage = game.add.button(0, 0, 'titleImage', this.titleTouched, this);
    this.titleText = game.add.bitmapText(100, 112, 'font79', this.press, 9);

    // BGM Setup
    Tracker.menu.bgmA.buffer = game.cache.getBinary(menuBGMlist[1]);
    Tracker.menu.bgmA.parse();
    Tracker.menu.bgmA.play();

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
    Tracker.menu.bgmA.stop();
    Tracker.menu.bgmA.clearsong();
    this.state.start('screenSelectAccount');
  }
};

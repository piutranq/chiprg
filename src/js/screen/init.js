var screenInit = {
  timer: new RGtimer(),
  titleImage: "",

  preload: function(){

    // Enable scale is zoomed
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    // Disable Anti-ailas when scale is zoomed
    Phaser.Canvas.setImageRenderingCrisp(game.canvas); // for Canvas renderer
    PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST; // for webGL renderer
    // Phaser.Canvas.setSmoothingEnabled(game.context, false); // Dosen't work on Chrome.

    // Load Bitmap Font
    game.load.bitmapFont(
      'font57', PATH.FONT + 'font57.png', PATH.FONT + 'font57.xml');
    game.load.bitmapFont(
      'font79', PATH.FONT + 'font79.png', PATH.FONT + 'font79.xml');

    game.load.image(
      'titleImage', PATH.IMG + 'title/studio2AOE_180p.png');

  },

  create: function(){
    this.timer.start(120);
    this.titleImage = game.add.button(0, 0, 'titleImage');

    // Setup Multitouch
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    RGinput.touch.mo = game.input.mousePointer;
    RGinput.touch.t1 = game.input.pointer1;
    RGinput.touch.t2 = game.input.pointer2;
    RGinput.touch.t3 = game.input.pointer3;
    RGinput.touch.t4 = game.input.pointer4;
    RGinput.touch.t5 = game.input.pointer5;
    RGinput.touch.t6 = game.input.pointer6;

    // Setup Default Gamepad Buttons
    game.input.gamepad.start();
    RGinput.stage.pad1 = Phaser.Gamepad.XBOX360_DPAD_UP;
    RGinput.stage.pad2 = Phaser.Gamepad.XBOX360_DPAD_RIGHT;
    RGinput.stage.pad3 = Phaser.Gamepad.XBOX360_X;
    RGinput.stage.pad4 = Phaser.Gamepad.XBOX360_Y;
    RGinput.stage.padL = Phaser.Gamepad.XBOX360_LEFT_BUMPER;
    RGinput.stage.padR = Phaser.Gamepad.XBOX360_RIGHT_BUMPER;
    RGinput.stage.padS = Phaser.Gamepad.XBOX360_START;

    // Setup Default Keyboard Keys
    RGinput.stage.key1 = Phaser.Keyboard.S;
    RGinput.stage.key2 = Phaser.Keyboard.F;
    RGinput.stage.key3 = Phaser.Keyboard.J;
    RGinput.stage.key4 = Phaser.Keyboard.L;
    RGinput.stage.keyL = Phaser.Keyboard.E;
    RGinput.stage.keyR = Phaser.Keyboard.I;
    RGinput.stage.keyS = Phaser.Keyboard.ENTER;

  },

  update: function(){
    if(this.timer.getMsec()>=2000) {
      this.state.start('screenStart');
    }
  }
};
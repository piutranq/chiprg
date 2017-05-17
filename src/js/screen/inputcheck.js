var screenInputCheck = {

  // STRINGS
  name: "screenInputCheck",
  padIndicatorText: "padIndicator: off",
  padCounterText: "padCounter: off",
  timestampText: 0,
  beatstampText: 0,

  // OBJECTS
  padCount: {
    A: 0,
    B: 0,
    X: 0,
    Y: 0,
    LEFT_BUMPER: 0,
    RIGHT_BUMPER: 0,
    BACK: 0,
    START: 0,
    DPAD_UP: 0,
    DPAD_DOWN: 0,
    DPAD_LEFT: 0,
    DPAD_RIGHT: 0
  },
  keyCount: {
    ENTER: 0
  },

  // TextObject
  title: "",
  padIndicator: "",
  padCounter: "",
  timestamp: "",
  beatstamp: "",

  // FUNCTIONS
  preload: function(){
  },

  create: function(){
    this.title = game.add.bitmapText(0, 0, 'font57', this.name, 7);
    this.padIndicator = game.add.bitmapText(0, 8, 'font57', this.padIndicatorText, 7);
    this.padCounter = game.add.bitmapText(0, 16, 'font57', this.padCounterText, 7);
    this.timestamp = game.add.bitmapText(0, 172, 'font57', this.timestampText, 7);
    this.beatstamp = game.add.bitmapText(0, 162, 'font57', this.beatstampText, 7);

    // Timer Setup
    RGtimer.init(138);
  },

  update: function(){

    // update padIndicator
    if (game.input.gamepad.supported &&
        game.input.gamepad.active &&
        game.input.gamepad.pad1.connected)
      this.padIndicatorText="pad1: on";
    else
      this.padIndicatorText="pad1: off";

    // update padCounter
    if (game.input.keyboard.justPressed(Phaser.Keyboard.ENTER))
        this.keyCount.ENTER++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_A))
        this.padCount.A++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_B))
        this.padCount.B++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_X))
        this.padCount.X++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_Y))
        this.padCount.Y++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_LEFT_BUMPER))
        this.padCount.LEFT_BUMPER++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_RIGHT_BUMPER))
        this.padCount.RIGHT_BUMPER++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_BACK))
        this.padCount.BACK++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_START))
        this.padCount.START++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_UP))
        this.padCount.DPAD_UP++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_DOWN))
        this.padCount.DPAD_DOWN++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_LEFT))
        this.padCount.DPAD_LEFT++;
    if (game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_RIGHT))
        this.padCount.DPAD_RIGHT++;

    this.padCounterText=
      "ENTER: " + this.keyCount.ENTER +
      "\nA: " + this.padCount.A +
      "\nB: " + this.padCount.B +
      "\nX: " + this.padCount.X +
      "\nY: " + this.padCount.Y +
      "\nLB: " + this.padCount.LEFT_BUMPER +
      "\nRB: " + this.padCount.RIGHT_BUMPER +
      "\nBACK: " + this.padCount.BACK +
      "\nSTART: " + this.padCount.START +
      "\nUP: " + this.padCount.DPAD_UP +
      "\nDOWN: " + this.padCount.DPAD_DOWN +
      "\nLEFT: " + this.padCount.DPAD_LEFT +
      "\nRIGHT: " + this.padCount.DPAD_RIGHT + "\n";

    // write padIndicator & padCounter
    this.padIndicator.setText(this.padIndicatorText);
    this.padCounter.setText(this.padCounterText);

    // update timestamp
    this.timestampText = RGtimer.getMsec();
    this.beatstampText = RGtimer.getMbeat();
    this.timestamp.setText(this.timestampText);
    this.beatstamp.setText(this.beatstampText);
  },

  render: function(){

  }
};

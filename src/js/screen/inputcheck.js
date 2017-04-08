var screenInputCheck = {

  // STRINGS
  name: "screenInputCheck",
  padIndicatorText: "padIndicator: off",
  padCounterText: "padCounter: off",
  timestampText: 0,

  // OBJECTS
  title: "",
  padIndicator: "",
  padCounter: "",
  timestamp: "",
  pad1: "",
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
    DPAD_RIGHT: 0,
  },

  // FUNCTIONS
  preload: function(){
    game.load.bitmapFont('font1014', 'assets/fonts/font1014.png', 'assets/fonts/font1014.xml');
  },

  create: function(){
    title = game.add.bitmapText(0, 0, 'font1014', this.name, 14);
    padIndicator = game.add.bitmapText(0, 16, 'font1014', this.padIndicatorText, 14);
    padCounter = game.add.bitmapText(0, 32, 'font1014', this.padCounterText, 14);
    timestamp = game.add.bitmapText(0, 346, 'font1014', this.timestampText, 14);

    game.input.gamepad.start();
    pad1 = game.input.gamepad.pad1;

  },

  update: function(){

    // update padIndicator
    if (game.input.gamepad.supported && game.input.gamepad.active && pad1.connected)
      padIndicatorText="pad1: on";
    else
      padIndicatorText="pad1: off";

    // update padCounter
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_A))
        this.padCount.A++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_B))
        this.padCount.B++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_X))
        this.padCount.X++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_Y))
        this.padCount.Y++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_LEFT_BUMPER))
        this.padCount.LEFT_BUMPER++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_RIGHT_BUMPER))
        this.padCount.RIGHT_BUMPER++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_BACK))
        this.padCount.BACK++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_START))
        this.padCount.START++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_UP))
        this.padCount.DPAD_UP++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_DOWN))
        this.padCount.DPAD_DOWN++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_LEFT))
        this.padCount.DPAD_LEFT++;
    if (pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_RIGHT))
        this.padCount.DPAD_RIGHT++;

    padCounterText=
      "A: " + this.padCount.A +
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
    padIndicator.setText(padIndicatorText);
    padCounter.setText(padCounterText);

    // update timestamp
    this.timestampText++;
    timestamp.setText(this.timestampText);
  },

  render: function(){

  }
};

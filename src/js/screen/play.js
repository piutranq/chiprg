var screenPlay = {

  // STRINGS
  name: "screenPlay",

  // CONSTS
  area1: "",
  area2: "",
  area3: "",
  area4: "",
  areaL: "",
  areaR: "",
  areaSTART: "",
  areaSELECT: "",

  // OBJECT
  skindata:"",

  // OBJECT (image)
  img_gear: "",
  img_screen: "",
  img_judgeline: "",
  img_line1: "",
  img_line2: "",
  img_line3: "",
  img_line4: "",
  img_lineL: "",
  img_lineR: "",
  img_button1: "",
  img_button2: "",
  img_button3: "",
  img_button4: "",
  img_buttonL: "",
  img_buttonR: "",
  img_buttonS: "",

  // OBJECT (input)
  pad1: "",
  mouse: "",
  touch1: "",
  touch2: "",
  touch3: "",
  touch4: "",
  touch5: "",
  touch6: "",


  preload: function(){
    game.load.json('skindata', skinPath + 'skindata.json');

    game.load.image('gear', skinPath + 'gear.png');
    game.load.image('screen', skinPath + 'screen.png');

    game.load.spritesheet(
      'buttonTrigger', skinPath + 'buttonTrigger.png', 80, 40);

    game.load.spritesheet(
      'buttonCircle', skinPath + 'buttonCircle.png', 28, 31);

    game.load.spritesheet(
      'buttonS', skinPath + 'buttonS.png', 40, 20);

    game.load.spritesheet(
      'lineCircle', skinPath + 'lineCircle.png', 30, 150);

    game.load.spritesheet(
      'lineTrigger', skinPath + 'lineTrigger.png', 60, 150);

    game.load.spritesheet(
      'judgeLine', skinPath + 'judgeLine.png', 120, 6);

  },
  create: function(){

    skindata = game.cache.getJSON('skindata');

    // Add touch area
    area1 = skindata.button1.area;
    area2 = skindata.button2.area;
    area3 = skindata.button3.area;
    area4 = skindata.button4.area;
    areaL = skindata.buttonL.area;
    areaR = skindata.buttonR.area;
    areaS = skindata.buttonS.area;

    // Add image, text on screen

    img_lineL   = game.add.sprite(
      skindata.lineL.pos.x,
      skindata.lineL.pos.y,
      'lineTrigger',
      skindata.lineL.sprite.default);

    img_lineR   = game.add.sprite(
      skindata.lineR.pos.x,
      skindata.lineR.pos.y,
      'lineTrigger',
      skindata.lineR.sprite.default);

    img_line1   = game.add.sprite(
      skindata.line1.pos.x,
      skindata.line1.pos.y,
      'lineCircle',
      skindata.line1.sprite.default);

    img_line2   = game.add.sprite(
      skindata.line2.pos.x,
      skindata.line2.pos.y,
      'lineCircle',
      skindata.line2.sprite.default);

    img_line3   = game.add.sprite(
      skindata.line3.pos.x,
      skindata.line3.pos.y,
      'lineCircle',
      skindata.line3.sprite.default);

    img_line4   = game.add.sprite(
      skindata.line4.pos.x,
      skindata.line4.pos.y,
      'lineCircle',
      skindata.line4.sprite.default);

    img_screen  = game.add.sprite(
      skindata.screen.pos.x,
      skindata.screen.pos.y,
      'screen');

    img_judgeline  = game.add.sprite(
      skindata.judgeLine.pos.x,
      skindata.judgeLine.pos.y,
      'judgeLine',
      0);

    img_gear    = game.add.sprite(
      skindata.gear.pos.x,
      skindata.gear.pos.y,
      'gear');

    img_button1 = game.add.sprite(
      skindata.button1.pos.x,
      skindata.button1.pos.y,
      'buttonCircle',
      skindata.button1.sprite.default);

    img_button2 = game.add.sprite(
      skindata.button2.pos.x,
      skindata.button2.pos.y,
      'buttonCircle',
      skindata.button2.sprite.default);

    img_button3 = game.add.sprite(
      skindata.button3.pos.x,
      skindata.button3.pos.y,
      'buttonCircle',
      skindata.button3.sprite.default);

    img_button4 = game.add.sprite(
      skindata.button4.pos.x,
      skindata.button4.pos.y,
      'buttonCircle',
      skindata.button4.sprite.default);

    img_buttonL = game.add.sprite(
      skindata.buttonL.pos.x,
      skindata.buttonL.pos.y,
      'buttonTrigger',
      skindata.buttonL.sprite.default);

    img_buttonR = game.add.sprite(
      skindata.buttonR.pos.x,
      skindata.buttonR.pos.y,
      'buttonTrigger',
      skindata.buttonR.sprite.default);

    img_buttonS = game.add.sprite(
      skindata.buttonS.pos.x,
      skindata.buttonS.pos.y,
      'buttonS',
      skindata.buttonS.sprite.default);

    // Gamepad input setup
    game.input.gamepad.start();
    inputPad1 = Phaser.Gamepad.XBOX360_DPAD_UP;
    inputPad2 = Phaser.Gamepad.XBOX360_DPAD_RIGHT;
    inputPad3 = Phaser.Gamepad.XBOX360_X;
    inputPad4 = Phaser.Gamepad.XBOX360_Y;
    inputPadL = Phaser.Gamepad.XBOX360_LEFT_BUMPER;
    inputPadR = Phaser.Gamepad.XBOX360_RIGHT_BUMPER;
    inputPadS = Phaser.Gamepad.XBOX360_START;

    // Keyboard input setup
    key1 = Phaser.Keyboard.S;
    key2 = Phaser.Keyboard.F;
    key3 = Phaser.Keyboard.J;
    key4 = Phaser.Keyboard.L;
    keyL = Phaser.Keyboard.E;
    keyR = Phaser.Keyboard.I;
    keyS = Phaser.Keyboard.ENTER;

    // Mouse & multi-touch input setup
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    game.input.addPointer();
    mouse = game.input.mousePointer;
    touch1 = game.input.pointer1;
    touch2 = game.input.pointer2;
    touch3 = game.input.pointer3;
    touch4 = game.input.pointer4;
    touch5 = game.input.pointer5;
    touch6 = game.input.pointer6;

  },

  update: function() {

    var pIsDown = function (p, a) { // p is pointer, a is area
      var ret;
      if(a.shape == 'rectangle')
        ret = (p.x > a.x1 && p.x < a.x2 && p.y > a.y1 && p.y < a.y2);
      else if(a.shape == 'circle')
        ret = Math.pow(a.ox-p.x, 2)+Math.pow(a.oy-p.y, 2) < Math.pow(a.r, 2);
      else
        return 0;
      return ret && p.isDown;
    };

    var bIsDown = function (pad, key, area) {
      var ret =
        game.input.gamepad.pad1.isDown(pad) ||
        game.input.keyboard.isDown(key)     ||
        pIsDown(mouse, area)                ||
        pIsDown(touch1, area)               ||
        pIsDown(touch2, area)               ||
        pIsDown(touch3, area)               ||
        pIsDown(touch4, area)               ||
        pIsDown(touch5, area)               ||
        pIsDown(touch6, area);
      return ret;
    };

    // button graphic update
    if (bIsDown(inputPad1, key1, area1)){
      img_button1.frame=skindata.button1.sprite.pressed;
      img_line1.frame=skindata.line1.sprite.pressed;
    }
    else{
      img_button1.frame=skindata.button1.sprite.default;
      img_line1.frame=skindata.line1.sprite.default;
    }

    if (bIsDown(inputPad2, key2, area2)){
      img_button2.frame=skindata.button2.sprite.pressed;
      img_line2.frame=skindata.line2.sprite.pressed;
    }
    else{
      img_button2.frame=skindata.button2.sprite.default;
      img_line2.frame=skindata.line2.sprite.default;
    }

    if (bIsDown(inputPad3, key3, area3)){
      img_button3.frame=skindata.button3.sprite.pressed;
      img_line3.frame=skindata.line3.sprite.pressed;
    }
    else{
      img_button3.frame=skindata.button3.sprite.default;
      img_line3.frame=skindata.line3.sprite.default;
    }

    if (bIsDown(inputPad4, key4, area4)){
      img_button4.frame=skindata.button4.sprite.pressed;
      img_line4.frame=skindata.line4.sprite.pressed;
    }
    else{
      img_button4.frame=skindata.button4.sprite.default;
      img_line4.frame=skindata.line4.sprite.default;
    }

    if (bIsDown(inputPadL, keyL, areaL)){
      img_buttonL.frame=skindata.buttonL.sprite.pressed;
      img_lineL.frame=skindata.lineL.sprite.pressed;
    }
    else{
      img_buttonL.frame=skindata.buttonL.sprite.default;
      img_lineL.frame=skindata.lineL.sprite.default;
    }

    if (bIsDown(inputPadR, keyR, areaR)){
      img_buttonR.frame=skindata.buttonR.sprite.pressed;
      img_lineR.frame=skindata.lineR.sprite.pressed;
    }
    else{
      img_buttonR.frame=skindata.buttonR.sprite.default;
      img_lineR.frame=skindata.lineR.sprite.default;
    }

    if (bIsDown(inputPadS, keyS, areaS)){
      img_buttonS.frame=skindata.buttonS.sprite.pressed;
    }
    else{
      img_buttonS.frame=skindata.buttonS.sprite.default;
    }
  }

};

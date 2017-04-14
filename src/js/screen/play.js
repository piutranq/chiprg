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

  // OBJECT (image)
  img_gear: "",
  img_buttonL: "",
  img_buttonR: "",
  img_button1: "",
  img_button2: "",
  img_button3: "",
  img_button4: "",

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
    game.load.image('gear', SKIN_PATH + skinName + 'gear.png');
    game.load.spritesheet('buttonL', SKIN_PATH + skinName + 'buttonL.png', 80, 39);
    game.load.spritesheet('buttonR', SKIN_PATH + skinName + 'buttonR.png', 80, 39);
    game.load.spritesheet('buttonCircle', SKIN_PATH + skinName + 'buttonCircle.png', 40, 40);
    game.load.spritesheet('buttonS', SKIN_PATH + skinName + 'buttonS.png', 40, 20);
  },
  create: function(){

    // Add touch area
    area1 = { shape:   'circle', ox: 19, oy:117,  r: 20 };
    area2 = { shape:   'circle', ox: 59, oy:137,  r: 20 };
    area3 = { shape:   'circle', ox:259, oy:137,  r: 20 };
    area4 = { shape:   'circle', ox:299, oy:117,  r: 20 };
    areaL = { shape:'rectangle', x1:  0, x2: 79, y1: 20, y2: 49 };
    areaR = { shape:'rectangle', x1:240, x2:319, y1: 20, y2: 49 };
    areaS = { shape:'rectangle', x1:255, x2:294, y1: 65, y2: 84 };

    // Add image, text on screen
    img_gear    = game.add.sprite(  0,   0, 'gear'           );
    img_button1 = game.add.sprite(  0, 100, 'buttonCircle', 0);
    img_button2 = game.add.sprite( 40, 120, 'buttonCircle', 0);
    img_button3 = game.add.sprite(240, 120, 'buttonCircle', 0);
    img_button4 = game.add.sprite(280, 100, 'buttonCircle', 0);
    img_buttonL = game.add.sprite(  0,  20, 'buttonL',      0);
    img_buttonR = game.add.sprite(240,  20, 'buttonR',      0);
    img_buttonS = game.add.sprite(255,  65, 'buttonS',      0);

    // Gamepad input setup
    game.input.gamepad.start();
    pad1      = game.input.gamepad.pad1;
    inputPad1 = Phaser.Gamepad.XBOX360_DPAD_UP;
    inputPad2 = Phaser.Gamepad.XBOX360_DPAD_RIGHT;
    inputPad3 = Phaser.Gamepad.XBOX360_X;
    inputPad4 = Phaser.Gamepad.XBOX360_Y;
    inputPadL = Phaser.Gamepad.XBOX360_LEFT_BUMPER;
    inputPadR = Phaser.Gamepad.XBOX360_RIGHT_BUMPER;
    inputPadS = Phaser.Gamepad.XBOX360_START;

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

    // Keyboard input setup
    key1 = game.input.keyboard.addKey(Phaser.Keyboard.S);
    key2 = game.input.keyboard.addKey(Phaser.Keyboard.F);
    key3 = game.input.keyboard.addKey(Phaser.Keyboard.J);
    key4 = game.input.keyboard.addKey(Phaser.Keyboard.L);
    keyL = game.input.keyboard.addKey(Phaser.Keyboard.E);
    keyR = game.input.keyboard.addKey(Phaser.Keyboard.I);
    keyS = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    game.input.keyboard.addKeyCapture
      ([Phaser.Keyboard.S,
        Phaser.Keyboard.F,
        Phaser.Keyboard.J,
        Phaser.Keyboard.L,
        Phaser.Keyboard.E,
        Phaser.Keyboard.I,
        Phaser.Keyboard.ENTER]);

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

    var isDown1 =
      pad1.isDown(inputPad1) ||
      key1.isDown ||
      pIsDown(mouse, area1) ||
      pIsDown(touch1, area1) ||
      pIsDown(touch2, area1) ||
      pIsDown(touch3, area1) ||
      pIsDown(touch4, area1) ||
      pIsDown(touch5, area1) ||
      pIsDown(touch6, area1);

    var isDown2 =
      pad1.isDown(inputPad2) ||
      key2.isDown ||
      pIsDown(mouse, area2) ||
      pIsDown(touch1, area2) ||
      pIsDown(touch2, area2) ||
      pIsDown(touch3, area2) ||
      pIsDown(touch4, area2) ||
      pIsDown(touch5, area2) ||
      pIsDown(touch6, area2);

    var isDown3 =
      pad1.isDown(inputPad3) ||
      key3.isDown ||
      pIsDown(mouse, area3) ||
      pIsDown(touch1, area3) ||
      pIsDown(touch2, area3) ||
      pIsDown(touch3, area3) ||
      pIsDown(touch4, area3) ||
      pIsDown(touch5, area3) ||
      pIsDown(touch6, area3);

    var isDown4 =
      pad1.isDown(inputPad4) ||
      key4.isDown ||
      pIsDown(mouse, area4) ||
      pIsDown(touch1, area4) ||
      pIsDown(touch2, area4) ||
      pIsDown(touch3, area4) ||
      pIsDown(touch4, area4) ||
      pIsDown(touch5, area4) ||
      pIsDown(touch6, area4);

    var isDownL =
      pad1.isDown(inputPadL) ||
      keyL.isDown ||
      pIsDown(mouse, areaL) ||
      pIsDown(touch1, areaL) ||
      pIsDown(touch2, areaL) ||
      pIsDown(touch3, areaL) ||
      pIsDown(touch4, areaL) ||
      pIsDown(touch5, areaL) ||
      pIsDown(touch6, areaL);

    var isDownR =
      pad1.isDown(inputPadR) ||
      keyR.isDown ||
      pIsDown(mouse, areaR) ||
      pIsDown(touch1, areaR) ||
      pIsDown(touch2, areaR) ||
      pIsDown(touch3, areaR) ||
      pIsDown(touch4, areaR) ||
      pIsDown(touch5, areaR) ||
      pIsDown(touch6, areaR);

    var isDownS =
      pad1.isDown(inputPadS) ||
      keyS.isDown ||
      pIsDown(mouse, areaS) ||
      pIsDown(touch1, areaS) ||
      pIsDown(touch2, areaS) ||
      pIsDown(touch3, areaS) ||
      pIsDown(touch4, areaS) ||
      pIsDown(touch5, areaS) ||
      pIsDown(touch6, areaS);

    // button graphic update
    if (isDown1)
      img_button1.frame=1;
    else
      img_button1.frame=0;
    if (isDown2)
      img_button2.frame=1;
    else
      img_button2.frame=0;
    if (isDown3)
      img_button3.frame=1;
    else
      img_button3.frame=0;
    if (isDown4)
      img_button4.frame=1;
    else
      img_button4.frame=0;
    if (isDownL)
      img_buttonL.frame=1;
    else
      img_buttonL.frame=0;
    if (isDownR)
      img_buttonR.frame=1;
    else
      img_buttonR.frame=0;
    if (isDownS)
      img_buttonS.frame=1;
    else
      img_buttonS.frame=0;
  }

};

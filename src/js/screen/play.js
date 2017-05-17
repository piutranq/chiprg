var screenPlay = {

  // STRINGS
  name: "screenPlay",

  // TOUCH AREA
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


  preload: function(){

    game.load.image('gear', PATH.skinPath('default') + 'gear.png');
    game.load.image('screen', PATH.skinPath('default') + 'screen.png');

    game.load.spritesheet(
      'buttonTrigger',
      PATH.skinPath('default') + 'buttonTrigger.png',
      screenPlayInit.skindata.size.buttonTrigger.x,
      screenPlayInit.skindata.size.buttonTrigger.y);

    game.load.spritesheet(
      'buttonCircle',
      PATH.skinPath('default') + 'buttonCircle.png',
      screenPlayInit.skindata.size.buttonCircle.x,
      screenPlayInit.skindata.size.buttonCircle.y);

    game.load.spritesheet(
      'buttonS',
      PATH.skinPath('default') + 'buttonS.png',
      screenPlayInit.skindata.size.buttonS.x,
      screenPlayInit.skindata.size.buttonS.y);

    game.load.spritesheet(
      'lineCircle',
      PATH.skinPath('default') + 'lineCircle.png',
      screenPlayInit.skindata.size.lineCircle.x,
      screenPlayInit.skindata.size.lineCircle.y);

    game.load.spritesheet(
      'lineTrigger',
      PATH.skinPath('default') + 'lineTrigger.png',
      screenPlayInit.skindata.size.lineTrigger.x,
      screenPlayInit.skindata.size.lineTrigger.y);

    game.load.spritesheet(
      'judgeLine', PATH.skinPath('default') + 'judgeLine.png',
      screenPlayInit.skindata.size.judgeLine.x,
      screenPlayInit.skindata.size.judgeLine.y);

  },
  create: function(){

    // Add touch area
    this.area1 = screenPlayInit.skindata.button1.area;
    this.area2 = screenPlayInit.skindata.button2.area;
    this.area3 = screenPlayInit.skindata.button3.area;
    this.area4 = screenPlayInit.skindata.button4.area;
    this.areaL = screenPlayInit.skindata.buttonL.area;
    this.areaR = screenPlayInit.skindata.buttonR.area;
    this.areaS = screenPlayInit.skindata.buttonS.area;

    // Add image, text on screen

    this.img_lineL   = game.add.sprite(
      screenPlayInit.skindata.lineL.pos.x,
      screenPlayInit.skindata.lineL.pos.y,
      'lineTrigger',
      screenPlayInit.skindata.lineL.sprite.default);

    this.img_lineR   = game.add.sprite(
      screenPlayInit.skindata.lineR.pos.x,
      screenPlayInit.skindata.lineR.pos.y,
      'lineTrigger',
      screenPlayInit.skindata.lineR.sprite.default);

    this.img_line1   = game.add.sprite(
      screenPlayInit.skindata.line1.pos.x,
      screenPlayInit.skindata.line1.pos.y,
      'lineCircle',
      screenPlayInit.skindata.line1.sprite.default);

    this.img_line2   = game.add.sprite(
      screenPlayInit.skindata.line2.pos.x,
      screenPlayInit.skindata.line2.pos.y,
      'lineCircle',
      screenPlayInit.skindata.line2.sprite.default);

    this.img_line3   = game.add.sprite(
      screenPlayInit.skindata.line3.pos.x,
      screenPlayInit.skindata.line3.pos.y,
      'lineCircle',
      screenPlayInit.skindata.line3.sprite.default);

    this.img_line4   = game.add.sprite(
      screenPlayInit.skindata.line4.pos.x,
      screenPlayInit.skindata.line4.pos.y,
      'lineCircle',
      screenPlayInit.skindata.line4.sprite.default);

    this.img_screen  = game.add.sprite(
      screenPlayInit.skindata.screen.pos.x,
      screenPlayInit.skindata.screen.pos.y,
      'screen');

    this.img_judgeline  = game.add.sprite(
      screenPlayInit.skindata.judgeLine.pos.x,
      screenPlayInit.skindata.judgeLine.pos.y,
      'judgeLine',
      0);

    this.img_gear    = game.add.sprite(
      screenPlayInit.skindata.gear.pos.x,
      screenPlayInit.skindata.gear.pos.y,
      'gear');

    this.img_button1 = game.add.sprite(
      screenPlayInit.skindata.button1.pos.x,
      screenPlayInit.skindata.button1.pos.y,
      'buttonCircle',
      screenPlayInit.skindata.button1.sprite.default);

    this.img_button2 = game.add.sprite(
      screenPlayInit.skindata.button2.pos.x,
      screenPlayInit.skindata.button2.pos.y,
      'buttonCircle',
      screenPlayInit.skindata.button2.sprite.default);

    this.img_button3 = game.add.sprite(
      screenPlayInit.skindata.button3.pos.x,
      screenPlayInit.skindata.button3.pos.y,
      'buttonCircle',
      screenPlayInit.skindata.button3.sprite.default);

    this.img_button4 = game.add.sprite(
      screenPlayInit.skindata.button4.pos.x,
      screenPlayInit.skindata.button4.pos.y,
      'buttonCircle',
      screenPlayInit.skindata.button4.sprite.default);

    this.img_buttonL = game.add.sprite(
      screenPlayInit.skindata.buttonL.pos.x,
      screenPlayInit.skindata.buttonL.pos.y,
      'buttonTrigger',
      screenPlayInit.skindata.buttonL.sprite.default);

    this.img_buttonR = game.add.sprite(
      screenPlayInit.skindata.buttonR.pos.x,
      screenPlayInit.skindata.buttonR.pos.y,
      'buttonTrigger',
      screenPlayInit.skindata.buttonR.sprite.default);

    this.img_buttonS = game.add.sprite(
      screenPlayInit.skindata.buttonS.pos.x,
      screenPlayInit.skindata.buttonS.pos.y,
      'buttonS',
      screenPlayInit.skindata.buttonS.sprite.default);
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
        pIsDown(Input.touch.mo, area)               ||
        pIsDown(Input.touch.t1, area)               ||
        pIsDown(Input.touch.t2, area)               ||
        pIsDown(Input.touch.t3, area)               ||
        pIsDown(Input.touch.t4, area)               ||
        pIsDown(Input.touch.t5, area)               ||
        pIsDown(Input.touch.t6, area);
      return ret;
    };

    // button graphic update
    if (bIsDown(Input.stage.pad1, Input.stage.key1, this.area1)){
      this.img_button1.frame=screenPlayInit.skindata.button1.sprite.pressed;
      this.img_line1.frame=screenPlayInit.skindata.line1.sprite.pressed;
    }
    else{
      this.img_button1.frame=screenPlayInit.skindata.button1.sprite.default;
      this.img_line1.frame=screenPlayInit.skindata.line1.sprite.default;
    }

    if (bIsDown(Input.stage.pad2, Input.stage.key2, this.area2)){
      this.img_button2.frame=screenPlayInit.skindata.button2.sprite.pressed;
      this.img_line2.frame=screenPlayInit.skindata.line2.sprite.pressed;
    }
    else{
      this.img_button2.frame=screenPlayInit.skindata.button2.sprite.default;
      this.img_line2.frame=screenPlayInit.skindata.line2.sprite.default;
    }

    if (bIsDown(Input.stage.pad3, Input.stage.key3, this.area3)){
      this.img_button3.frame=screenPlayInit.skindata.button3.sprite.pressed;
      this.img_line3.frame=screenPlayInit.skindata.line3.sprite.pressed;
    }
    else{
      this.img_button3.frame=screenPlayInit.skindata.button3.sprite.default;
      this.img_line3.frame=screenPlayInit.skindata.line3.sprite.default;
    }

    if (bIsDown(Input.stage.pad4, Input.stage.key4, this.area4)){
      this.img_button4.frame=screenPlayInit.skindata.button4.sprite.pressed;
      this.img_line4.frame=screenPlayInit.skindata.line4.sprite.pressed;
    }
    else{
      this.img_button4.frame=screenPlayInit.skindata.button4.sprite.default;
      this.img_line4.frame=screenPlayInit.skindata.line4.sprite.default;
    }

    if (bIsDown(Input.stage.padL, Input.stage.keyL, this.areaL)){
      this.img_buttonL.frame=screenPlayInit.skindata.buttonL.sprite.pressed;
      this.img_lineL.frame=screenPlayInit.skindata.lineL.sprite.pressed;
    }
    else{
      this.img_buttonL.frame=screenPlayInit.skindata.buttonL.sprite.default;
      this.img_lineL.frame=screenPlayInit.skindata.lineL.sprite.default;
    }

    if (bIsDown(Input.stage.padR, Input.stage.keyR, this.areaR)){
      this.img_buttonR.frame=screenPlayInit.skindata.buttonR.sprite.pressed;
      this.img_lineR.frame=screenPlayInit.skindata.lineR.sprite.pressed;
    }
    else{
      this.img_buttonR.frame=screenPlayInit.skindata.buttonR.sprite.default;
      this.img_lineR.frame=screenPlayInit.skindata.lineR.sprite.default;
    }

    if (bIsDown(Input.stage.padS, Input.stage.keyS, this.areaS)){
      this.img_buttonS.frame=screenPlayInit.skindata.buttonS.sprite.pressed;
    }
    else{
      this.img_buttonS.frame=screenPlayInit.skindata.buttonS.sprite.default;
    }
  }

};

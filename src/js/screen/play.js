var screenPlay = {

  // Strings
  name: "screenPlay",

  // Touch Area
  area1: "",
  area2: "",
  area3: "",
  area4: "",
  areaL: "",
  areaR: "",
  areaSTART: "",
  areaSELECT: "",

  // Image
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

  // text
  beatstamp: "",

  // variable
  speed: 400,
  elapsed_time: 0,
  elapsed_beat: 0,

  // OBJECT (note object)
  objects: "",

  objectimg: [],

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

    game.load.spritesheet(
      'noteCircle', PATH.skinPath('default') + 'noteCircle.png',
      screenPlayInit.skindata.size.noteCircle.x,
      screenPlayInit.skindata.size.noteCircle.y);

    game.load.spritesheet(
      'noteTrigger', PATH.skinPath('default') + 'noteTrigger.png',
      screenPlayInit.skindata.size.noteTrigger.x,
      screenPlayInit.skindata.size.noteTrigger.y);

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

    this.img_judgeline  = game.add.sprite(
      screenPlayInit.skindata.judgeLine.pos.x,
      screenPlayInit.skindata.judgeLine.pos.y,
      'judgeLine', 0);

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


    // Load object data
    this.objects = screenPlayInit.stagedata.objects;

    // Load object image
    for(var i=0; i<screenPlayInit.stagedata.objectmax; i++){
      this.objectimg.push({start:"", middle:"", end:""});
      switch(this.objects[i].type){
      case "single":
        switch(this.objects[i].line){
        case "1":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line1.pos.x,-10*i,
            'noteCircle', 1);
          break;
        case "2":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line2.pos.x,-10*i,
            'noteCircle', 2);
          break;
        case "3":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line3.pos.x,-10*i,
            'noteCircle', 1);
          break;
        case "4":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line4.pos.x, -10*i,
            'noteCircle', 2);
          break;
        case "L":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.lineL.pos.x, -10*i,
            'noteTrigger', 1);
          break;
        case "R":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.lineR.pos.x,-10*i,
            'noteTrigger', 1);
          break;
        }
        break;
      case "long":
        switch(this.objects[i].line){
        case "1":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line1.pos.x, -10*i,
            'noteCircle', 10);
          this.objectimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.line1.pos.x, -10*i,
            'noteCircle', 7);
          this.objectimg[i].end = game.add.sprite(
            screenPlayInit.skindata.line1.pos.x, -10*i,
            'noteCircle', 4);
          break;
        case "2":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line2.pos.x, -10*i,
            'noteCircle', 11);
          this.objectimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.line2.pos.x, -10*i,
            'noteCircle', 8);
          this.objectimg[i].end = game.add.sprite(
            screenPlayInit.skindata.line2.pos.x, -10*i,
            'noteCircle', 5);
          break;
        case "3":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line3.pos.x, -10*i,
            'noteCircle', 10);
          this.objectimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.line3.pos.x, -10*i,
            'noteCircle', 7);
          this.objectimg[i].end = game.add.sprite(
            screenPlayInit.skindata.line3.pos.x, -10*i,
            'noteCircle', 4);
          break;
        case "4":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line4.pos.x, -10*i,
            'noteCircle', 11);
          this.objectimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.line4.pos.x, -10*i,
            'noteCircle', 8);
          this.objectimg[i].end = game.add.sprite(
            screenPlayInit.skindata.line4.pos.x, -10*i,
            'noteCircle', 5);
          break;
        case "L":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.lineL.pos.x, -10*i,
            'noteTrigger', 7);
          this.objectimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.lineL.pos.x, -10*i,
            'noteTrigger', 5);
          this.objectimg[i].end = game.add.sprite(
            screenPlayInit.skindata.lineL.pos.x, -10*i,
            'noteTrigger', 3);
          break;
        case "R":
          this.objectimg[i].start = game.add.sprite(
            screenPlayInit.skindata.lineR.pos.x, -10*i,
            'noteTrigger', 7);
          this.objectimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.lineR.pos.x, -10*i,
            'noteTrigger', 5);
          this.objectimg[i].end = game.add.sprite(
            screenPlayInit.skindata.lineR.pos.x, -10*i,
            'noteTrigger', 3);
          break;
        }
        break;
      case "keysound":
        break;
      case "endofsong":
        break;
      default:
      }
    }

    this.img_screen  = game.add.sprite(
      screenPlayInit.skindata.screen.pos.x,
      screenPlayInit.skindata.screen.pos.y,
      'screen');

    // Play Song

    // Set Timer
    RGtimer.init(screenPlayInit.stagedata.tempo);
    this.beatstamp = game.add.bitmapText(0, 170, 'font57', 0, 7);
  },

  update: function() {

    // Update Timer
    this.elapsed_time = RGtimer.getMsec();
    this.elapsed_beat = RGtimer.getMbeat();
    this.beatstamp.setText(this.elapsed_beat);

    // Update ObjectImgPos
    for(var i=0; i<screenPlayInit.stagedata.objectmax; i++){
      switch(this.objects[i].type) {
      case 'single':
        this.objectimg[i].start.y = this.getObjectImgPos(screenPlayInit.skindata.judgeLine.pos.y, this.speed, this.elapsed_beat, this.objects[i].start);
        break;
      case "long":
        this.objectimg[i].start.y = this.getObjectImgPos(screenPlayInit.skindata.judgeLine.pos.y, this.speed, this.elapsed_beat, this.objects[i].start);
        this.objectimg[i].middle.y = this.getObjectImgPos(screenPlayInit.skindata.judgeLine.pos.y, this.speed, this.elapsed_beat, this.objects[i].end) + screenPlayInit.skindata.size.judgeLine.y;
        this.objectimg[i].end.y = this.getObjectImgPos(screenPlayInit.skindata.judgeLine.pos.y, this.speed, this.elapsed_beat, this.objects[i].end);
        this.objectimg[i].middle.height = this.objectimg[i].start.y - this.objectimg[i].middle.y;
        break;
      case "keysound":
        break;
      case "endofsong":
        break;
      }
    }

    // Button IsDown Check
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

    // Button Graphic Update
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
  },

  getObjectImgPos: function(
    line_height, scroll_speed, elapsed_beat, object_beat){

    var ret = elapsed_beat - object_beat;
    ret *= scroll_speed*line_height;
    ret /= 400000;

    return ret;
  }

};

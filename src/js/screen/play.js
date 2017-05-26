var screenPlay = {

  // Strings
  string: {
    name: "screenPlay"
  },

  // Touch Area
  area: {
    circle1: "",
    circle2: "",
    circle3: "",
    circle4: "",
    triggerL: "",
    triggerR: "",
    buttonS: "",
  },

  // Image
  img: {
    gear: "",
    screen: "",
    judgeline: "",
    line1: "",
    line2: "",
    line3: "",
    line4: "",
    lineL: "",
    lineR: "",
    button1: "",
    button2: "",
    button3: "",
    button4: "",
    buttonL: "",
    buttonR: "",
    buttonS: "",
  },

  // Text
  text: {
    beatstamp: "",

    genre: "",
    title: "",
    pattern_and_level: "",
    artist: "",

    score: "",
    maxcombo: "",
    speed: "",
  },

  // Variable
  var: {

    // Speed & Timer
    speed: 400,
    elapsed_time: 0,
    elapsed_beat: 0,

    // Score & Judge
    maxcombo: 0,
    currentcombo: 0,
    score: 0,
    perfect: 0,
    great: 0,
    good: 0,
    bad: 0,
    miss: 0,
    fail: 0,

    // Meter Gague
    beatmeter: 0,
    lifegague: 1000
  },

  // Note Object
  object: "",
  objimg: [],

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
    this.area.circle1 = screenPlayInit.skindata.button1.area;
    this.area.circle2 = screenPlayInit.skindata.button2.area;
    this.area.circle3 = screenPlayInit.skindata.button3.area;
    this.area.circle4 = screenPlayInit.skindata.button4.area;
    this.area.triggerL = screenPlayInit.skindata.buttonL.area;
    this.area.triggerR = screenPlayInit.skindata.buttonR.area;
    this.area.buttonS = screenPlayInit.skindata.buttonS.area;

    // Add image, text on screen
    this.img.lineL   = game.add.sprite(
      screenPlayInit.skindata.lineL.pos.x,
      screenPlayInit.skindata.lineL.pos.y,
      'lineTrigger',
      screenPlayInit.skindata.lineL.sprite.default);

    this.img.lineR   = game.add.sprite(
      screenPlayInit.skindata.lineR.pos.x,
      screenPlayInit.skindata.lineR.pos.y,
      'lineTrigger',
      screenPlayInit.skindata.lineR.sprite.default);

    this.img.line1   = game.add.sprite(
      screenPlayInit.skindata.line1.pos.x,
      screenPlayInit.skindata.line1.pos.y,
      'lineCircle',
      screenPlayInit.skindata.line1.sprite.default);

    this.img.line2   = game.add.sprite(
      screenPlayInit.skindata.line2.pos.x,
      screenPlayInit.skindata.line2.pos.y,
      'lineCircle',
      screenPlayInit.skindata.line2.sprite.default);

    this.img.line3   = game.add.sprite(
      screenPlayInit.skindata.line3.pos.x,
      screenPlayInit.skindata.line3.pos.y,
      'lineCircle',
      screenPlayInit.skindata.line3.sprite.default);

    this.img.line4   = game.add.sprite(
      screenPlayInit.skindata.line4.pos.x,
      screenPlayInit.skindata.line4.pos.y,
      'lineCircle',
      screenPlayInit.skindata.line4.sprite.default);

    this.img.judgeline  = game.add.sprite(
      screenPlayInit.skindata.judgeLine.pos.x,
      screenPlayInit.skindata.judgeLine.pos.y,
      'judgeLine', 0);

    this.img.gear    = game.add.sprite(
      screenPlayInit.skindata.gear.pos.x,
      screenPlayInit.skindata.gear.pos.y,
      'gear');

    this.img.button1 = game.add.sprite(
      screenPlayInit.skindata.button1.pos.x,
      screenPlayInit.skindata.button1.pos.y,
      'buttonCircle',
      screenPlayInit.skindata.button1.sprite.default);

    this.img.button2 = game.add.sprite(
      screenPlayInit.skindata.button2.pos.x,
      screenPlayInit.skindata.button2.pos.y,
      'buttonCircle',
      screenPlayInit.skindata.button2.sprite.default);

    this.img.button3 = game.add.sprite(
      screenPlayInit.skindata.button3.pos.x,
      screenPlayInit.skindata.button3.pos.y,
      'buttonCircle',
      screenPlayInit.skindata.button3.sprite.default);

    this.img.button4 = game.add.sprite(
      screenPlayInit.skindata.button4.pos.x,
      screenPlayInit.skindata.button4.pos.y,
      'buttonCircle',
      screenPlayInit.skindata.button4.sprite.default);

    this.img.buttonL = game.add.sprite(
      screenPlayInit.skindata.buttonL.pos.x,
      screenPlayInit.skindata.buttonL.pos.y,
      'buttonTrigger',
      screenPlayInit.skindata.buttonL.sprite.default);

    this.img.buttonR = game.add.sprite(
      screenPlayInit.skindata.buttonR.pos.x,
      screenPlayInit.skindata.buttonR.pos.y,
      'buttonTrigger',
      screenPlayInit.skindata.buttonR.sprite.default);

    this.img.buttonS = game.add.sprite(
      screenPlayInit.skindata.buttonS.pos.x,
      screenPlayInit.skindata.buttonS.pos.y,
      'buttonS',
      screenPlayInit.skindata.buttonS.sprite.default);


    // Load object data
    this.object = screenPlayInit.stagedata.objects;

    // Load object image
    for(var i=0; this.object[i].type!="endofsong"; i++){
      this.objimg.push({start:"", middle:"", end:""});
      switch(this.object[i].type){
      case "single":
        switch(this.object[i].line){
        case "1":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line1.pos.x,-180,
            'noteCircle', 1);
          break;
        case "2":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line2.pos.x,-180,
            'noteCircle', 2);
          break;
        case "3":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line3.pos.x,-180,
            'noteCircle', 2);
          break;
        case "4":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line4.pos.x, -180,
            'noteCircle', 1);
          break;
        case "L":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.lineL.pos.x, -180,
            'noteTrigger', 1);
          break;
        case "R":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.lineR.pos.x,-180,
            'noteTrigger', 1);
          break;
        }
        break;
      case "long":
        switch(this.object[i].line){
        case "1":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line1.pos.x, -180,
            'noteCircle', 10);
          this.objimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.line1.pos.x, -180,
            'noteCircle', 7);
          this.objimg[i].end = game.add.sprite(
            screenPlayInit.skindata.line1.pos.x, -180,
            'noteCircle', 4);
          break;
        case "2":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line2.pos.x, -180,
            'noteCircle', 11);
          this.objimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.line2.pos.x, -180,
            'noteCircle', 8);
          this.objimg[i].end = game.add.sprite(
            screenPlayInit.skindata.line2.pos.x, -180,
            'noteCircle', 5);
          break;
        case "3":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line3.pos.x, -180,
            'noteCircle', 11);
          this.objimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.line3.pos.x, -180,
            'noteCircle', 8);
          this.objimg[i].end = game.add.sprite(
            screenPlayInit.skindata.line3.pos.x, -180,
            'noteCircle', 5);
          break;
        case "4":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.line4.pos.x, -180,
            'noteCircle', 10);
          this.objimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.line4.pos.x, -180,
            'noteCircle', 7);
          this.objimg[i].end = game.add.sprite(
            screenPlayInit.skindata.line4.pos.x, -180,
            'noteCircle', 4);
          break;
        case "L":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.lineL.pos.x, -180,
            'noteTrigger', 7);
          this.objimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.lineL.pos.x, -180,
            'noteTrigger', 5);
          this.objimg[i].end = game.add.sprite(
            screenPlayInit.skindata.lineL.pos.x, -180,
            'noteTrigger', 3);
          break;
        case "R":
          this.objimg[i].start = game.add.sprite(
            screenPlayInit.skindata.lineR.pos.x, -180,
            'noteTrigger', 7);
          this.objimg[i].middle = game.add.sprite(
            screenPlayInit.skindata.lineR.pos.x, -180,
            'noteTrigger', 5);
          this.objimg[i].end = game.add.sprite(
            screenPlayInit.skindata.lineR.pos.x, -180,
            'noteTrigger', 3);
          break;
        }
        break;
      case "keysound":
        break;
      default:
      }
    }

    this.img.screen  = game.add.sprite(
      screenPlayInit.skindata.screen.pos.x,
      screenPlayInit.skindata.screen.pos.y,
      'screen');

    // Set Text
    this.text.score =
      game.add.bitmapText(100, 162, 'font57', 'SCORE:  0000000', 7);
    this.text.maxcombo =
      game.add.bitmapText(100, 172, 'font57', 'MAX COMBO: 0000', 7);
    this.text.speed =
      game.add.bitmapText(170, 172, 'font57', 'SPEED: 4.00x', 7);

    // Play Song

    // Set Timer
    RGtimer.init(screenPlayInit.stagedata.tempo);
    this.text.beatstamp = game.add.bitmapText(0, 170, 'font57', 0, 7);
  },

  update: function() {

    // Update Timer
    this.var.elapsed_time = RGtimer.getMsec();
    this.var.elapsed_beat = RGtimer.getMbeat();
    this.text.beatstamp.setText(this.var.elapsed_beat);

    // song is end?
    if(this.var.elapsed_time > screenPlayInit.stagedata.songLength*1000) {
      this.goToResult();
    }

    // Update Text
    this.text.score.setText('SCORE:  ' + SomeMath.pad0(this.var.score, 7));
    this.text.maxcombo.setText('MAX COMBO: ' + SomeMath.pad0(this.var.maxcombo, 4));
    this.text.speed.setText('SPEED: ' + Number(this.var.speed/100).toFixed(2) + 'x');

    // Update ObjectImgPos
    for(var i=0; this.object[i].type!="endofsong"; i++){
      var judgeHeight = screenPlayInit.skindata.size.judgeLine.y;
      var lineHeight = screenPlayInit.skindata.judgeLine.pos.y;
      var speed = this.var.speed;
      var beat = this.var.elapsed_beat;
      var object = this.object[i];
      switch(object.type) {
      case 'single':
        this.objimg[i].start.y =
          this.getObjectImgPos(lineHeight, speed, beat, object.start) + lineHeight;
        break;
      case "long":
        this.objimg[i].start.y =
          this.getObjectImgPos(lineHeight, speed, beat, object.start) + lineHeight;
        this.objimg[i].middle.y =
          this.getObjectImgPos(lineHeight, speed, beat, object.end) + judgeHeight + lineHeight;
        this.objimg[i].end.y =
          this.getObjectImgPos(lineHeight, speed, beat, object.end) + lineHeight;
        this.objimg[i].middle.height =
          this.objimg[i].start.y - this.objimg[i].middle.y;
        break;
      case "keysound":
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
        pIsDown(Input.touch.mo, area)       ||
        pIsDown(Input.touch.t1, area)       ||
        pIsDown(Input.touch.t2, area)       ||
        pIsDown(Input.touch.t3, area)       ||
        pIsDown(Input.touch.t4, area)       ||
        pIsDown(Input.touch.t5, area)       ||
        pIsDown(Input.touch.t6, area);
      return ret;
    };

    // Button Graphic Update
    if (bIsDown(Input.stage.pad1, Input.stage.key1, this.area.circle1)){
      this.img.button1.frame=screenPlayInit.skindata.button1.sprite.pressed;
      this.img.line1.frame=screenPlayInit.skindata.line1.sprite.pressed;
    }
    else{
      this.img.button1.frame=screenPlayInit.skindata.button1.sprite.default;
      this.img.line1.frame=screenPlayInit.skindata.line1.sprite.default;
    }

    if (bIsDown(Input.stage.pad2, Input.stage.key2, this.area.circle2)){
      this.img.button2.frame=screenPlayInit.skindata.button2.sprite.pressed;
      this.img.line2.frame=screenPlayInit.skindata.line2.sprite.pressed;
    }
    else{
      this.img.button2.frame=screenPlayInit.skindata.button2.sprite.default;
      this.img.line2.frame=screenPlayInit.skindata.line2.sprite.default;
    }

    if (bIsDown(Input.stage.pad3, Input.stage.key3, this.area.circle3)){
      this.img.button3.frame=screenPlayInit.skindata.button3.sprite.pressed;
      this.img.line3.frame=screenPlayInit.skindata.line3.sprite.pressed;
    }
    else{
      this.img.button3.frame=screenPlayInit.skindata.button3.sprite.default;
      this.img.line3.frame=screenPlayInit.skindata.line3.sprite.default;
    }

    if (bIsDown(Input.stage.pad4, Input.stage.key4, this.area.circle4)){
      this.img.button4.frame=screenPlayInit.skindata.button4.sprite.pressed;
      this.img.line4.frame=screenPlayInit.skindata.line4.sprite.pressed;
    }
    else{
      this.img.button4.frame=screenPlayInit.skindata.button4.sprite.default;
      this.img.line4.frame=screenPlayInit.skindata.line4.sprite.default;
    }

    if (bIsDown(Input.stage.padL, Input.stage.keyL, this.area.triggerL)){
      this.img.buttonL.frame=screenPlayInit.skindata.buttonL.sprite.pressed;
      this.img.lineL.frame=screenPlayInit.skindata.lineL.sprite.pressed;
    }
    else{
      this.img.buttonL.frame=screenPlayInit.skindata.buttonL.sprite.default;
      this.img.lineL.frame=screenPlayInit.skindata.lineL.sprite.default;
    }

    if (bIsDown(Input.stage.padR, Input.stage.keyR, this.area.triggerR)){
      this.img.buttonR.frame=screenPlayInit.skindata.buttonR.sprite.pressed;
      this.img.lineR.frame=screenPlayInit.skindata.lineR.sprite.pressed;
    }
    else{
      this.img.buttonR.frame=screenPlayInit.skindata.buttonR.sprite.default;
      this.img.lineR.frame=screenPlayInit.skindata.lineR.sprite.default;
    }

    if (bIsDown(Input.stage.padS, Input.stage.keyS, this.area.buttonS)){
      this.img.buttonS.frame=screenPlayInit.skindata.buttonS.sprite.pressed;
    }
    else{
      this.img.buttonS.frame=screenPlayInit.skindata.buttonS.sprite.default;
    }
  },

  getObjectImgPos: function(
    line_height, scroll_speed, elapsed_beat, object_beat){

    var ret = elapsed_beat - object_beat;
    ret *= scroll_speed*line_height;
    ret /= 400000;

    return ret;
  },

  goToResult: function() {
    this.state.start('screenResult');
  }

};

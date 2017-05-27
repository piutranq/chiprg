var screenPlay = {

  // Strings
  string: {
    name: "screenPlay"
  },

  // Touch Area
  area: {
    button1: "",
    button2: "",
    button3: "",
    button4: "",
    buttonL: "",
    buttonR: "",
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

  // Flag
  flag: {
    songStarted: 0,
    paused: 0
  },

  // Text
  text: {
    beatstamp: "",
    justPressed: "",

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

    judgeData: [0, 0, 0, 0, 0, 0],

    // Meter Gague
    beatmeter: 0,
    lifegague: 1000
  },

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

    game.load.spritesheet(
      'judgePerfect', PATH.skinPath('default') + 'judgePerfect.png',
      screenPlayInit.skindata.size.judgeFont.x,
      screenPlayInit.skindata.size.judgeFont.y);

    game.load.spritesheet(
      'judgeGreat', PATH.skinPath('default') + 'judgeGreat.png',
      screenPlayInit.skindata.size.judgeFont.x,
      screenPlayInit.skindata.size.judgeFont.y);

    game.load.spritesheet(
      'judgeGood', PATH.skinPath('default') + 'judgeGood.png',
      screenPlayInit.skindata.size.judgeFont.x,
      screenPlayInit.skindata.size.judgeFont.y);

    game.load.spritesheet(
      'judgeBad', PATH.skinPath('default') + 'judgeBad.png',
      screenPlayInit.skindata.size.judgeFont.x,
      screenPlayInit.skindata.size.judgeFont.y);

    game.load.spritesheet(
      'judgeMiss', PATH.skinPath('default') + 'judgeMiss.png',
      screenPlayInit.skindata.size.judgeFont.x,
      screenPlayInit.skindata.size.judgeFont.y);

    game.load.spritesheet(
      'judgeFail', PATH.skinPath('default') + 'judgeFail.png',
      screenPlayInit.skindata.size.judgeFont.x,
      screenPlayInit.skindata.size.judgeFont.y);

  },
  create: function(){
    // Add touch area
    this.area.button1 = screenPlayInit.skindata.button1.area;
    this.area.button2 = screenPlayInit.skindata.button2.area;
    this.area.button3 = screenPlayInit.skindata.button3.area;
    this.area.button4 = screenPlayInit.skindata.button4.area;
    this.area.buttonL = screenPlayInit.skindata.buttonL.area;
    this.area.buttonR = screenPlayInit.skindata.buttonR.area;
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

    this.img.judgeFont = game.add.sprite(
      screenPlayInit.skindata.judgeFont.pos.x,
      screenPlayInit.skindata.judgeFont.pos.y,
      'judgeFail',
      0);

    this.img.screen = game.add.sprite(
      screenPlayInit.skindata.screen.pos.x,
      screenPlayInit.skindata.screen.pos.y,
      'screen');



    // Set Text
    this.text.genre = game.add.bitmapText(
      110, 52, 'font57', screenPlayInit.stagedata.genre, 7);
    this.text.title = game.add.bitmapText(
      110, 60, 'font57', screenPlayInit.stagedata.title, 7);
    this.text.pattern_and_level = game.add.bitmapText(
      110, 68, 'font57',
      'LV.'+screenPlayInit.stagedata.songLevel+' '+screenPlayInit.stagedata.pattern, 7);

    this.text.score = game.add.bitmapText(
      100, 162, 'font57', 'SCORE:  0000000', 7);
    this.text.maxcombo = game.add.bitmapText(
      100, 172, 'font57', 'MAX COMBO: 0000', 7);
    this.text.speed = game.add.bitmapText(
      170, 172, 'font57', 'SPEED: 4.00x', 7);

    // Play Song

    // Set Timer
    this.text.beatstamp = game.add.bitmapText(0, 170, 'font57', 0, 7);
    this.text.justPressed = game.add.bitmapText(0, 162, 'font57', '', 7);
    RGtimer.start();
  },

  update: function() {
    if(this.flag.songStarted===0){
      if(RGtimer.getMsec()>3000){
        this.text.genre.destroy();
        this.text.title.destroy();
        this.text.pattern_and_level.destroy();
        RGtimer.start(screenPlayInit.stagedata.tempo);
        this.flag.songStarted++;
      }
    }
    else{
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
    }
    // Touch isOn Check
    var pIsOn = function (p, a) { // p is pointer, a is area
      var ret;
      if(a.shape == 'rectangle')
        ret = (p.x > a.x1 && p.x < a.x2 && p.y > a.y1 && p.y < a.y2);
      else if(a.shape == 'circle')
        ret = Math.pow(a.ox-p.x, 2)+Math.pow(a.oy-p.y, 2) < Math.pow(a.r, 2);
      else
        return 0;
      return ret;
    };
    // All input isDown Check
    var bIsDown = function (pad, key, area) {
      var ret =
        game.input.gamepad.pad1.isDown(pad) ||
        game.input.keyboard.isDown(key)     ||
        (pIsOn(RGinput.touch.mo, area) && RGinput.touch.mo.isDown)||
        (pIsOn(RGinput.touch.t1, area) && RGinput.touch.t1.isDown)||
        (pIsOn(RGinput.touch.t2, area) && RGinput.touch.t2.isDown)||
        (pIsOn(RGinput.touch.t3, area) && RGinput.touch.t3.isDown)||
        (pIsOn(RGinput.touch.t4, area) && RGinput.touch.t4.isDown)||
        (pIsOn(RGinput.touch.t5, area) && RGinput.touch.t5.isDown)||
        (pIsOn(RGinput.touch.t6, area) && RGinput.touch.t6.isDown);
      return ret;
    };

    // All input justPressed Check
    var bJustPressed = function (pad, key, area) {
      var ret=
        game.input.gamepad.pad1.justPressed(pad, 50) ||
        game.input.keyboard.justPressed(key, 50)     ||
        (pIsOn(RGinput.touch.mo, area) && RGinput.touch.mo.justPressed(50))||
        (pIsOn(RGinput.touch.t1, area) && RGinput.touch.t1.justPressed(50))||
        (pIsOn(RGinput.touch.t2, area) && RGinput.touch.t2.justPressed(50))||
        (pIsOn(RGinput.touch.t3, area) && RGinput.touch.t3.justPressed(50))||
        (pIsOn(RGinput.touch.t4, area) && RGinput.touch.t4.justPressed(50))||
        (pIsOn(RGinput.touch.t5, area) && RGinput.touch.t5.justPressed(50))||
        (pIsOn(RGinput.touch.t6, area) && RGinput.touch.t6.justPressed(50));
      return ret;
    };

    // Check justPressed
    if (bJustPressed(RGinput.stage.pad1, RGinput.stage.key1, this.area.button1)){
      this.text.justPressed.setText('justPressed(1)');
    }
    else if (bJustPressed(RGinput.stage.pad2, RGinput.stage.key2, this.area.button2)){
      this.text.justPressed.setText('justPressed(2)');
    }
    else if (bJustPressed(RGinput.stage.pad3, RGinput.stage.key3, this.area.button3)){
      this.text.justPressed.setText('justPressed(3)');
    }
    else if (bJustPressed(RGinput.stage.pad4, RGinput.stage.key4, this.area.button4)){
      this.text.justPressed.setText('justPressed(4)');
    }
    else if (bJustPressed(RGinput.stage.padL, RGinput.stage.keyL, this.area.buttonL)){
      this.text.justPressed.setText('justPressed(L)');
    }
    else if (bJustPressed(RGinput.stage.padR, RGinput.stage.keyR, this.area.buttonR)){
      this.text.justPressed.setText('justPressed(R)');
    }
    else if (bJustPressed(RGinput.stage.padS, RGinput.stage.keyS, this.area.buttonS)){
      this.text.justPressed.setText('justPressed(S)');
    }
    else
      this.text.justPressed.setText('');


    // Button Graphic Update
    if (bIsDown(RGinput.stage.pad1, RGinput.stage.key1, this.area.button1)){
      this.img.button1.frame=screenPlayInit.skindata.button1.sprite.pressed;
      this.img.line1.frame=screenPlayInit.skindata.line1.sprite.pressed;
    }
    else{
      this.img.button1.frame=screenPlayInit.skindata.button1.sprite.default;
      this.img.line1.frame=screenPlayInit.skindata.line1.sprite.default;
    }

    if (bIsDown(RGinput.stage.pad2, RGinput.stage.key2, this.area.button2)){
      this.img.button2.frame=screenPlayInit.skindata.button2.sprite.pressed;
      this.img.line2.frame=screenPlayInit.skindata.line2.sprite.pressed;
    }
    else{
      this.img.button2.frame=screenPlayInit.skindata.button2.sprite.default;
      this.img.line2.frame=screenPlayInit.skindata.line2.sprite.default;
    }

    if (bIsDown(RGinput.stage.pad3, RGinput.stage.key3, this.area.button3)){
      this.img.button3.frame=screenPlayInit.skindata.button3.sprite.pressed;
      this.img.line3.frame=screenPlayInit.skindata.line3.sprite.pressed;
    }
    else{
      this.img.button3.frame=screenPlayInit.skindata.button3.sprite.default;
      this.img.line3.frame=screenPlayInit.skindata.line3.sprite.default;
    }

    if (bIsDown(RGinput.stage.pad4, RGinput.stage.key4, this.area.button4)){
      this.img.button4.frame=screenPlayInit.skindata.button4.sprite.pressed;
      this.img.line4.frame=screenPlayInit.skindata.line4.sprite.pressed;
    }
    else{
      this.img.button4.frame=screenPlayInit.skindata.button4.sprite.default;
      this.img.line4.frame=screenPlayInit.skindata.line4.sprite.default;
    }

    if (bIsDown(RGinput.stage.padL, RGinput.stage.keyL, this.area.buttonL)){
      this.img.buttonL.frame=screenPlayInit.skindata.buttonL.sprite.pressed;
      this.img.lineL.frame=screenPlayInit.skindata.lineL.sprite.pressed;
    }
    else{
      this.img.buttonL.frame=screenPlayInit.skindata.buttonL.sprite.default;
      this.img.lineL.frame=screenPlayInit.skindata.lineL.sprite.default;
    }

    if (bIsDown(RGinput.stage.padR, RGinput.stage.keyR, this.area.buttonR)){
      this.img.buttonR.frame=screenPlayInit.skindata.buttonR.sprite.pressed;
      this.img.lineR.frame=screenPlayInit.skindata.lineR.sprite.pressed;
    }
    else{
      this.img.buttonR.frame=screenPlayInit.skindata.buttonR.sprite.default;
      this.img.lineR.frame=screenPlayInit.skindata.lineR.sprite.default;
    }

    if (bIsDown(RGinput.stage.padS, RGinput.stage.keyS, this.area.buttonS)){
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

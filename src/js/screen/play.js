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

  buttonState:{
    isDown:[],
    justPressed:[]
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

  // ObjectList
  object: "",
  objimg: [ [], [], [], [], [], [] ],

  // Timer
  waitTimer: new RGtimer(),
  songTimer: new RGtimer(),

  preload: function(){
    // Load Image
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

    // Create ObjectImage
    this.object = screenPlayInit.stagedata.object;
    var createObjImg = function(line){
      var initY = -screenPlayInit.skindata.size.judgeLine;
      var Type = RGobjectType;
      var objline = screenPlay.object[line];
      var linePos = screenPlayInit.skindata.linePos[line];
      var note;
      switch(line){
      case 0:
      case 3:
        note = {
          sprite: 'noteCircle',
          frame: { single: 1, end: 4, mid: 7, start: 10 }
        };
      break;
      case 1:
      case 2:
        note = {
          sprite: 'noteCircle',
          frame: { single: 2, end: 5, mid: 8, start: 11 }
        };
      break;
      case 4:
      case 5:
        note = {
          sprite: 'noteTrigger',
          frame: { single: 1, end: 3, mid: 5, start: 7 }
        };
      break;
      }

      for(var i=0; objline[i].type!=Type.endofline; i++){
      if(objline[i].type!==Type.longMid){
        if(objline[i].type===Type.long)
          screenPlay.objimg[line].push({start: "", mid: "", end:""});
        else
          screenPlay.objimg[line].push({start: ""});
        switch(objline[i].type){
        case Type.single:
          screenPlay.objimg[line][i].start = game.add.sprite(linePos, initY,
            note.sprite, note.frame.single);
          break;
        case Type.long:
          screenPlay.objimg[line][i].start = game.add.sprite(linePos, initY,
            note.sprite, note.frame.start);
          screenPlay.objimg[line][i].mid = game.add.sprite(linePos, initY,
            note.sprite, note.frame.mid);
          screenPlay.objimg[line][i].end = game.add.sprite(linePos, initY,
            note.sprite, note.frame.end);
          break;
        }
      }
      }
    };
    createObjImg(5);
    createObjImg(4);
    createObjImg(3);
    createObjImg(2);
    createObjImg(1);
    createObjImg(0);

    // Set Text & ScreenUI
    this.img.judgeFont = game.add.sprite(
      screenPlayInit.skindata.judgeFont.pos.x,
      screenPlayInit.skindata.judgeFont.pos.y,
      'judgeFail',
      0);

    this.img.screen = game.add.sprite(
      screenPlayInit.skindata.screen.pos.x,
      screenPlayInit.skindata.screen.pos.y,
      'screen');


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
    this.songTimer.init();
    this.waitTimer.start();
  },

  update: function() {

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
    var bIsDown = function(button) {
      var pad;
      var key;
      var area;
      switch(button) {
        case 0:
        case "1":
          pad = RGinput.stage.pad1;
          key = RGinput.stage.key1;
          area = screenPlay.area.button1;
          break;
        case 1:
        case "2":
          pad = RGinput.stage.pad2;
          key = RGinput.stage.key2;
          area = screenPlay.area.button2;
          break;
        case 2:
        case "3":
          pad = RGinput.stage.pad3;
          key = RGinput.stage.key3;
          area = screenPlay.area.button3;
          break;
        case 3:
        case "4":
          pad = RGinput.stage.pad4;
          key = RGinput.stage.key4;
          area = screenPlay.area.button4;
          break;
        case 4:
        case "L":
          pad = RGinput.stage.padL;
          key = RGinput.stage.keyL;
          area = screenPlay.area.buttonL;
          break;
        case 5:
        case "R":
          pad = RGinput.stage.padR;
          key = RGinput.stage.keyR;
          area = screenPlay.area.buttonR;
          break;
        case 6:
        case "S":
          pad = RGinput.stage.padS;
          key = RGinput.stage.keyS;
          area = screenPlay.area.buttonS;
          break;
      }
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
    var bJustPressed = function (button) {
      var pad;
      var key;
      var area;
      switch(button) {
      case 0:
      case "1":
        pad = RGinput.stage.pad1;
        key = RGinput.stage.key1;
        area = screenPlay.area.button1;
        break;
      case 1:
      case "2":
        pad = RGinput.stage.pad2;
        key = RGinput.stage.key2;
        area = screenPlay.area.button2;
        break;
      case 2:
      case "3":
        pad = RGinput.stage.pad3;
        key = RGinput.stage.key3;
        area = screenPlay.area.button3;
        break;
      case 3:
      case "4":
        pad = RGinput.stage.pad4;
        key = RGinput.stage.key4;
        area = screenPlay.area.button4;
        break;
      case 4:
      case "L":
        pad = RGinput.stage.padL;
        key = RGinput.stage.keyL;
        area = screenPlay.area.buttonL;
        break;
      case 5:
      case "R":
        pad = RGinput.stage.padR;
        key = RGinput.stage.keyR;
        area = screenPlay.area.buttonR;
        break;
      case 6:
      case "S":
        pad = RGinput.stage.padS;
        key = RGinput.stage.keyS;
        area = screenPlay.area.buttonS;
        break;
      }
      var ret=
        game.input.gamepad.pad1.justPressed(pad) ||
        game.input.keyboard.justPressed(key)     ||
        (pIsOn(RGinput.touch.mo, area) && RGinput.touch.mo.justPressed(JUST_TIME))||
        (pIsOn(RGinput.touch.t1, area) && RGinput.touch.t1.justPressed(JUST_TIME))||
        (pIsOn(RGinput.touch.t2, area) && RGinput.touch.t2.justPressed(JUST_TIME))||
        (pIsOn(RGinput.touch.t3, area) && RGinput.touch.t3.justPressed(JUST_TIME))||
        (pIsOn(RGinput.touch.t4, area) && RGinput.touch.t4.justPressed(JUST_TIME))||
        (pIsOn(RGinput.touch.t5, area) && RGinput.touch.t5.justPressed(JUST_TIME))||
        (pIsOn(RGinput.touch.t6, area) && RGinput.touch.t6.justPressed(JUST_TIME));
      return ret;
    };

    // Wait for 3sec
    if(this.flag.songStarted===0){
      // Get Ready? & Start
      if(this.waitTimer.getMsec()>3000){
        this.text.genre.destroy();
        this.text.title.destroy();
        this.text.pattern_and_level.destroy();
        this.waitTimer.init();
        this.songTimer.start(screenPlayInit.stagedata.tempo);
        this.flag.songStarted++;
      }
    }
    // Update Timer
    this.var.elapsed_time = this.songTimer.getMsec();
    this.var.elapsed_beat = this.songTimer.getMbeat();
    this.text.beatstamp.setText(this.var.elapsed_beat);

    // song is end?
    if(this.var.elapsed_time > screenPlayInit.stagedata.songLength*1000) {
      this.goToResult();
    }

    // Update Text
    this.text.score.setText('SCORE:  ' + SomeMath.pad0(this.var.score, 7));
    this.text.maxcombo.setText('MAX COMBO: ' + SomeMath.pad0(this.var.maxcombo, 4));
    this.text.speed.setText('SPEED: ' + Number(this.var.speed/100).toFixed(2) + 'x');

    // Update objimg position
    var updateObj = function(line){
      var Type = RGobjectType;
      var objline = screenPlay.object[line];
      var time = screenPlay.var.elapsed_beat;

      var getPos = screenPlay.getObjectImgPos;
      var lineHeight = screenPlayInit.skindata.judgeLine.pos.y;
      var noteHeight = screenPlayInit.skindata.size.noteCircle.y;
      var speed = screenPlay.var.speed;
      for(var i=0; objline[i].type!=Type.endofline; i++){
      if(objline[i].type!==Type.longMiddle){
        switch(objline[i].type){
        case Type.single:
          screenPlay.objimg[line][i].start.y =
            getPos(lineHeight, speed, time, objline[i].start) + lineHeight;
          break;
        case Type.long:
          screenPlay.objimg[line][i].start.y =
            getPos(lineHeight, speed, time, objline[i].start) + lineHeight;
          screenPlay.objimg[line][i].end.y =
            getPos(lineHeight, speed, time, objline[i].end) + lineHeight;
          screenPlay.objimg[line][i].mid.y =
            getPos(lineHeight, speed, time, objline[i].end) + lineHeight + noteHeight;
          screenPlay.objimg[line][i].mid.height =
              screenPlay.objimg[line][i].start.y -
              screenPlay.objimg[line][i].mid.y;
          break;
        }
      }
      }
    };
    updateObj(5);
    updateObj(4);
    updateObj(3);
    updateObj(2);
    updateObj(1);
    updateObj(0);

    // Check Object Fail
    var checkSingleFail = function(line){
      var judgeTime = screenPlayInit.stagedata.judgeTime;
      var Type = RGobjectType;
      var objline = screenPlay.object[line];
      var time = screenPlay.var.elapsed_beat;
      var ret = false;
      for(var i=0; objline[i].type!==Type.endofline; i++){
        if(objline[i].state!==Type.destroyed){
          if(time > objline[i].start + judgeTime.fail){
            screenPlay.object[line][i].state=Type.destroyed;
            console.log('time:' +time+'/ object['+line+']['+i+'] fail');
            return true;
          }
        }
      }
      return ret;
    };

    // Check Single Object Hit
    var checkSingleHit = function(line){
      var judgeTime = screenPlayInit.stagedata.judgeTime;
      var Type = RGobjectType;
      var objline = screenPlay.object[line];
      var time = screenPlay.var.elapsed_beat;
      var ret = false;
      for(var i=0; objline[i].type!==Type.endofline; i++){
        if((objline[i].type!==Type.longMid) &&
           (objline[i].state!==Type.destroyed)){
        if(bJustPressed(line)){
          if((time > objline[i].start - judgeTime.perfect) &&
             (time < objline[i].start + judgeTime.perfect)){
            screenPlay.object[line][i].state=Type.destroyed;
            ret = 'perfect';
            console.log('time:' +time+' / object['+line+']['+i+']: '+objline[i].start+' / '+ret);
          }
          else if((time > objline[i].start - judgeTime.great) &&
                  (time < objline[i].start + judgeTime.great)){
            screenPlay.object[line][i].state=Type.destroyed;
            ret = 'great';
            console.log('time:' +time+' / object['+line+']['+i+']: '+objline[i].start+' / '+ret);
          }
          else if((time > objline[i].start - judgeTime.good) &&
                  (time < objline[i].start + judgeTime.good)){
            screenPlay.object[line][i].state=Type.destroyed;
            ret = 'good';
            console.log('time:' +time+' / object['+line+']['+i+']: '+objline[i].start+' / '+ret);
          }
          else if((time > objline[i].start - judgeTime.bad) &&
                  (time < objline[i].start + judgeTime.bad)){
            screenPlay.object[line][i].state=Type.destroyed;
            ret = 'bad';
            console.log('time:' +time+' / object['+line+']['+i+']: '+objline[i].start+' / '+ret);
          }
        }
        }
      }
      return ret;
    };
    var checkLongHit = function(line){

    };
    checkSingleFail(0);
    checkSingleFail(1);
    checkSingleFail(2);
    checkSingleFail(3);
    checkSingleFail(4);
    checkSingleFail(5);
    checkSingleHit(0);
    checkSingleHit(1);
    checkSingleHit(2);
    checkSingleHit(3);
    checkSingleHit(4);
    checkSingleHit(5);

    // justPressedCheck
    if (bJustPressed(0)){
      this.text.justPressed.setText('bJustPressed("1")');
    }
    else if (bJustPressed(1)){
      this.text.justPressed.setText('bJustPressed("2")');
    }
    else if (bJustPressed(2)){
      this.text.justPressed.setText('bJustPressed("3")');
    }
    else if (bJustPressed(3)){
      this.text.justPressed.setText('bJustPressed("4")');
    }
    else if (bJustPressed(4)){
      this.text.justPressed.setText('bJustPressed("L")');
    }
    else if (bJustPressed(5)){
      this.text.justPressed.setText('bJustPressed("R")');
    }
    else if (bJustPressed(6)){
      this.text.justPressed.setText('bJustPressed("S")');
    }
    else
      this.text.justPressed.setText('');

    // isDownCheck
    if (bIsDown(0)){
      this.img.button1.frame=screenPlayInit.skindata.button1.sprite.pressed;
      this.img.line1.frame=screenPlayInit.skindata.line1.sprite.pressed;
    }
    else{
      this.img.button1.frame=screenPlayInit.skindata.button1.sprite.default;
      this.img.line1.frame=screenPlayInit.skindata.line1.sprite.default;
    }

    if (bIsDown(1)){
      this.img.button2.frame=screenPlayInit.skindata.button2.sprite.pressed;
      this.img.line2.frame=screenPlayInit.skindata.line2.sprite.pressed;
    }
    else{
      this.img.button2.frame=screenPlayInit.skindata.button2.sprite.default;
      this.img.line2.frame=screenPlayInit.skindata.line2.sprite.default;
    }

    if (bIsDown(2)){
      this.img.button3.frame=screenPlayInit.skindata.button3.sprite.pressed;
      this.img.line3.frame=screenPlayInit.skindata.line3.sprite.pressed;
    }
    else{
      this.img.button3.frame=screenPlayInit.skindata.button3.sprite.default;
      this.img.line3.frame=screenPlayInit.skindata.line3.sprite.default;
    }

    if (bIsDown(3)){
      this.img.button4.frame=screenPlayInit.skindata.button4.sprite.pressed;
      this.img.line4.frame=screenPlayInit.skindata.line4.sprite.pressed;
    }
    else{
      this.img.button4.frame=screenPlayInit.skindata.button4.sprite.default;
      this.img.line4.frame=screenPlayInit.skindata.line4.sprite.default;
    }

    if (bIsDown(4)){
      this.img.buttonL.frame=screenPlayInit.skindata.buttonL.sprite.pressed;
      this.img.lineL.frame=screenPlayInit.skindata.lineL.sprite.pressed;
    }
    else{
      this.img.buttonL.frame=screenPlayInit.skindata.buttonL.sprite.default;
      this.img.lineL.frame=screenPlayInit.skindata.lineL.sprite.default;
    }

    if (bIsDown(5)){
      this.img.buttonR.frame=screenPlayInit.skindata.buttonR.sprite.pressed;
      this.img.lineR.frame=screenPlayInit.skindata.lineR.sprite.pressed;
    }
    else{
      this.img.buttonR.frame=screenPlayInit.skindata.buttonR.sprite.default;
      this.img.lineR.frame=screenPlayInit.skindata.lineR.sprite.default;
    }

    if (bIsDown(6)){
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

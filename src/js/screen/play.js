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
    effect:["","","","","",""]
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
    beatFrame: function(){
      return SomeMath.modulo(this.elapsed_beat, 1000);
    },

    // Score & Judge
    combo: {
      value: 0,
      max: 0,
      timer: 0,
      updateMax: function(){
        this.max = (this.value>this.max) ? this.value:this.max;
      },
      getPosX: function(){
        if(this.value<10)
          return 153;
        else if(this.value<100)
          return 146;
        else if(this.value<1000)
          return 139;
        else if(this.value<10000)
          return 132;
        else if(this.value<100000)
          return 125;
        else
          return 118;
      },
      getPosY: function(){
        switch(this.timer){
        case 0:
          return 28;
        case 1:
          return 32;
        case 2:
          return 35;
        case 3:
          return 38;
        case 4:
          return 40;
        default:
          return 41;
        }
      },
      timeAdd: function(){
        this.timer++;
      },
      timeReset: function(){
        this.timer=0;
      },
      isVisible: function(){
        return (this.timer<120) && (this.value>=5);
      },
      add: function(){
        this.value++;
        this.timeReset();
      },
      reset: function(){
        this.value=0;
        this.timeReset();
      }
    },
    score: {
      judgeData: { fail:0, bad:0, miss:0, good:0, great:0, perfect:0 },
      value: 0,
      advanced: 0,
      add: function(judge){
        var Score = RGjudgeScore;
        switch(judge){
        case 'fail':
          this.judgeData.fail++;
          this.value+=Score.fail;
          break;
        case 'bad':
          this.judgeData.bad++;
          this.value+=Score.bad;
          break;
        case 'miss':
          this.judgeData.miss++;
          this.value+=Score.miss;
          break;
        case 'good':
          this.judgeData.good++;
          this.value+=Score.good;
          break;
        case 'great':
          this.judgeData.great++;
          this.value+=Score.great;
          break;
        case 'perfect':
          this.judgeData.perfect++;
          this.value+=Score.perfect;
          this.advanced+=Score.advanced;
          break;
        }
      },
      isAllPerfect: function(){
        return this.judgeData.fail===0 && this.judgeData.bad===0 && this.judgeData.good===0 && this.judgeData.great===0;
      },
      isAllGreat: function(){
        return this.judgeData.fail===0 && this.judgeData.bad===0 && this.judgeData.good===0;
      },
      isAllCombo: function(){
        return this.judgeData.fail===0 && this.judgeData.bad===0;
      }
    },

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

    game.load.spritesheet(
      'effectCirclePerfect', PATH.skinPath('default')+ 'effectCirclePerfect.png',
      screenPlayInit.skindata.size.effectCircle.x,
      screenPlayInit.skindata.size.effectCircle.y);
    game.load.spritesheet(
      'effectCircleGreat', PATH.skinPath('default')+ 'effectCircleGreat.png',
      screenPlayInit.skindata.size.effectCircle.x,
      screenPlayInit.skindata.size.effectCircle.y);
    game.load.spritesheet(
      'effectCircleGood', PATH.skinPath('default')+ 'effectCircleGood.png',
      screenPlayInit.skindata.size.effectCircle.x,
      screenPlayInit.skindata.size.effectCircle.y);

    game.load.spritesheet(
      'effectTriggerPerfect', PATH.skinPath('default')+ 'effectTriggerPerfect.png',
      screenPlayInit.skindata.size.effectTrigger.x,
      screenPlayInit.skindata.size.effectTrigger.y);
    game.load.spritesheet(
      'effectTriggerGreat', PATH.skinPath('default')+ 'effectTriggerGreat.png',
      screenPlayInit.skindata.size.effectTrigger.x,
      screenPlayInit.skindata.size.effectTrigger.y);
    game.load.spritesheet(
      'effectTriggerGood', PATH.skinPath('default')+ 'effectTriggerGood.png',
      screenPlayInit.skindata.size.effectTrigger.x,
      screenPlayInit.skindata.size.effectTrigger.y);

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

    // Set Text & Effect
    this.img.judgeFont = game.add.sprite(
      screenPlayInit.skindata.judgeFont.pos.x,
      screenPlayInit.skindata.judgeFont.pos.y,
      'judgeFail',
      0);

    this.img.judgeFont.animations.add('judgeEffect');

    this.img.screen = game.add.sprite(
      screenPlayInit.skindata.screen.pos.x,
      screenPlayInit.skindata.screen.pos.y,
      'screen');

    this.img.effect[0] = game.add.sprite(
      screenPlayInit.skindata.effect1.pos.x,
      screenPlayInit.skindata.effect1.pos.y,
      'effectCirclePerfect');
    this.img.effect[1] = game.add.sprite(
      screenPlayInit.skindata.effect2.pos.x,
      screenPlayInit.skindata.effect2.pos.y,
      'effectCirclePerfect');
    this.img.effect[2] = game.add.sprite(
      screenPlayInit.skindata.effect3.pos.x,
      screenPlayInit.skindata.effect3.pos.y,
      'effectCirclePerfect');
    this.img.effect[3] = game.add.sprite(
      screenPlayInit.skindata.effect4.pos.x,
      screenPlayInit.skindata.effect4.pos.y,
      'effectCirclePerfect');
    this.img.effect[4] = game.add.sprite(
      screenPlayInit.skindata.effectL.pos.x,
      screenPlayInit.skindata.effectL.pos.y,
      'effectTriggerPerfect');
    this.img.effect[5] = game.add.sprite(
      screenPlayInit.skindata.effectR.pos.x,
      screenPlayInit.skindata.effectR.pos.y,
      'effectTriggerPerfect');

    this.img.effect[0].animations.add('effect');
    this.img.effect[1].animations.add('effect');
    this.img.effect[2].animations.add('effect');
    this.img.effect[3].animations.add('effect');
    this.img.effect[4].animations.add('effect');
    this.img.effect[5].animations.add('effect');


    this.text.genre = game.add.bitmapText(
      110, 52, 'font57', screenPlayInit.stagedata.genre, 7);
    this.text.title = game.add.bitmapText(
      110, 60, 'font57', screenPlayInit.stagedata.title, 7);
    this.text.pattern_and_level = game.add.bitmapText(
      110, 68, 'font57',
      'LV.'+screenPlayInit.stagedata.songLevel+' '+screenPlayInit.stagedata.pattern, 7);

    this.text.combo = game.add.bitmapText(
      148, 33, 'font57', '', 7);
    this.text.comboCount = game.add.bitmapText(
      125, 41, 'font79', '', 18);


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

    // Save current InputState
    var isDownState = [];
    var justPressedState = [];
    for(i=0; i<7; i++) {
      isDownState.push(bIsDown(i));
      justPressedState.push(bJustPressed(i));
    }

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

    // Update objimg position
    var updateObj = function(line){
      var Type = RGobjectType;
      var State = RGobjectState;
      var objline = screenPlay.object[line];
      var time = screenPlay.var.elapsed_beat;

      var getPos = screenPlay.getObjectImgPos;
      var lineHeight = screenPlayInit.skindata.judgeLine.pos.y;
      var noteHeight = screenPlayInit.skindata.size.noteCircle.y;
      var speed = screenPlay.var.speed;
      for(var i=0; objline[i].type!=Type.endofline; i++){
      if(objline[i].type!==Type.longMid){
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
      if(objline[i].state===State.destroyed &&
         objline[i].type===Type.single){
        screenPlay.objimg[line][i].start.destroy();
      }
      }
    };
    for(var i=5; i>=0; i--){
      updateObj(i);
    }

    // Check Object Fail
    var checkSingleFail = function(line){
      var judgeTime = screenPlayInit.stagedata.judgeTime;
      var Type = RGobjectType;
      var State = RGobjectState;
      var Judge = RGobjectJudge;
      var objline = screenPlay.object[line];
      var time = screenPlay.var.elapsed_beat;
      var ret = false;
      for(var i=0; objline[i].type!==Type.endofline; i++){
        if(objline[i].state!==State.destroyed && objline[i].type!==Type.longMid){
          if(time > objline[i].start + judgeTime.fail){
            screenPlay.object[line][i].state=State.destroyed;
            screenPlay.object[line][i].judge=Judge.fail;
            ret = 'fail';
          }
        }
      }
      if(ret=='fail'){
        screenPlay.var.combo.reset();
        screenPlay.var.score.add('fail');
        //console.log('time:' +time+'/ object['+line+']['+i+'] fail');
      }
      return ret;
    };

    // Check Single Object Hit
    var checkSingleHit = function(line){
      var judgeTime = screenPlayInit.stagedata.judgeTime;
      var Type = RGobjectType;
      var State = RGobjectState;
      var Judge = RGobjectJudge;
      var objline = screenPlay.object[line];
      var time = screenPlay.var.elapsed_beat;
      var ret = false;
      for(var i=0; objline[i].type!==Type.endofline; i++){
        if((objline[i].type!==Type.longMid) &&
           (objline[i].state!==State.destroyed)){
        if(justPressedState[line]){
          if((time > objline[i].start - judgeTime.perfect) &&
             (time < objline[i].start + judgeTime.perfect)){
            screenPlay.object[line][i].state=State.destroyed;
            screenPlay.object[line][i].judge=Judge.perfect;
            ret = 'perfect';
          }
          else if((time > objline[i].start - judgeTime.great) &&
                  (time < objline[i].start + judgeTime.great)){
            screenPlay.object[line][i].state=State.destroyed;
            screenPlay.object[line][i].judge=Judge.great;
            ret = 'great';
          }
          else if((time > objline[i].start - judgeTime.good) &&
                  (time < objline[i].start + judgeTime.good)){
            screenPlay.object[line][i].state=State.destroyed;
            screenPlay.object[line][i].judge=Judge.good;
            ret = 'good';
          }
          else if((time > objline[i].start - judgeTime.bad) &&
                  (time < objline[i].start + judgeTime.bad)){
            screenPlay.object[line][i].state=State.destroyed;
            screenPlay.object[line][i].judge=Judge.bad;
            ret = 'bad';
          }
        }
        }
      }
      switch(ret){
      case 'perfect':
        screenPlay.var.combo.add();
        screenPlay.var.score.add('perfect');
        if(line>=4)
          screenPlay.img.effect[line].loadTexture('effectTriggerPerfect');
        else
          screenPlay.img.effect[line].loadTexture('effectCirclePerfect');
        break;
      case 'great':
        screenPlay.var.combo.add();
        screenPlay.var.score.add('great');
        if(line>=4)
          screenPlay.img.effect[line].loadTexture('effectTriggerGreat');
        else
          screenPlay.img.effect[line].loadTexture('effectCircleGreat');
        break;
      case 'good':
        screenPlay.var.combo.add();
        screenPlay.var.score.add('good');
        if(line>=4)
          screenPlay.img.effect[line].loadTexture('effectTriggerGood');
        else
          screenPlay.img.effect[line].loadTexture('effectCircleGood');
        break;
      case 'bad':
        screenPlay.var.combo.reset();
        screenPlay.var.score.add('bad');
        break;
      }
      if(ret!==false){
        screenPlay.img.effect[line].animations.play('effect', 120, false);
        //console.log('time:' +time+' / object['+line+']['+i+']: '+objline[i].start+' / '+ret);
      }
      return ret;
    };

    // Check Long Object
    var checkLongHit = function(line){
      var judgeTime = screenPlayInit.stagedata.judgeTime;
      var Type = RGobjectType;
      var State = RGobjectState;
      var Judge = RGobjectJudge;
      var objline = screenPlay.object[line];
      var time = screenPlay.var.elapsed_beat;
      var ret = false;
      for(var i=0; objline[i].type!==Type.endofline; i++){
        if(objline[i].state!==State.destroyed &&
           objline[i].type===Type.longMid){
          if(time > objline[i].start){
            if(isDownState[line]){
              if(objline[i-1].judge>=Judge.great){
                screenPlay.object[line][i].judge=Judge.perfect;
                ret = 'perfect';
              }
              else if(objline[i-1].judge<Judge.great){
                screenPlay.object[line][i].judge=Judge.good;
                ret = 'good';
              }
            }
            else{
              screenPlay.object[line][i].judge=Judge.fail;
              ret = 'fail';
            }
            screenPlay.object[line][i].state=State.destroyed;
          }
        }
      }
      switch(ret){
      case 'perfect':
        screenPlay.var.combo.add();
        screenPlay.var.score.add('perfect');
        if(line>=4)
          screenPlay.img.effect[line].loadTexture('effectTriggerPerfect');
        else
          screenPlay.img.effect[line].loadTexture('effectCirclePerfect');
        break;
      case 'good':
        screenPlay.var.combo.add();
        screenPlay.var.score.add('good');
        if(line>=4)
          screenPlay.img.effect[line].loadTexture('effectTriggerGood');
        else
          screenPlay.img.effect[line].loadTexture('effectCircleGood');
        break;
      case 'fail':
        screenPlay.var.combo.reset();
        screenPlay.var.score.add('fail');
        break;
      }
      if(ret!==false){
        screenPlay.img.effect[line].animations.play('effect', 120, false);
        //console.log('time:' +time+'/ object['+line+']['+i+'] '+ret);
      }
      return ret;
    };

    // Check Miss
    var checkMiss = function(line) {
      var judgeTime = screenPlayInit.stagedata.judgeTime;
      var Type = RGobjectType;
      var State = RGobjectState;
      var Judge = RGobjectJudge;
      var objline;
      var time = screenPlay.var.elapsed_beat;
      var ret = false;
      for(var j=0; j<6; j++){
        if(j==line) continue;
        objline = screenPlay.object[j];
        if(justPressedState[line]){
          for(var i=0; objline[i].type!==Type.endofline; i++){
            if(objline[i].state!==State.destroyed &&
               objline[i].type!==Type.longMid){
              if((time > objline[i].start - judgeTime.miss) &&
                 (time < objline[i].start + judgeTime.miss)){
                ret = 'miss';
              }
            }
          }
        }
      }
      if(ret!==false){
        screenPlay.var.score.add('miss');
        //console.log('time:' +time+' / line'+line+' miss');
      }
      return ret;
    };


    // Judge Effect Animation
    var decideJudgeEffect = function(){
      var Weight={perfect:1, great:2, miss:3, good:4, bad:5, fail:6};
      var judge;
      var ret=0;
      for(var i=5; i>=0; i--){
        judge = checkSingleHit(i);
        if(judge=='perfect')
          ret = (Weight.perfect>ret) ? Weight.perfect:ret;
        if(judge=='great')
          ret = (Weight.great>ret) ? Weight.great:ret;
        if(judge=='good')
          ret = (Weight.good>ret) ? Weight.good:ret;
        if(judge=='bad')
          ret = (Weight.bad>ret) ? Weight.bad:ret;

        judge = checkLongHit(i);
        if(judge=='perfect')
          ret = (Weight.perfect>ret) ? Weight.perfect:ret;
        if(judge=='good')
          ret = (Weight.good>ret) ? Weight.good:ret;

        judge = checkSingleFail(i);
        if(judge=='fail')
          ret = (Weight.fail>ret) ? Weight.fail:ret;

        judge = checkMiss(i);
        if(judge=='miss')
          ret = (Weight.miss>ret) ? Weight.miss:ret;
      }
      return ret;
    };
    switch(decideJudgeEffect()){
    case 6:
      console.log(screenPlay.var.elapsed_beat+' / fail');
      this.img.judgeFont.loadTexture('judgeFail');
      this.img.judgeFont.animations.play('judgeEffect', 120, false);
      break;
    case 5:
      console.log(screenPlay.var.elapsed_beat+' / bad');
      this.img.judgeFont.loadTexture('judgeBad');
      this.img.judgeFont.animations.play('judgeEffect', 120, false);
      break;
    case 4:
      console.log(screenPlay.var.elapsed_beat+' / good');
      this.img.judgeFont.loadTexture('judgeGood');
      this.img.judgeFont.animations.play('judgeEffect', 120, false);
      break;
    case 3:
      console.log(screenPlay.var.elapsed_beat+' / miss');
      this.img.judgeFont.loadTexture('judgeMiss');
      this.img.judgeFont.animations.play('judgeEffect', 120, false);
      break;
    case 2:
      console.log(screenPlay.var.elapsed_beat+' / great');
      this.img.judgeFont.loadTexture('judgeGreat');
      this.img.judgeFont.animations.play('judgeEffect', 120, false);
      break;
    case 1:
      console.log(screenPlay.var.elapsed_beat+' / perfect');
      this.img.judgeFont.loadTexture('judgePerfect');
      this.img.judgeFont.animations.play('judgeEffect', 120, false);
      break;
    }

    // Set position of comfo font
    this.text.comboCount.x = this.var.combo.getPosX();
    this.text.comboCount.y = this.var.combo.getPosY();
    this.text.combo.y = this.var.combo.getPosY()-8;

    // view combo font
    if(this.var.combo.isVisible()) {
      this.text.combo.setText('COMBO');
      this.text.comboCount.setText(this.var.combo.value);
    }
    else{
      this.text.combo.setText('');
      this.text.comboCount.setText('');
    }
    // combo font timer;
    this.var.combo.timeAdd();

    // Get max combo
    this.var.combo.updateMax();

    // Update Text
    this.text.score.setText('SCORE:  ' + SomeMath.pad0(this.var.score.value, 7));
    this.text.maxcombo.setText('MAX COMBO: ' + SomeMath.pad0(this.var.combo.max, 4));
    this.text.speed.setText('SPEED: ' + Number(this.var.speed/100).toFixed(2) + 'x');


    // Check Just Pressed
    if (justPressedState[0]){
      this.text.justPressed.setText('bJustPressed("1")');
    }
    else if (justPressedState[1]){
      this.text.justPressed.setText('bJustPressed("2")');
    }
    else if (justPressedState[2]){
      this.text.justPressed.setText('bJustPressed("3")');
    }
    else if (justPressedState[3]){
      this.text.justPressed.setText('bJustPressed("4")');
    }
    else if (justPressedState[4]){
      this.text.justPressed.setText('bJustPressed("L")');
    }
    else if (justPressedState[5]){
      this.text.justPressed.setText('bJustPressed("R")');
    }
    else if (justPressedState[6]){
      this.text.justPressed.setText('bJustPressed("S")');
    }
    else
      this.text.justPressed.setText('');

    // Check is Down
    if (isDownState[0]){
      this.img.button1.frame=screenPlayInit.skindata.button1.sprite.pressed;
      this.img.line1.frame=screenPlayInit.skindata.line1.sprite.pressed;
    }
    else{
      this.img.button1.frame=screenPlayInit.skindata.button1.sprite.default;
      this.img.line1.frame=screenPlayInit.skindata.line1.sprite.default;
    }

    if (isDownState[1]){
      this.img.button2.frame=screenPlayInit.skindata.button2.sprite.pressed;
      this.img.line2.frame=screenPlayInit.skindata.line2.sprite.pressed;
    }
    else{
      this.img.button2.frame=screenPlayInit.skindata.button2.sprite.default;
      this.img.line2.frame=screenPlayInit.skindata.line2.sprite.default;
    }

    if (isDownState[2]){
      this.img.button3.frame=screenPlayInit.skindata.button3.sprite.pressed;
      this.img.line3.frame=screenPlayInit.skindata.line3.sprite.pressed;
    }
    else{
      this.img.button3.frame=screenPlayInit.skindata.button3.sprite.default;
      this.img.line3.frame=screenPlayInit.skindata.line3.sprite.default;
    }

    if (isDownState[3]){
      this.img.button4.frame=screenPlayInit.skindata.button4.sprite.pressed;
      this.img.line4.frame=screenPlayInit.skindata.line4.sprite.pressed;
    }
    else{
      this.img.button4.frame=screenPlayInit.skindata.button4.sprite.default;
      this.img.line4.frame=screenPlayInit.skindata.line4.sprite.default;
    }

    if (isDownState[4]){
      this.img.buttonL.frame=screenPlayInit.skindata.buttonL.sprite.pressed;
      this.img.lineL.frame=screenPlayInit.skindata.lineL.sprite.pressed;
    }
    else{
      this.img.buttonL.frame=screenPlayInit.skindata.buttonL.sprite.default;
      this.img.lineL.frame=screenPlayInit.skindata.lineL.sprite.default;
    }

    if (isDownState[5]){
      this.img.buttonR.frame=screenPlayInit.skindata.buttonR.sprite.pressed;
      this.img.lineR.frame=screenPlayInit.skindata.lineR.sprite.pressed;
    }
    else{
      this.img.buttonR.frame=screenPlayInit.skindata.buttonR.sprite.default;
      this.img.lineR.frame=screenPlayInit.skindata.lineR.sprite.default;
    }

    if (isDownState[6]){
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

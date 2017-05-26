var screenFreePlay = {
  name: "screenFreePlay",
  uiPath: "",

  string: {
    title: "",
  },

  text: {
    title: "",
    song: []
  },

  img: {
    background: "",
    songselector: "",
    optionbutton: "",
    patternselector: "",
    backspacebutton: "",
    helpbutton: "",
    startbutton: "",
    songimg: ""
  },

  var: {
    selectedSongNum: 0,
    selectedSongName: "",
    selectedPattern: 0,
    allPlaylist: "",
    currentPlaylist: {
      list: [],
      init: function(allPlaylist){
        this.update(allPlaylist, 0);
      },
      update: function(allPlaylist, selected){
        for(var i=0; i<7; i++){
          var j = SomeMath.modulo((i-3 + selected), allPlaylist.max);
          this.list[i] = allPlaylist.list[j];
        }
      }
    }
  },

  preload: function(){

    // Load Images
    this.uiPath = PATH.uiPath(PATH.uiName) + this.name + '/';
    game.load.image('background', this.uiPath+'background.png');
    game.load.image('backspacebutton', this.uiPath+'backspace.png');
    game.load.image('helpbutton', this.uiPath+'help.png');
    game.load.image('option', this.uiPath+'option.png');
    game.load.image('patternselector', this.uiPath+'patternselector.png');
    game.load.image('songselector', this.uiPath+'songselector.png');
    game.load.image('startbutton', this.uiPath+'start.png',110,23);

    for(var i=0; i<screenFreePlayInit.allPlaylist.max; i++){
      game.load.spritesheet(screenFreePlayInit.allPlaylist.list[i].name, PATH.STAGE+'freeplaylist/'+screenFreePlayInit.allPlaylist.list[i].name+'.png', 100, 100);
    }

    // Load BGM
    C2TrackerControl.load(C2Trackers.bgmLoop, 'assets/sound/BGM/bgmSelectAccount.mod');
  },
  create: function(){

    // Play BGM
    C2TrackerControl.play(C2Trackers.bgmLoop);

    // Playlist Init
    this.var.allPlaylist = screenFreePlayInit.allPlaylist;
    this.var.currentPlaylist.init(this.var.allPlaylist);

    // Image Init
    this.img.background = game.add.sprite(0, 0, 'background');
    this.img.songselector= game.add.sprite(10, 90, 'songselector');
    this.img.patternselector = game.add.sprite(150, 135, 'patternselector');
    this.img.songimg = game.add.sprite(150, 30, this.var.allPlaylist.list[0].name, 0);

    this.img.option = game.add.button(
      150, 170, 'option', this.optiontouched, this);
    this.img.backspacebutton = game.add.button(
      10, 10, 'backspacebutton', this.backspacetouched, this);
    this.img.helpbutton = game.add.button(
      295, 10, 'helpbutton', this.helptouched, this);
    this.img.startbutton = game.add.button(
      260, 135, 'startbutton', this.starttouched, this);

    // Text Init
    for(var i=0; i<7; i++){
      this.text.song.push({
        title: "",
        level: "",
        bpm: ""
      });
      this.text.song[i].title = game.add.bitmapText(15, 37+i*20, 'font57', this.var.currentPlaylist.list[i].name, 7);
      this.text.song[i].level = game.add.bitmapText(100, 31+i*20, 'font57', 'LV.' + this.var.currentPlaylist.list[i].level[this.var.selectedPattern], 7);
      this.text.song[i].bpm = game.add.bitmapText(95, 41+i*20, 'font57', 'BPM ' + this.var.currentPlaylist.list[i].tempo, 7);
    }

    this.text.title = game.add.bitmapText(0, 0, 'font79', this.string.title, 9);

  },

  update: function(){
    if (game.input.keyboard.justPressed(Phaser.Keyboard.UP) ||
      game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_UP)){
      this.moveSongSelector('up');
      console.log('up ' + this.var.selectedSongNum);
    }

    if (game.input.keyboard.justPressed(Phaser.Keyboard.DOWN) ||
      game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_DOWN)){
      this.moveSongSelector('down');
      console.log('down ' + this.var.selectedSongNum);
    }

    if (game.input.keyboard.justPressed(Phaser.Keyboard.LEFT) ||
      game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_LEFT)){
      console.log('left');
      this.movePatternSelector('left');
    }

    if (game.input.keyboard.justPressed(Phaser.Keyboard.RIGHT) ||
      game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_RIGHT)){
      console.log('right');
      this.movePatternSelector('right');
    }

    if (game.input.keyboard.justPressed(Phaser.Keyboard.ENTER) ||
      game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_START) ||
      game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_B)){
      console.log('start');
      this.pressstart();
    }
  },

  movePatternSelector: function(selection) {
    switch(selection){
      case 0:
      case 1:
      case 2:
        this.var.selectedPattern = selection;
        break;
      case 'right':
        if(this.var.selectedPattern >= 2){
          this.var.selectedPattern = 0;
        }
        else {
          this.var.selectedPattern++;
        }
        break;
      case 'left':
        if(this.var.selectedPattern <= 0){
          this.var.selectedPattern = 2;
        }
        else {
          this.var.selectedPattern--;
        }
        break;
    }
    this.patternSelectionUpdate();
  },

  moveSongSelector: function(selection) {
    switch(selection){
      case 'up':
        if(this.var.selectedSongNum > 0){
          this.var.selectedSongNum --;
        }
        else {
          this.var.selectedSongNum = this.var.allPlaylist.max-1;
        }
        break;
      case 'down':
        if(this.var.selectedSongNum < this.var.allPlaylist.max-1){
          this.var.selectedSongNum ++;
        }
        else {
          this.var.selectedSongNum = 0;
        }
        break;
      default:
    }
    this.songSelectionUpdate();
  },

  setCurrentPlaylist: function(index) {
    this.var.currentPlaylist.update(this.var.allPlaylist, index);
    for(var i=0; i<7; i++){
      this.text.song[i].title.setText(this.var.currentPlaylist.list[i].name);
      this.text.song[i].level.setText('LV.'+this.var.currentPlaylist.list[i].level[this.var.selectedPattern]);
      this.text.song[i].bpm.setText('BPM ' + this.var.currentPlaylist.list[i].tempo, 7);
    }
    this.img.songimg.loadTexture(this.var.allPlaylist.list[this.var.selectedSongNum].name);
    this.img.songimg.frame=this.var.selectedPattern;

  },

  patternSelectionUpdate: function() {
    this.img.patternselector.x = 150 + 35 * this.var.selectedPattern;
    this.setCurrentPlaylist(this.var.selectedSongNum);
  },

  songSelectionUpdate: function() {
    this.setCurrentPlaylist(this.var.selectedSongNum);
  },

  sortByTitle: function(){
  },

  sortByLevel: function(pattern){
  },

  backspacetouched: function(backspacebutton, pointer, isOver){
    if (isOver) this.pressbackspace();
  },
  helptouched: function(helpbutton, pointer, isOver){
    if (isOver) this.presshelp();
  },
  starttouched: function(startbutton, pointer, isOver){
    if (isOver) this.pressstart();
  },
  optiontouched: function(optionbutton, pointer, isOver){
    if (isOver) this.pressoption();
  },

  pressoption: function(){
    console.log('pressoption()');
  },

  pressbackspace: function(){
    C2TrackerControl.stop(C2Trackers.bgmLoop);
    this.state.start('screenLobby');
  },

  presshelp: function(){
    console.log('presshelp()');
  },

  pressstart: function(){
    C2TrackerControl.stop(C2Trackers.bgmLoop);
    PATH.setStage(
      this.var.allPlaylist.list[this.var.selectedSongNum].path,
      this.var.selectedPattern);
    this.state.start('screenPlayInit');
  }
};

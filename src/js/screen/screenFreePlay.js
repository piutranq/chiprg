var screenFreePlay = {
  name: "screenFreePlay",
  uiPath: "",

  string: {
    title: "",
  },

  text: {
    title: "",
  },

  img: {
    background: "",
    songselector: "",
    optionbutton: "",
    patternselector: "",
    backspacebutton: "",
    helpbutton: "",
    startbutton: ""
  },

  var: {
    selectedSongNum: 0,
    selectedSongName: "",
    selectedPattern: 0
  },

  preload: function(){
    this.uiPath = PATH.uiPath(PATH.uiName) + this.name + '/';
    game.load.image('background', this.uiPath+'background.png');
    game.load.image('backspacebutton', this.uiPath+'backspace.png');
    game.load.image('helpbutton', this.uiPath+'help.png');
    game.load.image('option', this.uiPath+'option.png');
    game.load.image('patternselector', this.uiPath+'patternselector.png');
    game.load.image('songselector', this.uiPath+'songselector.png');
    game.load.image('startbutton', this.uiPath+'start.png',110,23);
    C2TrackerControl.load(C2Trackers.bgmLoop, 'assets/sound/BGM/bgmSelectAccount.mod');
  },
  create: function(){
    C2TrackerControl.play(C2Trackers.bgmLoop);
    this.text.title = game.add.bitmapText(0, 0, 'font79', this.string.title, 9);
    this.img.background = game.add.sprite(0, 0, 'background');
    this.img.songselector= game.add.sprite(10, 90, 'songselector');
    this.img.patternselector = game.add.sprite(150, 135, 'patternselector');

    this.img.option = game.add.button(
      150, 170, 'option', this.optiontouched, this);
    this.img.backspacebutton = game.add.button(
      10, 10, 'backspacebutton', this.backspacetouched, this);
    this.img.helpbutton = game.add.button(
      295, 10, 'helpbutton', this.helptouched, this);
    this.img.startbutton = game.add.button(
      260, 135, 'startbutton', this.starttouched, this);

  },

  update: function(){
    if (game.input.keyboard.justPressed(Phaser.Keyboard.UP) ||
      game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_UP)){
      console.log('uo');
      // this.moveSongSelector('up');
    }

    if (game.input.keyboard.justPressed(Phaser.Keyboard.DOWN) ||
      game.input.gamepad.pad1.justPressed(Phaser.Gamepad.XBOX360_DPAD_DOWN)){
      console.log('down');
        // this.moveSongSelector('down');
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
      default:
        if(selection == 'right'){
          if(this.var.selectedPattern >= 2)
            this.var.selectedPattern = 0;
          else
            this.var.selectedPattern++;
        }
        else if(selection == 'left'){
          if(this.var.selectedPattern <= 0)
            this.var.selectedPattern = 2;
          else
            this.var.selectedPattern--;
        }
        else {
        }
    }
    this.selectionUpdate();
  },

  selectionUpdate: function() {
    switch(this.var.selectedPattern){
      case 0:
        this.img.patternselector.x=150;
        break;
      case 1:
        this.img.patternselector.x=185;
        break;
      case 2:
        this.img.patternselector.x=220;
        break;
      default:
    }
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
    this.state.start('screenPlayInit');
  }
};

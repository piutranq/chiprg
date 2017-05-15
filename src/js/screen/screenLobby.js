var screenLobby = {
  name: "screenLobby",
  uiPath: "",

  // Strings
  string: {
    title: "LOBBY",
    type1: {
      name: "FREE PLAY",
      contents: "FREE PLAYING\nON ONE SONG\n"
    },
    type2: {
      name: "COURSE PLAY",
      contents: "COURSE PLAYING\nON FOUR SONGS\n"
    },
    type3: {
      name: "PLAYER INFO",
      contents: "PLAYER INFO\nWITH DATA\n"
    },
    type4: {
      name: "RANKING INFO",
      contents: "PLAYER RANK\nWITH DATA\n"
    },
    type5: {
      name: "CONFIG",
      contents: "SET CONFIG\nEX) KEY SETTING\n"
    },
    type6: {
      name: "GO BACK",
      contents: "GO BACK\nSELECT ACCOUNT\n"
    },
  },

  // Image Objects
  img: {
    background: "",
    selector: "",
    type1button: "",
    type2button: "",
    type3button: "",
    type4button: "",
    type5button: "",
    type6button: "",
    okbutton: "",
  },

  // Text Objects
  text: {
    title: "",
    buttontype1: "",
    buttontype2: "",
    buttontype3: "",
    buttontype4: "",
    buttontype5: "",
    buttontype6: "",
    typename: "",
    okname: "",
    contents: "",
  },

  // Variable
  var:{
    selectType: 0, // 0: Online, 1: Local, 2: Guest
  },

  preload: function(){
    this.uiPath = uiPath + this.name + '/';
    game.load.image('background', this.uiPath+'background.png');
    game.load.image('selector', this.uiPath+'selector.png');
    game.load.image('button', this.uiPath+'button.png');
    game.load.spritesheet('ok', this.uiPath+'ok.png',110,23);
  },
  create: function(){
    this.text.title = game.add.bitmapText(0, 0, 'font79', this.string.title, 9);
    this.img.background = game.add.sprite(0, 0, 'background');
    this.img.selector = game.add.sprite(160, 30, 'selector');

    this.img.okbutton = game.add.button(
      190, 140, 'ok', this.oktouched, this, 1, 1, 2);
    this.img.type1button = game.add.button(
      10, 30, 'button', this.type1touched, this);
    this.img.type2button = game.add.button(
      10, 54, 'button', this.type2touched, this);
    this.img.type3button = game.add.button(
      10, 78, 'button', this.type3touched, this);
    this.img.type4button = game.add.button(
      10, 102, 'button', this.type4touched, this);
    this.img.type5button = game.add.button(
      10, 126, 'button', this.type5touched, this);
    this.img.type6button = game.add.button(
      10, 150, 'button', this.type6touched, this);

    this.text.buttontype1 = game.add.bitmapText(40, 37, 'font57', this.string.type1.name, 7);
    this.text.buttontype2 = game.add.bitmapText(40, 61, 'font57', this.string.type2.name, 7);
    this.text.buttontype3 = game.add.bitmapText(40, 85, 'font57', this.string.type3.name, 7);
    this.text.buttontype4 = game.add.bitmapText(40, 109, 'font57', this.string.type4.name, 7);
    this.text.buttontype5 = game.add.bitmapText(40, 133, 'font57', this.string.type5.name, 7);
    this.text.buttontype6 = game.add.bitmapText(40, 157, 'font57', this.string.type6.name, 7);
    this.text.typename = game.add.bitmapText(190, 20, 'font79', this.string.type1.name, 9);
    this.text.okname = game.add.bitmapText(210, 147, 'font57', 'USE '+this.string.type1.name, 7);
    this.text.contents = game.add.bitmapText(190, 40, 'font57', this.string.type1.contents, 7);

  },

  update: function(){
    if (game.input.keyboard.justPressed(Phaser.Keyboard.UP))
      this.moveSelector('up');
    if (game.input.keyboard.justPressed(Phaser.Keyboard.DOWN))
      this.moveSelector('down');
    if (game.input.keyboard.justPressed(Phaser.Keyboard.ENTER))
      this.pressokbutton();
  },

  oktouched: function(okbutton, pointer, isOver){
    if (isOver){
      this.pressokbutton();
    }
  },
  type1touched: function(type1button, pointer, isOver){
    if (isOver) this.moveSelector(0);
  },
  type2touched: function(type2button, pointer, isOver){
    if (isOver) this.moveSelector(1);
  },
  type3touched: function(type3button, pointer, isOver){
    if (isOver) this.moveSelector(2);
  },
  type4touched: function(type4button, pointer, isOver){
    if (isOver) this.moveSelector(3);
  },
  type5touched: function(type5button, pointer, isOver){
    if (isOver) this.moveSelector(4);
  },
  type6touched: function(type6button, pointer, isOver){
    if (isOver) this.moveSelector(5);
  },

  moveSelector: function(selection) {
    switch(selection){
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        this.var.selectType = selection;
        break;
      default:
        if(selection == 'down'){
          if(this.var.selectType >= 5)
            this.var.selectType = 0;
          else
            this.var.selectType++;
        }
        else if(selection == 'up'){
          if(this.var.selectType <= 0)
            this.var.selectType = 5;
          else
            this.var.selectType--;
        }
        else {
        }
    }
    this.selectionUpdate();
  },

  selectionUpdate: function() {
    switch(this.var.selectType){
      case 0:
        this.img.selector.y=30;
        this.text.typename.setText(this.string.type1.name);
        this.text.okname.setText('USE '+this.string.type1.name);
        this.text.contents.setText(this.string.type1.contents);
        break;
      case 1:
        this.img.selector.y=54;
        this.text.typename.setText(this.string.type2.name);
        this.text.okname.setText('USE '+this.string.type2.name);
        this.text.contents.setText(this.string.type2.contents);
        break;
      case 2:
        this.img.selector.y=78;
        this.text.typename.setText(this.string.type3.name);
        this.text.okname.setText('USE '+this.string.type3.name);
        this.text.contents.setText(this.string.type3.contents);
        break;
      case 3:
        this.img.selector.y=102;
        this.text.typename.setText(this.string.type4.name);
        this.text.okname.setText('USE '+this.string.type4.name);
        this.text.contents.setText(this.string.type4.contents);
        break;
      case 4:
        this.img.selector.y=126;
        this.text.typename.setText(this.string.type5.name);
        this.text.okname.setText('USE '+this.string.type5.name);
        this.text.contents.setText(this.string.type5.contents);
        break;
      case 5:
        this.img.selector.y=150;
        this.text.typename.setText(this.string.type6.name);
        this.text.okname.setText('USE '+this.string.type6.name);
        this.text.contents.setText(this.string.type6.contents);
        break;
      default:
    }
  },

  pressokbutton: function() {
    switch(this.var.selectType){
      case 0:
        console.log('go free play');
        this.state.start('screenPlay');
        break;
      case 1:
        console.log('go course play');
        this.state.start('screenPlay');
        break;
      case 2:
        console.log('player info');
        this.state.start('');
        break;
      case 3:
        console.log('ranking info');
        this.state.start('');
        break;
      case 4:
        console.log('config');
        this.state.start('');
        break;
      case 5:
        console.log('go back');
        this.state.start('screenSelectAccount');
        break;
      default:
    }
  }

};
var game = new Phaser.Game(320, 180, Phaser.AUTO, 'chiprg');

// PATH CONSTANT
var IMG_PATH = 'assets/img/';
var FONT_PATH = 'assets/img/fonts/';
var SKIN_PATH = 'assets/img/skin/';

var SOUND_PATH = 'assets/sound/';
var BGM_PATH = 'assets/sound/BGM/';
var SE_PATH = 'assets/sound/SE/';

var STAGE_PATH = 'assets/stage/';

// PATH VARIABLE
var skinName = 'default';
var skinPath = SKIN_PATH + skinName + '/';
var stageName = 'temp';
var stageLevel = 0;
var stagePath = STAGE_PATH + stageName + '/';

// BGM list for menu
var menuBGMlist = [];
function push_menuBGM(key, data) {
  menuBGMlist.push(key);
  var buffer = new Uint8Array(data);
  return buffer;
}

// SE list for menu
var menuSElist = [];
function push_menuSE(key, data) {
  menuSElist.push(key);
  var buffer = new Uint8Array(data);
  return buffer;
}


// OVERRIDE SOME FUNCTIONS

// set tight gamepad button justPressed timing (250ms --> 20ms)
Phaser.DeviceButton.prototype.justPressed = function(duration){
  duration = duration || 20;
  return (this.isDown && (this.timeDown + duration) > this.game.time.time);
};

// DECLARE GAME STATES
game.state.add('screenStart', screenStart);
game.state.add('screenMenu', screenMenu);
game.state.add('screenConfig', screenConfig);
game.state.add('screenRanking', screenRanking);
game.state.add('screenSelect', screenSelect);
game.state.add('screenPlay', screenPlay);
game.state.add('screenResult', screenResult);
game.state.add('screenInputCheck', screenInputCheck);

game.state.start('screenStart');


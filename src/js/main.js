var game = new Phaser.Game(320, 180, Phaser.AUTO, 'chiprg');

// PATH CONSTANT
FONT_PATH = 'assets/fonts/';
IMG_PATH = 'assets/img/';
SKIN_PATH = 'assets/img/skin/';

// PATH VARIABLE
skinName = 'default/';

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


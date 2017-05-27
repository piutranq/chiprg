// OVERRIDE SOME FUNCTIONS

// set tight gamepad button justPressed timing (250ms --> 20ms)

/*
Phaser.DeviceButton.prototype.justPressed = function(duration){
  duration = duration || 20;
  return (this.isDown && (this.timeDown + duration) > this.game.time.time);
};
*/
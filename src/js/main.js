
// Phaser 게임 선언
var game = new Phaser.Game(640, 360, Phaser.AUTO, '');

// 각각의 게임 화면 선언
game.state.add('screenStart', screenStart);
game.state.add('screenMenu', screenMenu);
game.state.add('screenConfig', screenConfig);
game.state.add('screenSelect', screenSelect);
game.state.add('screenPlay', screenPlay);
game.state.add('screenResult', screenResult);

// screenStart에서 게임 시작
game.state.start('screenStart');

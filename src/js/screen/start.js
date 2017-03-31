var screenStart = {
  name: "screenStart",
  buttonGoMenu: "",
  preload: function(){
    game.load.image('redbutton','assets/img/redbutton.png');
  },
  create: function(){
    var title = game.add.text(0, 0, this.name, { font: "14px Arial", fill: "#ffffff"});
    var buttonStart = game.add.button(
      game.world.centerX-32, game.world.centerY-18,
      'redbutton', this.goMenu, this);
  },
  goMenu: function(buttonGoMenu, pointer, isOver){
    if (isOver){
      this.state.start('screenMenu');
    }
  }
};

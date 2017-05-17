
var screenPlayInit = {
  skindata: "",
  preload: function(){
    game.load.json('skindata', PATH.skinPath('default') + 'skindata.json');
  },
  create: function(){
    this.skindata = game.cache.getJSON('skindata');
  },
  update: function(){
    this.state.start('screenPlay');
  }

};

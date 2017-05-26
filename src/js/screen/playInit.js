var screenPlayInit = {
  skindata: "",
  stagedata: "",
  preload: function(){

    // Load Song Data
    game.load.json(
      'stagedata',
      PATH.stagePath(PATH.stageName)+'stageData'+PATH.stageLevel+'.json');

    // Load Skin
    game.load.json(
      'skindata',
      PATH.skinPath(PATH.skinName)+'skindata.json');
  },
  create: function(){
    this.skindata = game.cache.getJSON('skindata');
    this.stagedata = game.cache.getJSON('stagedata');
  },
  update: function(){
    this.state.start('screenPlay');
  }

};

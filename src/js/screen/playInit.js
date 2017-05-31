var screenPlayInit = {
  skindata: "",
  stagedata: "",
  preload: function(){

    // for only showcase build
    /*
    PATH.stageName = '16cp2';
    PATH.stageLevel = '1';
    */

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
    C2TrackerControl.load(C2Trackers.bgmNonLoop, PATH.stagePath(PATH.stageName) + 'bgm.it');
  },
  update: function(){
    this.state.start('screenPlay');
  }

};

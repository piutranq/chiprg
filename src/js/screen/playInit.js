var screenPlayInit = {
  skindata: "",
  stagedata: "",
  loadimg: "",
  loadTimer: new RGtimer(),
  preload: function(){

    // for only showcase build
    /*
    PATH.stageName = '16cp2';
    PATH.stageLevel = '1';
    */

    // Load Song Data
    game.load.spritesheet(
      'loadimg',
      PATH.stagePath(PATH.stageName)+'loadimg.png', 320, 180);
    game.load.json(
      'stagedata',
      PATH.stagePath(PATH.stageName)+'stageData'+PATH.stageLevel+'.json');

    // Load Skin
    game.load.json(
      'skindata',
      PATH.skinPath(PATH.skinName)+'skindata.json');
  },
  create: function(){
    this.loadTimer.start(120);
    this.loadimg = game.add.sprite(0, 0, 'loadimg', PATH.stageLevel);
    this.skindata = game.cache.getJSON('skindata');
    this.stagedata = game.cache.getJSON('stagedata');
    C2TrackerControl.load(C2Trackers.bgmNonLoop, PATH.stagePath(PATH.stageName) + 'bgm.it');
  },
  update: function(){
    if(this.loadTimer.getMsec()>=2000) {
      this.state.start('screenPlay');
    }
  }

};

var PATH = {
  IMG: 'assets/img/',
  FONT: 'assets/img/fonts/',
  SKIN: 'assets/img/skin/',
  UI: 'assets/img/ui/',

  SOUND: 'assets/sound/',
  BGM: 'assets/sound/BGM/',
  SE: 'assets/sound/SE/',

  STAGE: 'assets/stage/',

  skinName: 'default',
  uiName: 'default',
  stageName: '',
  stageLevel: 0,

  setStage: function(name, level){
    PATH.stageName = name;
    PATH.stageLevel = level;
  },

  skinPath: function(skinName){
    return this.SKIN + skinName + '/';
  },
  uiPath: function(uiName){
    return this.UI + uiName + '/';
  },
  stagePath: function(stageName, stageLevel){
    return this.STAGE + stageName + '/';
  }
};
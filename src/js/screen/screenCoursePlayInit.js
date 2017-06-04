var screenCoursePlayInit = {
  allCourseList: "",
  preload: function(){
    // Load Playlist
    game.load.json(
      'allCourseList',
      PATH.STAGE+'courseplaylist/list.json');
  },
  create: function(){
    this.allCourseList = game.cache.getJSON('allCourseList');
  },
  update: function(){
    this.state.start('screenCoursePlay');
  }
};
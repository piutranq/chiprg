var Tracker = {
  menu: {
    bgmA: "",
    bgmB: "",
    seA:  "",
    seB:  ""
  },
  stage: {
    bgmA: "",
    bgmB: "",
    se1:  "",
    se2:  "",
    se3:  "",
    se4:  "",
    seL:  "",
    seR:  ""
  }
};

// BGM list for menu
var menuBGMlist = [];
function push_menuBGM(key, data) {
  menuBGMlist.push(key);
  var buffer = new Uint8Array(data);
  return buffer;
}

// SE list for menu
var menuSElist = [];
function push_menuSE(key, data) {
  menuSElist.push(key);
  var buffer = new Uint8Array(data);
  return buffer;
}

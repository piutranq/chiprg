var NUM_PROTRACKERS = 0;
var ProTrackers = [];
var ptList = [];
function push_ptBGMlist(key, data) {
  ptList.push(key);
  var buffer = new Uint8Array(data);
  return buffer;
}

function load_module(playlist, number, tracker)
{
    tracker.stop();
    tracker.clearsong();
    tracker.buffer = game.cache.getBinary(playlist[number]);
    tracker.parse();
}

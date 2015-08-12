var WebTorrent = require('webtorrent')

var client = new WebTorrent({ trackers: ['localhost:8080'] })


window.handleFiles = function(files) {

  client.seed(files, function onTorrent (torrent) {
    // Client is seeding the file!

    console.log('Torrent info hash:', torrent.infoHash)
  })
}

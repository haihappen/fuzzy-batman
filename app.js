var fs     = require('fs')
var DHT    = require('bittorrent-dht');
var magnet = require('magnet-uri');
var WebTorrent = require('webtorrent')
var mkdirp = require('mkdirp')
var path = require('path')

// var parseTorrent = require('parse-torrent');
// var info = parseTorrent(fs.readFileSync(__dirname + '/Shared.torrent'))
//
// console.log(info)

var uri = "magnet:?xt=urn:btih:40710fd1bb3fb4b82821375424488ee436bac37b"
var parsed = magnet(uri);


var client = new WebTorrent({ tracker: false });

//
// client.on('listening', function(port, torrent) {
//   console.log('listening', port);
// })
//

client.dht.on('listening', function (port) {
  console.log(port);
})

client.dht.on('node', function (addr, hash, from) {
  console.log(addr);
})

// client.download(uri, function (torrent) {
//   // Got torrent metadata!
//   //console.log('Torrent info hash:', torrent.infoHash);
//
//   torrent.swarm.wires.forEach(function(wire) {
//     console.log(wire.remoteAddress);
//   })
//
//
//   torrent.files.forEach(function (file) {
//     var filePath = __dirname + '/Downloads/' + file.path;
//
//     mkdirp(path.dirname(filePath), function() {
//       var writeable = fs.createWriteStream(filePath);
//       file.createReadStream().pipe(writeable);
//     })
//   })
//
//
// })


// var dht = new DHT()
//
// dht.listen(20000, function () {
//   console.log('now listening')
// })
//
// dht.on('ready', function () {
//   // DHT is ready to use (i.e. the routing table contains at least K nodes, discovered
//   // via the bootstrap nodes)
//
//   console.log('dht ready')
//
//   // find peers for the given torrent info hash
//   dht.lookup(parsed.infoHash)
// })
//
// dht.on('peer', function (addr, hash, from) {
//   console.log('dht peer')
//
//   console.log('found potential peer ' + addr + ' through ' + from)
// })

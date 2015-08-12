var WebTorrent = require('webtorrent')
var concat = require('concat-stream')

var client = new WebTorrent()
var magnet_uri = "magnet:?xt=urn:btih:1df31655a71b82f5ed523d919f58c92b7f00dadc"

client.download(magnet_uri, function (torrent) {
  // Got torrent metadata!
  console.log('Torrent info hash:', torrent.infoHash)

  torrent.files.forEach(function (file) {
    // Get the file data as a Buffer (Uint8Array typed array)
    file.createReadStream().pipe(concat(function (buf) {

      // Append a link to download the file
      var a = document.createElement('a')
      a.download = file.name
      a.href = URL.createObjectURL(new Blob([ buf ]))
      a.textContent = 'download ' + file.name
      document.body.appendChild(a)
    }))
  })
})

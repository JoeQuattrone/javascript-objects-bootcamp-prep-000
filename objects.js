var playlist = {Phil Ochs: "Slowdive",}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( {}, playlist, { [artistName]: songTitle } )
}

updatePlaylist(PhillOchs, "Phil Ochs", "Slowdive"); 

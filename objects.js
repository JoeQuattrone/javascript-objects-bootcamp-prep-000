var playlist = {artistName: "songTitle",}

Object.assign ({}, playlist, {artistName: ["Slowdive", "My Bloody Valentine", "Phil Ochs"]})

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( {}, playlist, { [artistName]: songTitle } )
}

updatePlaylist(PhillOchs, "Phil Ochs", "Slowdive"); 

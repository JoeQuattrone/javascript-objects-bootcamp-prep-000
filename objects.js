var playlist = {artistName: "songTitle",}


function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle
    return playlist
}

updatePlaylist(PhillOchs, "Phil Ochs", "Slowdive"); 

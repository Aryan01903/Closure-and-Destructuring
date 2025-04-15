function createPlaylist(name) {
    let songs = [];
  
    function addSong(songName, artist) {
      songs.push({ songName, artist });
    }
  
    function listSongs() {
      return songs;
    }
  
    return {
      addSong,
      listSongs
    };
  }

// task-2 add song
const myPlaylist = createPlaylist("Chill Vibes");
myPlaylist.addSong("Let Her Go", "Passenger");
myPlaylist.addSong("Someone Like You", "Adele");

// task- list songs
console.log(myPlaylist.listSongs());


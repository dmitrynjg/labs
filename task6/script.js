var Player = {
  tracks: ['song1.mp3', 'song2.mp3', 'song3.mp3'],
  status: 'pause',
  currentTrack: 0,
  display: function (current) {
    return 'Track: ' + this.tracks[current] + ' Status: ' + this.status;
  },
  play: function () {
    this.status = 'play';
    this.display(4);
  },
  pause: function () {
    this.status = 'pause';
    this.display();
  },
  next: function () {
    if (this.currentTrack == this.tracks.length - 1) {
      this.currentTrack = 0;
    }
    else {
      this.currentTrack++;
    }
    console.log(this.display(this.currentTrack));
  },
  prev: function () {
    // TODO
  }
};
Player.display(Player.currentTrack);
Player.play();

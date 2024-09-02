const musicCollection = {

  musicAlbums: [
      { title: 'Led Zeppelin IV', artist: 'ELed Zeppelin',  year: '1971'},
      { title: 'Master of Puppets', artist: 'Metallica',  year: '1986'},
      { title: 'Rubber Soul', artist: 'The Beatles',  year: '1965'},
      { title: 'Nevermind', artist: 'Nirvana',  year: '1991'},
      { title: 'Князь тишины', artist: 'Nautilus Pompilius',  year: '1988'},
      { title: 'Черный альбом', artist: 'Кино',  year: '1990'},
  ],
  [Symbol.iterator]() {
      this.index = 0;
      return this;
  },
  next() {
      return this.index < this.musicAlbums.length
          ? {done: false, value: this.musicAlbums[this.index++]}
          : {done: true};
  }
}
for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
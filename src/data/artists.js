const artists = [
  {
    name: "Artist Collection",
    posters: Array.from({ length: 42 }, (_, i) => ({
      name: `Artist ${i + 1}`,
      path: `/posters/Artist/${i + 1}.jpg`
    }))
  }
].map(artist => ({
  ...artist,
  thumbnail: artist.posters[Math.floor(Math.random() * artist.posters.length)].path
}));

export default artists;

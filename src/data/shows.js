const shows = [
  {
    name: "Breaking Bad",
    thumbnail: `/posters/Shows/BreakingBad/${Math.floor(Math.random() * 16) + 1}.jpeg`,
    posters: Array.from({ length: 16 }, (_, i) => ({
      name: `Breaking Bad ${i + 1}`,
      path: `/posters/Shows/BreakingBad/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Game of Thrones",
    thumbnail: `/posters/Shows/GameofThrones/${Math.floor(Math.random() * 14) + 1}.jpeg`,
    posters: Array.from({ length: 14 }, (_, i) => ({
      name: `Game of Thrones ${i + 1}`,
      path: `/posters/Shows/GameofThrones/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Stranger Things",
    thumbnail: `/posters/Shows/StrangerThings/${Math.floor(Math.random() * 16) + 1}.jpg`,
    posters: Array.from({ length: 16 }, (_, i) => ({
      name: `Stranger Things ${i + 1}`,
      path: `/posters/Shows/StrangerThings/${i + 1}s.jpg`
    }))
  },
  {
    name: "Squid Games",
    thumbnail: `/posters/Shows/SquidGames/${Math.floor(Math.random() * 12) + 1}.jpg`,
    posters: Array.from({ length: 12 }, (_, i) => ({
      name: `Squid Games ${i + 1}`,
      path: `/posters/Shows/SquidGames/${i + 1}s.jpg`
    }))
  },
  {
    name: "The Witcher",
    thumbnail: `/posters/Shows/TheWitcher/${Math.floor(Math.random() * 15) + 1}.jpeg`,
    posters: Array.from({ length: 15 }, (_, i) => ({
      name: `The Witcher ${i + 1}`,
      path: `/posters/Shows/TheWitcher/${i + 1}s.jpeg`
    }))
  },
  {
    name: "The Mandalorian",
    thumbnail: `/posters/Shows/TheMandalorian/${Math.floor(Math.random() * 13) + 1}.jpeg`,
    posters: Array.from({ length: 13 }, (_, i) => ({
      name: `The Mandalorian ${i + 1}`,
      path: `/posters/Shows/TheMandalorian/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Peaky Blinders",
    thumbnail: `/posters/Shows/PeakyBlinders/${Math.floor(Math.random() * 10) + 1}.jpeg`,
    posters: Array.from({ length: 10 }, (_, i) => ({
      name: `Peaky Blinders ${i + 1}`,
      path: `/posters/Shows/PeakyBlinders/${i + 1}s.jpeg`
    }))
  },
  {
    name: "The Boys",
    thumbnail: `/posters/Shows/TheBoys/${Math.floor(Math.random() * 3) + 1}.jpeg`,
    posters: Array.from({ length: 3 }, (_, i) => ({
      name: `The Boys ${i + 1}`,
      path: `/posters/Shows/TheBoys/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Better Call Saul",
    thumbnail: `/posters/Shows/BetterCallSaul/${Math.floor(Math.random() * 12) + 1}.jpeg`,
    posters: Array.from({ length: 12 }, (_, i) => ({
      name: `Better Call Saul ${i + 1}`,
      path: `/posters/Shows/BetterCallSaul/${i + 1}s.jpeg`
    }))
  },
  {
    name: "The Crown",
    thumbnail: `/posters/Shows/TheCrown/${Math.floor(Math.random() * 3) + 1}.jpeg`,
    posters: Array.from({ length: 3 }, (_, i) => ({
      name: `The Crown ${i + 1}`,
      path: `/posters/Shows/TheCrown/${i + 1}s.jpeg`
    }))
  },
  {
    name: "The Office",
    thumbnail: `/posters/Shows/TheOffice/${Math.floor(Math.random() * 0) + 1}.jpeg`,
    posters: Array.from({ length: 0 }, (_, i) => ({
      name: `The Office ${i + 1}`,
      path: `/posters/Shows/TheOffice/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Friends",
    thumbnail: `/posters/Shows/Friends/${Math.floor(Math.random() * 0) + 1}.jpeg`,
    posters: Array.from({ length: 0 }, (_, i) => ({
      name: `Friends ${i + 1}`,
      path: `/posters/Shows/Friends/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Sherlock",
    thumbnail: `/posters/Shows/Sherlock/${Math.floor(Math.random() * 3) + 1}.jpeg`,
    posters: Array.from({ length: 3 }, (_, i) => ({
      name: `Sherlock ${i + 1}`,
      path: `/posters/Shows/Sherlock/${i + 1}s.jpeg`
    }))
  },
  {
    name: "The Last of Us",
    thumbnail: `/posters/Shows/TheLastofUs/${Math.floor(Math.random() * 0) + 1}.jpeg`,
    posters: Array.from({ length: 0 }, (_, i) => ({
      name: `The Last of Us ${i + 1}`,
      path: `/posters/Shows/TheLastofUs/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Dark",
    thumbnail: `/posters/Shows/Dark/${Math.floor(Math.random() * 0) + 1}.jpeg`,
    posters: Array.from({ length: 0 }, (_, i) => ({
      name: `Dark ${i + 1}`,
      path: `/posters/Shows/Dark/${i + 1}s.jpeg`
    }))
  },
  {
    name: "House of the Dragon",
    thumbnail: `/posters/Shows/HouseoftheDragon/${Math.floor(Math.random() * 0) + 1}.jpeg`,
    posters: Array.from({ length: 0 }, (_, i) => ({
      name: `House of the Dragon ${i + 1}`,
      path: `/posters/Shows/HouseoftheDragon/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Loki",
    thumbnail: `/posters/Shows/Loki/${Math.floor(Math.random() * 0) + 1}.jpeg`,
    posters: Array.from({ length: 0 }, (_, i) => ({
      name: `Loki ${i + 1}`,
      path: `/posters/Shows/Loki/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Moon Knight",
    thumbnail: `/posters/Shows/MoonKnight/${Math.floor(Math.random() * 7) + 1}.jpeg`,
    posters: Array.from({ length: 7 }, (_, i) => ({
      name: `Moon Knight ${i + 1}`,
      path: `/posters/Shows/MoonKnight/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Hawkeye",
    thumbnail: `/posters/Shows/Hawkeye/${Math.floor(Math.random() * 0) + 1}.jpeg`,
    posters: Array.from({ length: 0 }, (_, i) => ({
      name: `Hawkeye ${i + 1}`,
      path: `/posters/Shows/Hawkeye/${i + 1}s.jpeg`
    }))
  },
  {
    name: "Obi-Wan Kenobi",
    thumbnail: `/posters/Shows/Obi-WanKenobi/${Math.floor(Math.random() * 0) + 1}.jpeg`,
    posters: Array.from({ length: 0 }, (_, i) => ({
      name: `Obi-Wan Kenobi ${i + 1}`,
      path: `/posters/Shows/Obi-WanKenobi/${i + 1}s.jpeg`
    }))
  }
];

export default shows;

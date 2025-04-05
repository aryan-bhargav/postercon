const games = [
    {
      name: "Assassin's Creed",
      posters: Array.from({ length: 25 }, (_, i) => ({
        name: `Assassin's Creed ${i + 1}`,
        path: `/posters/Games/Assassin's-creed/${i + 1}.jpg`
      }))
    },
    {
      name: "God of War",
      posters: Array.from({ length: 33 }, (_, i) => ({
        name: `God of War ${i + 1}`,
        path: `/posters/Games/God-of-war/${i + 1}.jpg`
      }))
    },
    {
      name: "Resident Evil",
      posters: Array.from({ length: 18 }, (_, i) => ({
        name: `Resident Evil ${i + 1}`,
        path: `/posters/Games/Resident-evil/${i + 1}.jpg`
      }))
    },
    {
      name: "Valorant",
      posters: Array.from({ length: 33 }, (_, i) => ({
        name: `Valorant ${i + 1}`,
        path: `/posters/Games/Valorant/${i + 1}.jpg`
      }))
    },
    {
      name: "The Last of Us",
      posters: Array.from({ length: 37 }, (_, i) => ({
        name: `The Last of Us ${i + 1}`,
        path: `/posters/Games/The-last-of-us/${i + 1}.jpg`
      }))
    }
  ];
  
  export default games;
  
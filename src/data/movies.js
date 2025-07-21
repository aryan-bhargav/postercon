const movies = [ 
  {
    name: "Interstellar",
    thumbnail: "https://i.pinimg.com/736x/a2/4a/ed/a24aed970d91fc9b66d0a2fa15c262a7.jpg",
    posters: Array.from({ length: 52 }, (_, i) => ({
      name: `Interstellar ${i + 1}`,
      path: `/posters/Movies/Interstellar/${i + 1}.jpg`
    }))
  },
  {
    name: "Fight Club",
    thumbnail: "https://i.pinimg.com/736x/db/8e/e7/db8ee7dbdb878fbbd2fb76c013d85483.jpg",
    posters: Array.from({ length: 55 }, (_, i) => ({
      name: `Fight Club ${i + 1}`,
      path: `/posters/Movies/FightClub/${i + 1}.jpg`
    }))
  },
  {
    name: "Inception",
    thumbnail: "https://i.pinimg.com/736x/b1/e5/3b/b1e53bfcca825a598c8203433924246a.jpg",
    posters: Array.from({ length: 60 }, (_, i) => ({
      name: `Inception ${i + 1}`,
      path: `/posters/Movies/Inception/${i + 1}.jpg`
    }))
  },
  {
    name: "The Matrix",
    thumbnail: "https://i.pinimg.com/1200x/ef/27/c6/ef27c693d0309e568e841d997a71b835.jpg",
    posters: Array.from({ length: 58 }, (_, i) => ({
      name: `The Matrix ${i + 1}`,
      path: `/posters/Movies/TheMatrix/${i + 1}.jpg`
    }))
  },
  {
    name: "The Dark Knight",
    thumbnail: "https://i.pinimg.com/1200x/28/fc/84/28fc848d77b857b39ac594fcc97fb8dc.jpg",
    posters: Array.from({ length: 51 }, (_, i) => ({
      name: `The Dark Knight ${i + 1}`,
      path: `/posters/Movies/TheDarkKnight/${i + 1}.jpg`
    }))
  },
  {
    name: "Pulp Fiction",
    thumbnail: "/posters/Movies/PulpFiction/1.jpg",
    posters: Array.from({ length: 53 }, (_, i) => ({
      name: `Pulp Fiction ${i + 1}`,
      path: `/posters/Movies/PulpFiction/${i + 1}.jpg`
    }))
  },
  {
    name: "The Godfather",
    thumbnail: "/posters/Movies/TheGodfather/1.jpg",
    posters: Array.from({ length: 57 }, (_, i) => ({
      name: `The Godfather ${i + 1}`,
      path: `/posters/Movies/TheGodfather/${i + 1}.jpg`
    }))
  },
  {
    name: "The Shawshank Redemption",
    thumbnail: "/posters/Movies/TheShawshankRedemption/1.jpg",
    posters: Array.from({ length: 54 }, (_, i) => ({
      name: `The Shawshank Redemption ${i + 1}`,
      path: `/posters/Movies/TheShawshankRedemption/${i + 1}.jpg`
    }))
  },
  {
    name: "Forrest Gump",
    thumbnail: "/posters/Movies/ForrestGump/1.jpg",
    posters: Array.from({ length: 50 }, (_, i) => ({
      name: `Forrest Gump ${i + 1}`,
      path: `/posters/Movies/ForrestGump/${i + 1}.jpg`
    }))
  },
  {
    name: "Gladiator",
    thumbnail: "/posters/Movies/Gladiator/1.jpg",
    posters: Array.from({ length: 56 }, (_, i) => ({
      name: `Gladiator ${i + 1}`,
      path: `/posters/Movies/Gladiator/${i + 1}.jpg`
    }))
  },
  {
    name: "The Prestige",
    thumbnail: "/posters/Movies/ThePrestige/1.jpg",
    posters: Array.from({ length: 51 }, (_, i) => ({
      name: `The Prestige ${i + 1}`,
      path: `/posters/Movies/ThePrestige/${i + 1}.jpg`
    }))
  },
  {
    name: "Parasite",
    thumbnail: "/posters/Movies/Parasite/1.jpg",
    posters: Array.from({ length: 52 }, (_, i) => ({
      name: `Parasite ${i + 1}`,
      path: `/posters/Movies/Parasite/${i + 1}.jpg`
    }))
  },
  {
    name: "Joker",
    thumbnail: "/posters/Movies/Joker/1.jpg",
    posters: Array.from({ length: 59 }, (_, i) => ({
      name: `Joker ${i + 1}`,
      path: `/posters/Movies/Joker/${i + 1}.jpg`
    }))
  },
  {
    name: "Whiplash",
    thumbnail: "/posters/Movies/Whiplash/1.jpg",
    posters: Array.from({ length: 50 }, (_, i) => ({
      name: `Whiplash ${i + 1}`,
      path: `/posters/Movies/Whiplash/${i + 1}.jpg`
    }))
  },
  {
    name: "Mad Max: Fury Road",
    thumbnail: "/posters/Movies/MadMaxFuryRoad/1.jpg",
    posters: Array.from({ length: 60 }, (_, i) => ({
      name: `Mad Max: Fury Road ${i + 1}`,
      path: `/posters/Movies/MadMaxFuryRoad/${i + 1}.jpg`
    }))
  }
];

export default movies;

const movies =
  [
    {
      name: "Interstellar",
      thumbnail: "https://i.pinimg.com/736x/a2/4a/ed/a24aed970d91fc9b66d0a2fa15c262a7.jpg",
      posters: Array.from({ length: 2 }, (_, i) => ({
        name: `Interstellar ${i + 1}`,
        path: `/posters/Movies/Interstellar/${i + 1}.jpg`
      }))
    },
    {
      name: "Moon Knight",
      thumbnail: "https://i.pinimg.com/736x/e0/d1/3f/e0d13f0502fad338a02ead315e96baf3.jpg",
      posters: Array.from({ length: 7 }, (_, i) => ({
        name: `Moon Knight ${i + 1}`,
        path: `/posters/Movies/MoonKnight/${i + 1}.jpg`
      }))
    },
    {
      name: "Squid Games",
      thumbnail: "https://i.pinimg.com/736x/23/cc/bf/23ccbf28137082dc795cf308f74f5ec0.jpg",
      posters: Array.from({ length: 12 }, (_, i) => ({
        name: `Squid Games ${i + 1}`,
        path: `/posters/Movies/SquidGames/${i + 1}.jpg`
      }))
    },
    {
      name: "Stranger Things",
      thumbnail: "https://i.pinimg.com/736x/88/56/4f/88564fb3a6a56236d00851382b59a036.jpg",
      posters: Array.from({ length: 52 }, (_, i) => ({
        name: `Stranger Things ${i + 1}`,
        path: `/posters/Movies/StrangerThings/${i + 1}.jpg`
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
      name: "The Godfather",
      thumbnail: "https://i.pinimg.com/1200x/3a/2d/34/3a2d34f0a80d0a462ed5b953df963a3e.jpg",
      posters: Array.from({ length: 57 }, (_, i) => ({
        name: `The Godfather ${i + 1}`,
        path: `/posters/Movies/TheGodfather/${i + 1}.jpg`
      }))
    },
    {
      name: "Joker",
      thumbnail: "https://i.pinimg.com/736x/42/bb/ba/42bbbaefd687903bc80b02c014e64a5b.jpg",
      posters: Array.from({ length: 59 }, (_, i) => ({
        name: `Joker ${i + 1}`,
        path: `/posters/Movies/Joker/${i + 1}.jpg`
      }))
    },
    {
      name: "Pulp Fiction",
      thumbnail: "https://i.pinimg.com/736x/e4/05/0b/e4050b92335cde4a3b5ae340fc8c5ee3.jpg",
      posters: Array.from({ length: 53 }, (_, i) => ({
        name: `Pulp Fiction ${i + 1}`,
        path: `/posters/Movies/PulpFiction/${i + 1}.jpg`
      }))
    },
    {
      name: "The Shawshank Redemption",
      thumbnail: "https://i.pinimg.com/736x/bb/0e/f9/bb0ef99b7d71bb27e22f57d2156b7b5d.jpg",
      posters: Array.from({ length: 54 }, (_, i) => ({
        name: `The Shawshank Redemption ${i + 1}`,
        path: `/posters/Movies/TheShawshankRedemption/${i + 1}.jpg`
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

    // Placeholder entries for missing movies
    {
      name: "American Psycho",
      thumbnail: "https://i.pinimg.com/736x/82/b9/11/82b91159cde1cee91f5a74980639ece6.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `American Psycho ${i + 1}`,
        path: `/posters/Movies/AmericanPsycho/${i + 1}.jpg`
      }))
    },
    {
      name: "John Wick",
      thumbnail: "https://i.pinimg.com/736x/4e/fd/19/4efd19fe0bab049e9f98a2b93ef7a926.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `John Wick ${i + 1}`,
        path: `/posters/Movies/JohnWick/${i + 1}.jpg`
      }))
    },
    {
      name: "Deadpool",
      thumbnail: "https://i.pinimg.com/736x/eb/14/84/eb148402a67530b2a2bf165f4e994905.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `Deadpool ${i + 1}`,
        path: `/posters/Movies/Deadpool/${i + 1}.jpg`
      }))
    },
    {
      name: "Spider-Man",
      thumbnail: "https://i.pinimg.com/736x/c8/54/cc/c854ccce48c3dbbeb16a834046bce01c.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `Spider-Man ${i + 1}`,
        path: `/posters/Movies/Spider-Man/${i + 1}.jpg`
      }))
    },
    {
      name: "The Boys",
      thumbnail: "https://i.pinimg.com/736x/56/fb/b7/56fbb7995ac6b88a2bc9574394151505.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `The Boys ${i + 1}`,
        path: `/posters/Movies/TheBoys/${i + 1}.jpg`
      }))
    },
    {
      name: "The Wolf of Wall Street",
      thumbnail: "https://i.pinimg.com/1200x/33/b9/f5/33b9f5e40d78347db4b7eaad76f12262.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `The Wolf of Wall Street ${i + 1}`,
        path: `/posters/Movies/TheWolfOfWallStreet/${i + 1}.jpg`
      }))
    },
    {
      name: "Harry Potter",
      thumbnail: "https://i.pinimg.com/736x/24/e2/84/24e2840091aa7b50d6ca838101e60c94.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `Harry Potter ${i + 1}`,
        path: `/posters/Movies/HarryPotter/${i + 1}.jpg`
      }))
    },
    {
      name: "Spiderverse",
      thumbnail: "https://i.pinimg.com/736x/46/7d/94/467d9422c34a27a813e84d4da80a0cb1.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `Spiderverse ${i + 1}`,
        path: `/posters/Movies/Spider-Verse/${i + 1}.jpg`
      }))
    },
    {
      name: "Batman",
      thumbnail: "https://i.pinimg.com/736x/9c/97/4d/9c974dffb29b71fe54ea382dc87df75f.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `Batman ${i + 1}`,
        path: `/posters/Movies/Batman/${i + 1}.jpg`
      }))
    },
    {
      name: "Cars",
      thumbnail: "https://i.pinimg.com/originals/82/1e/03/821e03ff0c73008859977006a0d10157.gif",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `Cars ${i + 1}`,
        path: `/posters/Movies/Cars/${i + 1}.jpg`
      }))
    },
    {
      name: "Top Gun",
      thumbnail: "https://i.pinimg.com/736x/e5/83/b4/e583b43e320271408499d7af729a81b4.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `Top Gun ${i + 1}`,
        path: `/posters/Movies/TopGun/${i + 1}.jpg`
      }))
    },
    {
      name: "Oppenheimer",
      thumbnail: "https://i.pinimg.com/736x/ba/31/b2/ba31b22d9a89a4c0fcc67fd7009fc795.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `Oppenheimer ${i + 1}`,
        path: `/posters/Movies/Oppenheimer/${i + 1}.jpg`
      }))
    },
    {
      name: "James Bond",
      thumbnail: "https://i.pinimg.com/736x/0f/ad/af/0fadafa014952dec3e9bb95f02a7e294.jpg",
      posters: Array.from({ length: 10 }, (_, i) => ({
        name: `James Bond ${i + 1}`,
        path: `/posters/Movies/JamesBond/${i + 1}.jpg`
      }))
    }
  ];

export default movies;

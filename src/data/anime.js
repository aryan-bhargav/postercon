const anime = [
  { name: "Attack on Titan", posters: Array.from({ length: 8 }, (_, i) => ({ name: `AOT ${i + 1}`, path: `/posters/Anime/AOT/${i + 1}s.jpg` })) },
  { name: "Berserk", posters: Array.from({ length: 3 }, (_, i) => ({ name: `Berserk ${i + 1}`, path: `/posters/Anime/Berserk/${i + 1}s.jpg` })) },
  { name: "Bleach", posters: Array.from({ length: 15 }, (_, i) => ({ name: `Bleach ${i + 1}`, path: `/posters/Anime/Bleach/${i + 1}s.jpg` })) },
  { name: "Blue Lock", posters: [{ name: "Blue Lock 01", path: "/posters/Anime/BlueLock/1.jpg" }] },
  { name: "Chainsaw Man", posters: Array.from({ length: 3 }, (_, i) => ({ name: `Chainsaw Man ${i + 1}`, path: `/posters/Anime/ChainsawMan/${i + 1}s.jpg` })) },
  { name: "City Hunter", posters: [{ name: "City Hunter 01", path: "/posters/Anime/CityHunter/1.jpg" }] },
  { name: "Dandadan", posters: Array.from({ length: 18 }, (_, i) => ({ name: `Dandadan ${i + 1}`, path: `/posters/Anime/Dandadan/${i + 1}s.jpg` })) },
  { name: "Demon Slayer", posters: Array.from({ length: 4 }, (_, i) => ({ name: `Demon Slayer ${i + 1}`, path: `/posters/Anime/DemonSlayer/${i + 1}s.jpg` })) },
  { name: "Dragon Ball", posters: Array.from({ length: 13 }, (_, i) => ({ name: `Dragon Ball ${i + 1}`, path: `/posters/Anime/DragonBall/${i + 1}s.jpg` })) },
  { name: "Jujutsu Kaisen", posters: Array.from({ length: 18 }, (_, i) => ({ name: `JJK ${i + 1}`, path: `/posters/Anime/JJK/${i + 1}s.jpg` })) },
  { name: "My Hero Academia", posters: Array.from({ length: 2 }, (_, i) => ({ name: `MHA ${i + 1}`, path: `/posters/Anime/MHA/${i + 1}s.jpg` })) },
  { name: "Mob Psycho", posters: [{ name: "Mob Psycho 01", path: "/posters/Anime/MobPsycho/1.jpg" }] },
  { name: "Monster", posters: [{ name: "Monster 01", path: "/posters/Anime/Monster/1.jpg" }] },
  { name: "Naruto", posters: Array.from({ length: 3 }, (_, i) => ({ name: `Naruto ${i + 1}`, path: `/posters/Anime/Naruto/${i + 1}s.jpg` })) },
  { name: "One Piece", posters: Array.from({ length: 4 }, (_, i) => ({ name: `One Piece ${i + 1}`, path: `/posters/Anime/OnePiece/${i + 1}s.jpg` })) },
  { name: "Tokyo Revengers", posters: [{ name: "Tokyo Revengers 01", path: "/posters/Anime/TokyoRevengers/1.jpg" }] }
].map(anime => ({
  ...anime,
  thumbnail: anime.posters[Math.floor(Math.random() * anime.posters.length)].path
}));

export default anime;

const cars = [
  {
    name: "Supercars",
    image: "/posters/Cars/cover.jpg", // ✅ Category cover
    posters: Array.from({ length: 30 }, (_, i) => ({
      name: `Supercar ${i + 1}`,
      path: `/posters/Cars/${i + 1}s.jpg`,
      price: 249,
      originalPrice: 299,
    }))
  }
].map(car => ({
  ...car,
  thumbnail: car.posters[Math.floor(Math.random() * car.posters.length)].path
}));

export default cars;

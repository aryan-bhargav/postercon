const cars = [
    {
      name: "Supercars",
      image: "/posters/Cars/cover.jpg", // ✅ Add a cover image for the category page
      posters: Array.from({ length: 30 }, (_, i) => ({
        name: `Supercar ${i + 1}`,
        path: `/posters/Cars/${i + 1}.jpg`,
        price: 249, // ✅ Optional price
        originalPrice: 299, // ✅ Optional original price
      }))
    }
  ];
  
  export default cars;
  
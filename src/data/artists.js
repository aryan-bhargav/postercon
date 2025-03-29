const artists = [
    {
        name: "Artist Collection",
        posters: Array.from({ length: 42 }, (_, i) => ({
            name: `Artist ${i + 1}`,
            path: `/posters/Artist/${i + 1}.jpg`
        }))
    }
];

export default artists;

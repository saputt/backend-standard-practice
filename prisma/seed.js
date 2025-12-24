const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const userId = "877b82c5-4333-4fcb-9b10-b9ae878e13f9"

const movies = [
  {
    "title": "The Silent Echo",
    "overview": "Seorang ilmuwan menemukan sinyal misterius dari dasar laut yang mengubah persepsi manusia tentang waktu.",
    "releaseYear": 2023,
    "genres": ["Sci-Fi", "Mystery"],
    "runtime": 124,
    "posterUrl": "https://example.com/posters/silent-echo.jpg",
    "createdBy": userId
  },
  {
    "title": "Midnight in Jakarta",
    "overview": "Kisah perjalanan seorang kurir yang terjebak dalam konspirasi besar di tengah hiruk pikuk Jakarta.",
    "releaseYear": 2022,
    "genres": ["Action", "Thriller"],
    "runtime": 110,
    "posterUrl": "https://example.com/posters/midnight-jkt.jpg",
    "createdBy": userId
  },
  {
    "title": "Rhythm of the Heart",
    "overview": "Seorang pianis tuli berjuang untuk memenangkan kompetisi internasional demi impian ayahnya.",
    "releaseYear": 2024,
    "genres": ["Drama", "Music"],
    "runtime": 105,
    "posterUrl": "https://example.com/posters/rhythm-heart.jpg",
    "createdBy": userId
  },
  {
    "title": "Cyber Soul",
    "overview": "Di masa depan, kesadaran manusia bisa diunggah ke cloud, namun sebuah bug mengancam keberadaan mereka.",
    "releaseYear": 2025,
    "genres": ["Cyberpunk", "Sci-Fi"],
    "runtime": 135,
    "posterUrl": "https://example.com/posters/cyber-soul.jpg",
    "createdBy": userId
  },
  {
    "title": "The Last Harvest",
    "overview": "Perjuangan sebuah keluarga petani bertahan hidup di era krisis pangan global.",
    "releaseYear": 2021,
    "genres": ["Drama", "Survival"],
    "runtime": 98,
    "posterUrl": "https://example.com/posters/last-harvest.jpg",
    "createdBy": userId
  },
  {
    "title": "Beyond the Clouds",
    "overview": "Petualangan sekelompok anak muda menemukan pulau melayang yang tersembunyi selama ribuan tahun.",
    "releaseYear": 2023,
    "genres": ["Adventure", "Fantasy"],
    "runtime": 118,
    "posterUrl": "https://example.com/posters/beyond-clouds.jpg",
    "createdBy": userId
  },
  {
    "title": "Code Red",
    "overview": "Seorang hacker direkrut pemerintah untuk menghentikan serangan siber yang melumpuhkan ekonomi negara.",
    "releaseYear": 2022,
    "genres": ["Thriller", "Crime"],
    "runtime": 115,
    "posterUrl": "https://example.com/posters/code-red.jpg",
    "createdBy": userId
  },
  {
    "title": "Lentera Tua",
    "overview": "Misteri di balik sebuah mercusuar tua yang konon dihuni oleh penjaga yang sudah lama hilang.",
    "releaseYear": 2020,
    "genres": ["Horror", "Mystery"],
    "runtime": 92,
    "posterUrl": "https://example.com/posters/lentera-tua.jpg",
    "createdBy": userId
  },
  {
    "title": "Neon Dreams",
    "overview": "Persaingan sengit di dunia balap jalanan ilegal dengan mobil-mobil berteknologi tinggi.",
    "releaseYear": 2024,
    "genres": ["Action", "Sport"],
    "runtime": 108,
    "posterUrl": "https://example.com/posters/neon-dreams.jpg",
    "createdBy": userId
  },
  {
    "title": "The Chef's Secret",
    "overview": "Komedi romantis tentang seorang koki amatir yang secara tidak sengaja memenangkan hati kritikus makanan galak.",
    "releaseYear": 2023,
    "genres": ["Comedy", "Romance"],
    "runtime": 102,
    "posterUrl": "https://example.com/posters/chef-secret.jpg",
    "createdBy": userId
  }
]

const main = async () => {
    console.log("seeding movies...")

    for (const movie of movies){
        await prisma.movie.create({
            data: movie
        })
        console.log("Creating movie " + movie.title)
    }

    console.log("Successfully")
}

main()
.catch(e => {
    console.log(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})
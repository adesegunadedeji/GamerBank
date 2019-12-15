# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
20.times do
    Gamer.create(
      title: Faker::Game.title,
      genre: Faker::Game.genre,
      platform: Faker::Game.platform,
      image: Faker::Placeholdit.image(size: '50x50')
    )
  end
  
  puts "Seeded database"
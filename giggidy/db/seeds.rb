User.create(first_name: "justin", last_name: "phelps", email: "justin.phelps@gmail.com", latitude: 40.7064 , longitude: -74.0094, phone_number: 2068011207)
User.create(first_name: "zach", last_name: "karst", email: "zach@karst.co", latitude: 40.7064 , longitude: -74.0094, phone_number: 2127293997)
User.create(first_name: "ryan", last_name: "rebo", email: "ryanpatrickrebo@gmail.com", latitude: 40.7064 , longitude: -74.0094, phone_number: 4064614785)
User.create(first_name: "alex", last_name: "pan", email: "alexanderdavidpan@gmail.com", latitude: 40.7064 , longitude: -74.0094, phone_number: 8183379919)

[266, 76, 736, 1173, 9052, 1031, 303].each do |seatgeek_id|
  Favorite.create(user_id: 1, seatgeek_artist_id: seatgeek_id)
end


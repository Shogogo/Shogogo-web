require 'faker'
ARTIST_IDS = [266, 76, 736, 1173, 9052, 1031, 303]
EVENT_IDS = [2072626, 2180773, 2186152, 2152308]
CITIES = [{name:"ADK", lat: 51.88, lon: 176.65},
{name:"Z60", lat: 67.10, lon: -157.85},
{name:"ANC", lat: 61.17, lon: -150.02},
{name:"MRI", lat: 61.22, lon: -149.85},
{name:"AGN", lat: 57.83, lon: -134.97},
{name:"ANI", lat: 61.58, lon: -159.53},
{name:"ANN", lat: 55.03, lon: -131.57},
{name:"ATU", lat: 53.50, lon: -173.30},
{name:"BRW", lat: 71.30, lon: -156.78},
{name:"BTI", lat: 70.13, lon: -143.63},
{name:"BET", lat: 60.78, lon: -161.80},
{name:"BTT", lat: 66.92, lon: -151.52},
{name:"BIG", lat: 64.00, lon: -145.73},
{name:"5BI", lat: 60.82, lon: -152.30},
{name:"Z68", lat: 63.38, lon: -148.95},
{name:"CDE", lat: 56.00, lon: -134.22},
{name:"5HN", lat: 60.38, lon: -147.08},
{name:"CSP", lat: 58.33, lon: -137.05}]

# Create some artists
Artist.create(name: "Katy Perry", seatgeek_id: 1031)
Artist.create(name: "Billy Joel", seatgeek_id: 303)
Artist.create(name: "Red Hot Chili Peppers", seatgeek_id: 9052)
Artist.create(name: "Madonna", seatgeek_id: 1173)
Artist.create(name: "Fleetwood Mac", seatgeek_id: 736)
Artist.create(name: "Sheryl Crow", seatgeek_id: 76)
Artist.create(name: "Beastie Boys", seatgeek_id: 266)


#Users
User.create(name: "justin", latitude: 40.7064 , longitude: -74.0094, phone_number: "2068011207")
User.create(name: "zach", latitude: 40.7064 , longitude: -74.0094, phone_number: "2127293997")
User.create(name: "ryan", latitude: 40.7064 , longitude: -74.0094, phone_number: "4064614785")
User.create(name: "alex", latitude: 40.7064 , longitude: -74.0094, phone_number: "8183379919")

#User/Artist Favorites
2.times do 
	ARTIST_IDS.each do |seatgeek_id|
	  Favorite.create(
	  	user: User.all.sample, 
	  	artist: Artist.where(seatgeek_id: seatgeek_id).first)
	  # Favorite.create(user: User.all.sample, artist: Artist.find(seatgeek_id).first)
	end
end


#Events
20.times do 
	city = CITIES.sample
	Event.create(name: Faker::Company.bs,
							 datetime_local: DateTime.now + rand(1..60),
							 longitude: city[:lon],
							 latitude:  city[:lat],
							 seatgeek_id: EVENT_IDS.sample,
							 artist: Artist.all.sample,
							 ticket_url: Faker::Internet.url) 
end

notification

#will fix after next branch where associations will be fixed.
20.times do 
		Notification.create(
			user: User.all.sample,
			event: Event.all.sample)
end


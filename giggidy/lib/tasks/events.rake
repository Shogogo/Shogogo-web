namespace :events do

desc "Fetch events by artist ID"

	task :fetch_by_artist => :environment do
		Event.fetch_by_artists
	end

end

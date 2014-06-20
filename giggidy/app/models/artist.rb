class Artist < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :favorites
  has_many :events

  validates :name, :seatgeek_id, presence: true, uniqueness: true

  def self.seed_from_seatgeek
    (100..1000).each do |i|
      artistInfo = fetch_artist(i)
      if artistInfo['type'] == "band"
        Artist.create(name: artistInfo['name'],
              seatgeek_id: artistInfo['id'],
              image_url_small: artistInfo['images']['small'])
      end
    end
  end

  private

  def self.fetch_artist(artist_id)
    response = Net::HTTP.get(URI.parse("http://api.seatgeek.com/2/performers/#{artist_id}"))
    JSON.parse(response) 
  end

end
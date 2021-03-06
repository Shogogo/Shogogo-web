class Artist < ActiveRecord::Base
  has_many :favorites
  has_many :users, through: :favorites
  has_many :events

  validates :name, :seatgeek_id, presence: true, uniqueness: true

  def self.seed_from_seatgeek
    (31108..250000).each do |i|
      artistInfo = fetch_artist(i)
      if artistInfo['type'] == "band"
        Artist.where(name: artistInfo['name'],
              seatgeek_id: artistInfo['id'],
              image_url_small: artistInfo['images']['small']).first_or_create
      end
    end
  end

  private

  def self.fetch_artist(artist_id)
    response = Net::HTTP.get(URI.parse("http://api.seatgeek.com/2/performers/#{artist_id}"))
    JSON.parse(response) 
  end

end
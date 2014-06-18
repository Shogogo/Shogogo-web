class User < ActiveRecord::Base
	has_many :favorites
  has_many :artists, through: :favorites
  has_many :events, through: :artists
  
  validates :phone_number, presence: true, 
	uniqueness: true
	validates_format_of :phone_number, :with => /\A\d{10}\z/, message: "Only numbers allowed, i.e. 5551234567"
end


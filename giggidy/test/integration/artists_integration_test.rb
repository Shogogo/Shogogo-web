require "minitest_helper"

describe "Artists integration" do 
  it "shows artist's name" do
    artist = Artist.create!(name: "Fleetwood Mac")
    visit root_path
    page.text.must_include "Fleetwood Mac"
  end
  
end
require 'spec_helper'

feature "Artist search" do 
  scenario "user can see live search results", js: true do
    visit root_path

    find("#search_box").fill_in "artist-search", with: "Fleetwood"
    expect(page).to have_content("Fleetwood Mac")
  end
end
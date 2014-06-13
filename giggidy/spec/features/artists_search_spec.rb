require 'spec_helper'

feature "Artist search box" do 

  scenario "search box exists" do
    visit root_path
    expect(page).to have_css("#search_box")
  end

  scenario "user can see live search results", js: true do
    visit root_path

    fill_in "artist-search", with: "Fleetwood"
    expect(page).to have_content("Fleetwood Mac")
  end

  scenario "selects an artist", js: true do
    visit root_path
    fill_in "artist-search", with: "Fleetwood"

    page.execute_script %Q{ $('.fbs-item').first().trigger("mouseenter").click(); }
    expect(find_field('search_box').value).to eq "Fleetwood Mac"
  end

  scenario "renders artist bio"



end
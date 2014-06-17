# require 'spec_helper'

feature "Add artists to favorites" do 

	before :each, js: true do 
  	visit root_path
    fill_in "artist-search", with: "Fleetwood"
    sleep(1)
    page.execute_script %Q{ $('.fbs-item').first().trigger("mouseenter").click(); }
    sleep(1)
    click_button "Add+"
    sleep(1)
  end

  scenario "user adds a favorite artist", js: true do
    expect(page).to have_content('Notify Me')
    expect(page).to have_content('Fleetwood Mac')
    page.execute_script("sessionStorage.clear()")
  end

  scenario "artist snippet can be deleted", js: true do
    expect(page).to have_content('Fleetwood Mac')
    sleep(1)
    click_button('X')
    sleep(1)
  	expect(page).to_not have_content('Fleetwood Mac')
  end
end
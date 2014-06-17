require 'spec_helper'


feature "Add artists to favorites" do 

	# before :each, js: true do 
	# 	visit root_path
	# 	fill_in "artist-search", with: "Fleetwood"
 #    sleep(2)
 #    page.execute_script %Q{ $('.fbs-item').first().trigger("mouseenter").click(); }
 #    sleep(2)
 #    click_button "Add+"
	# end

  scenario "user adds a favorite artist", js: true do
  	visit root_path
		fill_in "artist-search", with: "Fleetwood"
    sleep(2)
    page.execute_script %Q{ $('.fbs-item').first().trigger("mouseenter").click(); }
    sleep(2)
    click_button "Add+"
    sleep(2)
  	expect(page).to have_css('#favorites_menu')
  	expect(page).to have_css('.favorites_band_item')
  	expect(page).to have_css('.favorites_save')
  end

  scenario "artist snippet contains name" do
  	expect(page).to have_css(".favorites_band_name")
	end


  scenario "artist snippet contains image" do
  	expect(page).to have_css('.favorites_band_image')
  end

  scenario "artist snippet can be deleted" do
  	expect(page).to have_css('.favorites_band_remove')
  	click_button 'X'
  	expect(page).to_not have_css('.favorites_band_image')
  end

end
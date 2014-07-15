require 'spec_helper'

feature "Artists favorite list" do 
  RSpec.configure do |config|
    config.order_groups_and_examples do |list|
      list.sort_by { |item| item.description }
    end
  end
  
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
    expect(page).to have_content('Notify Me!')
    expect(page).to have_content('Fleetwood Mac')
  end

  scenario "artist snippet can be deleted", js: true do
    expect(page).to have_content('Fleetwood Mac')
    sleep(1)
    click_button('X')
    sleep(1)
  	expect(page).to_not have_content('Fleetwood Mac')
  end

  scenario "user can register and logout", js: true do 
    click_button('Notify Me!')
    fill_in "name", with: "Test User"
    fill_in "phone_number", with: "2127293997"
    fill_in "password", with: "testpassword"
    click_button "Sign Me Up!"
    sleep(10)
    click_button "Logout"
    sleep(2)  
    expect(page).to have_content('Login')
  end
end

feature "User login" do
  scenario "user logs into app", js: true do
    visit root_path
    click_link "login_link"
    fill_in "phone_number", with: "2127293997"
    fill_in "password", with: "testpassword"
    click_button "Login"
    sleep(1)
    expect(page).to have_content('Fleetwood Mac')
  end
end
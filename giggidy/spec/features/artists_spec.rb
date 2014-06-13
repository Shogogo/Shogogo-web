require 'spec-helper'

module MenuSteps
  def search_box
    find("search_box")
  end
end


feature "Artist search" do 
  scenario "user can see live search results", js: true do
    visit root_path

    search_box.fill_in "artist-search", with: "Fleetwood"
    expect(page).to have_content ;


end
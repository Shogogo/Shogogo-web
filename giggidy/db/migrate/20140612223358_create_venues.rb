class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :url
      t.string :state
      t.integer :postal_code
      t.decimal :longitude
      t.decimal :latitude
    end
  end
end

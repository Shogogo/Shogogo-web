class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name  # No constraints, really?  That'll
      # be dope to normalize when filled with a bunch of NULLs :(
      t.string :last_name
      t.string :email
      t.float :latitude
      t.float :longitude
      t.string :phone_number
      t.boolean :wants_email
      t.boolean :wants_text
      t.timestamps
    end
  end
end

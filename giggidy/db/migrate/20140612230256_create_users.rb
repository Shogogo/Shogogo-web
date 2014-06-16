class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :email
      t.decimal :latitude
      t.decimal :longitude
      t.string :phone_number
      t.boolean :wants_email
      t.boolean :wants_text
      t.timestamps
    end
  end
end

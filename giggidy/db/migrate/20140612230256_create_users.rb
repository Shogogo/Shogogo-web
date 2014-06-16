class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :email
      t.decimal :latitude, {:precision=>10, :scale=>6}
      t.decimal :longitude, {:precision=>10, :scale=>6}
      t.string :phone_number
      t.boolean :wants_email
      t.boolean :wants_text
      t.timestamps
    end
  end
end

class Users < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :phone_number
      t.string :password_digest
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :address

      t.timestamps
    end
  end
end

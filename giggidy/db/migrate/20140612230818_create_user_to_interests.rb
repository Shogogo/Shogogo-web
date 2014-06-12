class CreateUserToInterests < ActiveRecord::Migration
  def change
    create_table :user_to_interests do |t|
      t.belongs_to :user, index: true
      t.belongs_to :event, index: true
    end
  end
end

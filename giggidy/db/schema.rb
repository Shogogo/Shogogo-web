# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140612230938) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "artist_to_events", force: true do |t|
    t.integer "artist_id"
    t.integer "event_id"
  end

  add_index "artist_to_events", ["artist_id"], name: "index_artist_to_events_on_artist_id", using: :btree
  add_index "artist_to_events", ["event_id"], name: "index_artist_to_events_on_event_id", using: :btree

  create_table "artists", force: true do |t|
    t.string  "name"
    t.string  "image_url"
    t.integer "seatgeek_id"
    t.string  "type"
  end

  create_table "events", force: true do |t|
    t.string   "title"
    t.string   "url"
    t.datetime "datetime_local"
    t.integer  "venue_id"
  end

  create_table "user_to_events", force: true do |t|
    t.integer "user_id"
    t.integer "event_id"
  end

  add_index "user_to_events", ["event_id"], name: "index_user_to_events_on_event_id", using: :btree
  add_index "user_to_events", ["user_id"], name: "index_user_to_events_on_user_id", using: :btree

  create_table "user_to_interests", force: true do |t|
    t.integer "user_id"
    t.integer "event_id"
  end

  add_index "user_to_interests", ["event_id"], name: "index_user_to_interests_on_event_id", using: :btree
  add_index "user_to_interests", ["user_id"], name: "index_user_to_interests_on_user_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "username"
    t.string   "password_digest"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.decimal  "latitude"
    t.decimal  "longitude"
    t.string   "phone_number"
    t.boolean  "wants_email"
    t.boolean  "wants_text"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "venues", force: true do |t|
    t.string  "name"
    t.string  "address"
    t.string  "city"
    t.string  "url"
    t.string  "state"
    t.integer "postal_code"
    t.decimal "longitude"
    t.decimal "latitude"
  end

end

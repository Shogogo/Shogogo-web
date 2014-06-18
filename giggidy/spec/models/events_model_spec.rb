require 'spec_helper'

describe Event do
  it { should belong_to(:artist) }
  
  it { should have_many(:notifications) }
  
  it { should have_many(:users).through(:artist) }

  it { should validate_presence_of(:name) }
  
  it { should validate_presence_of(:ticket_url) }
  
  it { should validate_uniqueness_of(:ticket_url) }
  
  it { should validate_presence_of(:datetime_local) }
  
  it { should validate_presence_of(:latitude) }

  it { should validate_presence_of(:longitude) }

  it { should validate_presence_of(:seatgeek_id) }
  
  it { should validate_uniqueness_of(:seatgeek_id) }
end
require 'spec_helper'

describe Artist do
	it { should have_many(:favorites) }

  it { should have_many(:events) }

  it { should have_many(:users).through(:favorites) }

  it { should validate_presence_of(:name) }
  
  it { should validate_uniqueness_of(:name) }
  
  it { should validate_presence_of(:seatgeek_id) }

  it { should validate_uniqueness_of(:seatgeek_id) }
end



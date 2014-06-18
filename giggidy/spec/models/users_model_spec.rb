require 'spec_helper'

describe User do
  it { should have_many(:favorites) }
  
  it { should have_many(:artists).through(:favorites) }
  
  it { should have_many(:events).through(:artists) }

  it { should validate_presence_of(:name) }
  
  it { should validate_presence_of(:phone_number) }
  
  it { should validate_uniqueness_of(:phone_number) }

  it { should allow_value('12223334444').for(:phone_number) }
  
  it { should_not allow_value('ab223334444').for(:phone_number) }
  
  it { should validate_presence_of(:latitude) }

  it { should validate_presence_of(:longitude) }

  it { should have_secure_password }
end
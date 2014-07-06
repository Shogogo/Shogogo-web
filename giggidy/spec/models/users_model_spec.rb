require 'spec_helper'

describe User do
  it { should have_many(:favorites) }
  
  it { should have_many(:artists).through(:favorites) }
  
  it { should have_many(:events).through(:artists) }

  it { should validate_presence_of(:latitude) }

  it { should validate_presence_of(:longitude) }

  it { should have_secure_password }

  context "if guest" do
    before { subject.stub(:eligible?) { false } }

    it { should allow_value(nil).for(:phone_number) }
  end

  context "if confirmed user" do
    before { subject.stub(:guest?) { false } }
    
    it { should validate_presence_of(:name) }
  
    # it { should validate_uniqueness_of(:phone_number) }

    it { should allow_value('+12223334444').for(:phone_number) }

    it { should_not allow_value('2223334567').for(:phone_number) }
  end
  
end
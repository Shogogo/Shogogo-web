require 'spec_helper'

describe Favorite do
  it { should belong_to(:artist) }
  
  it { should belong_to(:user) }

  it { should validate_presence_of(:artist) }
end
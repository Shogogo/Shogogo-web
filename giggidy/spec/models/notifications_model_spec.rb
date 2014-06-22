require 'spec_helper'

describe Notification do
  it { should belong_to(:event) }
  
  it { should belong_to(:user) }
  
  it { should validate_presence_of(:user) }
  
  it { should validate_presence_of(:event) }
    
  it { should validate_presence_of(:datetime_sent) }
end

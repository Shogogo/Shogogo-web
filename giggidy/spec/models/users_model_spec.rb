require 'spec_helper'

describe User do
	

	it "is valid with a phonenumber" do
	  user = User.new(
	    phone_number: '4511234567')
		expect(user).to be_valid 
	end
	  
	it "is invalid without a phonenumber" do
		expect(User.new(phone_number: nil)).to have(1).errors_on(:phone_number)
	end

	it "is invalid with a duplicate phonenumber" do 
		User.create(
    	phone_number: '5555555555')
  	user = User.new(
    	phone_number: '5555555555')
  	expect(user).to have(1).errors_on(:phone_number)
	end

	it "is valid with specific format of phonenumber" do
		user = User.new(
			phone_number: '5551233245')
		expect(user.phone_number).to match /^\d{10}$/ 
	end

	it "is not valid if phone is wrong format" do
		User.new(phone_number: 'A234567').should_not be_valid
	end

end





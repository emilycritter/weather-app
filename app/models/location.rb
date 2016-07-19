class Location < ActiveRecord::Base
  geocoded_by :user_input
  after_validation :geocode if :user_input
end

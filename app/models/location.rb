class Location < ActiveRecord::Base
  require 'forecast_io'
  require 'geocoder'
  require 'hashie'

  before_save :get_weather

  ForecastIO.configure do |configuration|
    configuration.api_key = 'd48a8d969d33a04febae75e317c173bb'
  end

  def get_weather
    geocode = Geocoder.search(self.location_input)
    if geocode != []
      coordinates = {latitude: geocode[0].latitude, longitude: geocode[0].longitude}
      response = ForecastIO.forecast(coordinates[:latitude].to_f, coordinates[:longitude].to_f).currently
      forecast = response.to_h.deep_symbolize_keys!
      self.result = forecast
    else
      self.result = nil
    end
  end
end

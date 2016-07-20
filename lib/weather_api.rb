require 'forecast_io'
require 'geocoder'
require 'hashie'

ForecastIO.configure do |configuration|
  configuration.api_key = 'd48a8d969d33a04febae75e317c173bb'
end

class WeatherApi
  def get_details(location_input)
    geocode = Geocoder.search(location_input)
    coordinates = {latitude: geocode[0].latitude, longitude: geocode[0].longitude}
    forecast = ForecastIO.forecast(coordinates[:latitude].to_f, coordinates[:longitude].to_f)
    @forecast = {
      currently: {
        apparentTemperature: forecast.currently.apparentTemperature,
        cloudCover: forecast.currently.cloudCover,
        dewPoint:  forecast.currently.dewPoint,
        humidity: forecast.currently.humidity,
        precipProbability: forecast.currently.precipProbability,
        summary: forecast.currently.summary,
        temperature: forecast.currently.temperature,
        visibility: forecast.currently.visibility,
        windBearing: forecast.currently.windBearing,
        windSpeed: forecast.currently.windSpeed
      }
    }
    @forecast.to_h
  end
end

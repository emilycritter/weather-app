class LocationsController < ApplicationController
  require 'geocoder'
  require 'httparty'

  def index
    location = Location.where(user: @current_user_ip).last
    if location && location.location_input.present? && location.result.present?
      @location = location
      @city = Geocoder.search(@location.location_input)[0].formatted_address.gsub(', USA', '')
      @currently = eval(@location.result)
    else
      @location = Location.first
    end
    @response = ''
  end

  def create
    @location = Location.new location_params
    @location.user = @current_user_ip
    if @location.geolocate
      @location.location_input = request.location.city.present? ? (request.location.city) : ("Fort Worth")

    end

    if @location.save
      redirect_to root_path
    else
      render root_path
    end
  end

  private

  def location_params
    params.require(:location).permit(:location_input, :geolocate)
  end
end

class LocationsController < ApplicationController
  require 'geocoder'

  def index
    location = Location.where(user: remote_ip).order(:updated_at).last
    if location && location.location_input.present? && location.result.present?
      @location = location
      @city = Geocoder.search(@location.location_input)[0].formatted_address.gsub(', USA', '')
      @currently = eval(@location.result)
    else
      @location = Location.first
    end
  end

  def create
    @location = Location.where(location_params, user: remote_ip).where('created_at >= ?', 5.minutes.ago).first_or_initialize
    @location.user = remote_ip
    if @location.geolocate
      @location.location_input = request.location.city.present? ? request.location.city : ("Fort Worth")
    end

    if @location.save
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  private

  def location_params
    params.require(:location).permit(:location_input, :geolocate)
  end
end

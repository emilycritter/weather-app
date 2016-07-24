class LocationsController < ApplicationController
  require 'geocoder'

  def index
    @location = Location.where(user: @currernt_user_ip).last
    # @location = Location.first
    @city = Geocoder.search(@location.location_input)[0].formatted_address
    @currently = eval(@location.result)
    @location.save
  end

  def create
    @location = Location.new location_params
    @location.user = @current_user_ip

    if @location.save
      redirect_to root_path
    else
      render root_path
    end
  end

  private

  def location_params
    params.require(:location).permit(:location_input)
  end
end

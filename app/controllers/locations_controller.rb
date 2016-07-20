class LocationsController < ApplicationController
  require 'geocoder'

  def index
    @location = Location.first
    @city = Geocoder.search(@location.location_input)[0].formatted_address
    @currently = eval(@location.result)
    @location.save
  end

  def create
    @location = Location.new location_params
    @location.user = current_user_ip

    if @location.save
      redirect_to :index
    else
      render :index
    end
  end

  private

  def location_params
    params.require(:location).permit(:user, :location_input, :result)
  end
end

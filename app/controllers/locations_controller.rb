class LocationsController < ApplicationController
  def index
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
    params.require(:location).permit(:user, :user_input, :latitude, :longitude, :result)
  end
end

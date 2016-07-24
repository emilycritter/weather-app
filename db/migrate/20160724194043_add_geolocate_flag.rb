class AddGeolocateFlag < ActiveRecord::Migration
  def change
    add_column :locations, :geolocate, :boolean, default: false
  end
end

class AddFieldsToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :user, :string
    add_column :locations, :user_input, :string
    add_column :locations, :latitude, :string
    add_column :locations, :longitude, :string
    add_column :locations, :result, :string
  end
end

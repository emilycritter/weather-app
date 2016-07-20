class AddFieldsToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :user, :string
    add_column :locations, :location_input, :string
    add_column :locations, :result, :string
  end
end

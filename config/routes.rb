Rails.application.routes.draw do
  root 'locations#index'

  get 'locations' => 'locations#index', as: :location
  post 'locations' => 'locations#create', as: :location_new
end

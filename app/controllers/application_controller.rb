class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    session[:user_ip] = "IP: #{request.remote_ip}"
    @current_user_ip = session[:user_ip]
  end
end

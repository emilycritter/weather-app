class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  def remote_ip
    if request.remote_ip == '127.0.0.1' || request.remote_ip == '::1'
      '123.45.67.89'
    else
      request.remote_ip
    end
  end

  def current_user
    session[:user_ip] = remote_ip
    @current_user_ip = session[:user_ip]
  end
end

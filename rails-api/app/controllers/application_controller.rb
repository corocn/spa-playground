class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  def current_user
    User.find(session[:user_id])
  rescue ActiveRecord::RecordNotFound
    session[:user_id] = nil
    nil
  end

  def authenticate
    if current_user.blank?
      render json: {}, status: :unauthorized
    end
  end

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      # domain: '',
      value: form_authenticity_token,
    }
  end
end

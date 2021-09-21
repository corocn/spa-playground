class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :exception

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      domain: 'corocn-dev.jp.ngrok.io',
      value: form_authenticity_token,
    }
  end
end

class SessionsController < ApplicationController
  def show
    set_csrf_token
    render json: {}, status: :ok
  end

  def set_csrf_token
    cookies['CSRF-TOKEN'] = {
      value: form_authenticity_token
    }
  end
end

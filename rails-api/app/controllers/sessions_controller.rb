class SessionsController < ApplicationController
  skip_forgery_protection

  def create
    # ログイン作らないので仮実装
    session[:user_id] = User.first.id
    render json: current_user || {}, status: :ok
  end

  def show
    set_csrf_token
    render json: current_user || {}, status: :ok
  end

  def destroy
    reset_session
    render json: {}, status: :ok
  end
end

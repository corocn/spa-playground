Rails.application.routes.draw do
  resource :sessions

  namespace :api do
    resources :users
    resources :posts
  end
end

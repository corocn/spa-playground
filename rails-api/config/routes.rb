Rails.application.routes.draw do
  resource :sessions, only: [:show]

  namespace :api do
    resources :users
    resources :posts
  end
end

Rails.application.routes.draw do
  resources :users
  resource :sessions, only: [:show]

  namespace :api do
    resources :posts
  end
end

Rails.application.routes.draw do
  resource :sessions, only: [:show]

  namespace :api do
    resources :posts
  end
end

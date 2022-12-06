Rails.application.routes.draw do
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :users, only: [:index]
  resources :appointments

  post "/auth/signup", to: "users#create" 
  post "/auth/login", to: "sessions#create"
  delete "/auth/logout", to: "sessions#destroy"
end

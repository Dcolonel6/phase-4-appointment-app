Rails.application.routes.draw do
  
  resources :doctor_availabilities
  resources :appointments
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users, only: [:index]
  resources :appointments

  post "/auth/signup", to: "users#create" 
  post "/auth/signin", to: "sessions#create"
  delete "/auth/logout", to: "sessions#destroy"
end

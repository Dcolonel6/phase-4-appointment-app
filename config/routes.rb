Rails.application.routes.draw do
  
  resources :doctor_availabilities
  resources :appointments
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :users, only: [:index, :show]


  post "/auth/signup", to: "users#create" 
  post "/auth/signin", to: "sessions#create"
  delete "/auth/logout", to: "sessions#destroy"

  #users
  get "/doctors", to: "users#doctors"

  #appointments
  get "/doctor-appointments/:id", to: "appointments#appointment_doctors"
  get "/patient-appointments/:id", to: "appointments#appointment_patients"
end

Rails.application.routes.draw do
  mount Loco::Engine => '/notification-center'

  root to: "chat#show"

  get  "/login", to: "auth#new"
  post "/login", to: "auth#create"
end

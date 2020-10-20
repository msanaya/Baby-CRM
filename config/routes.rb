Rails.application.routes.draw do


  resources :sales_order_products
  resources :products
  resources :customers
  Rails.application.routes.draw do
  resources :sales_order_products
  resources :products
  resources :customers
    post '/auth/login', to: 'authentication#login'
    get '/auth/verify', to: 'authentication#verify'
    resources :salespeople
  end
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

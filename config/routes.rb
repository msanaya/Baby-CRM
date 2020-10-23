Rails.application.routes.draw do

## PRODUCTS ROUTES ##
#ALL
get '/products/' => 'products#index'
# no post because I don't want the edit function on products...just yet
#SINGLE
get '/products/:id', to: 'products#show'





resources :sales_orders do
  resources :products
end

  resources :sales_orders
  resources :sales_order_products
  resources :products
  resources :customers
  Rails.application.routes.draw do
  resources :sales_order_products
  resources :products
  resources :customers

    post '/auth/login' => 'authentication#login'
    get '/auth/verify' => 'authentication#verify'
    resources :salespeople
  end

#   Why is the rails community switching to the ":" notation (or are they)?
# Just a more readable, 'from' => 'to' and 'from', to: 'to'


 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do

## AUTH ##
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'

## PRODUCTS ROUTES ##
#ALL
get '/products/', to: 'products#index'
# no post because I don't want the edit function on products...just yet
#SINGLE
get '/products/:id', to: 'products#show'

## CUSTOMERS ROUTES ##
#ALL
get '/customers/', to: 'customers#index'
post '/customers/', to: 'customers#create'
#SINGLE
get '/products/:id', to: 'products#show'

## SALESPEOPLE ROUTES ##
#ALL
get '/salespeople/', to: 'salespeople#index'
post '/salespeople/', to: 'salespeople#create'
#SINGLE
get '/salespeople/:id', to: 'salespeople#show'

## SALESORDERS ROUTES ##
#ALL
get '/sales_orders/', to: 'sales_orders#index'
post '/sales_orders/', to: 'sales_orders#create'
#SINGLE
get '/sales_orders/:id', to: 'sales_orders#show'
put '/sales_orders/:id', to: 'sales_orders#update'
delete '/sales_orders/:id', to: 'sales_orders#destroy'




## can't remember why I added this
resources :sales_orders do
  resources :products
end
##

  resources :sales_orders
  resources :sales_order_products
  resources :products
  resources :customers

  Rails.application.routes.draw do
  resources :sales_order_products
  resources :products
  resources :customers
  resources :salespeople
  end

#   Why is the rails community switching to the ":" notation (or are they)?
# Just a more readable, 'from' => 'to' and 'from', to: 'to'


 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

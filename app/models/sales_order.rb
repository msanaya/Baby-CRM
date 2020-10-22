class SalesOrder < ApplicationRecord
  has_one :salesperson
  has_one :customer
  has_many :product


  # SalesOrder.find_or_create_by(name: 'variable with user input') https://apidock.com/rails/v4.0.2/ActiveRecord/Relation/find_or_create_by
end

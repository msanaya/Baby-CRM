class Customer < ApplicationRecord
  has_many :sales_orders

 

  validates :name, 
    :presence => true, 
    :uniqueness => true

  validates :address, 
    :presence => true, 
    :uniqueness => true

end

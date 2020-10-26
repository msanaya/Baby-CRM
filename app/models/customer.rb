class Customer < ApplicationRecord
  has_many :sales_orders

 

  validates :name, 
    :presence => true
    

  validates :address, 
    :presence => true
    

end

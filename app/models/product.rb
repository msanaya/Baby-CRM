class Product < ApplicationRecord
  # belongs_to :sales_order
  has_many :sales_orders_products
  has_many :sales_orders, :through => :sales_orders_products


  validates :name, 
    :presence => true, 
    :uniqueness => true

  validates :description, 
    :presence => true

  validates :qty, 
    :presence => true
  

  validates :price, 
    :presence => true
  

  validates :img, 
    :allow_blank => true, 
    :uniqueness => true

end

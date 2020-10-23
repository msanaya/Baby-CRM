class Product < ApplicationRecord
  # belongs_to :sales_order
  has_and_belongs_to_many :sales_orders, :through => sales_order_products


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

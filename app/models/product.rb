class Product < ApplicationRecord
  belongs_to :sales_order

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

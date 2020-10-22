class Customer < ApplicationRecord
  belongs_to :sales_order

  validates :name, 
    :presence => true, 
    :uniqueness => true

  validates :address, 
    :presence => true, 
    :uniqueness => true

end

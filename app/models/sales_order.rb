class SalesOrder < ApplicationRecord
  belongs_to :salesperson
  belongs_to :customer
  has_many :sales_orders_products
  has_many :products, :through => :sales_orders_products, dependent: :delete_all

  def find_or_create_customer (customer_id)
    begin
      SalesOrder.find_or_create_by(customer_id)
    rescue ActiveRecord::RecordNotUnique
      retry
    end
  end
  


# validates :salesperson_id,
#   # :presence => true,
#   # :allow_nil => true, 
#   :uniqueness => true

# validates :customer_id,
#   # :presence => true,
#   # :allow_nil => true, 
#   :uniqueness => true

# validates :product_id,
#   # :presence => true,
#   # :allow_nil => true, 
#   :uniqueness => true

validates :status,
  :presence => true
end



  # SalesOrder.find_or_create_by(name: 'variable with user input') https://apidock.com/rails/v4.0.2/ActiveRecord/Relation/find_or_create_by


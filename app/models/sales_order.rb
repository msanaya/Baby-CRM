class SalesOrder < ApplicationRecord
  belongs_to :salesperson
  belongs_to :customer
  belongs_to :product
end

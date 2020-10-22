class Salesperson < ApplicationRecord
  has_secure_password
  has_many :sales_order

  validates :salesperson_name, 
    :presence => true, 
    :uniqueness => true

  validates :salesperson_username, 
    :presence => true, 
    :uniqueness => true

  validates :email, 
    :presence => true, 
    :uniqueness => true
    :format => { with: URI::MailTo::EMAIL_REGEXP }

  validates :password, 
    :presence => true,
    :confirmation => true,
    :length => { minimum: 6 }
end

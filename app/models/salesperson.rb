class Salesperson < ApplicationRecord
  has_secure_password
  has_many :sales_orders

  validates :name, 
    :presence => true, 
    :uniqueness => true

  validates :username, 
    :presence => true, 
    :uniqueness => true

  validates :email, 
    :presence => true, 
    :uniqueness => true,
    :format => { with: URI::MailTo::EMAIL_REGEXP }

  validates :password, 
    :presence => true,
    :confirmation => true,
    :length => { minimum: 6 }
end

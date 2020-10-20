class CreateSalespeople < ActiveRecord::Migration[6.0]
  def change
    create_table :salespeople do |t|
      t.serial :salesperson_id
      t.string :salesperson_username
      t.string :salesperson_name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end

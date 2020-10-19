class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.serial :user_id
      t.string :customer_name
      t.string :customer_address

      t.timestamps
    end
  end
end

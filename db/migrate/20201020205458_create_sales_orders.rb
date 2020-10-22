class CreateSalesOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :sales_orders do |t|
      t.references :salesperson, null: false, foreign_key: true
      t.references :customer, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end

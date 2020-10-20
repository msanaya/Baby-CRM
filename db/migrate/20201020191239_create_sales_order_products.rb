class CreateSalesOrderProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :sales_order_products do |t|
      t.references :sales_order, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.int :product_qty

      t.timestamps
    end
  end
end

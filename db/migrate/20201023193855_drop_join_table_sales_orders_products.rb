class DropJoinTableSalesOrdersProducts < ActiveRecord::Migration[6.0]
  def change
    drop_join_table :sales_orders, :products 
    create_table :sales_orders_products do |t|
      t.references :sales_order, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.integer :qty 

      t.timestamps
    end
  end
end

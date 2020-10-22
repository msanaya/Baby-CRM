class CreateJoinTableSalesOrdersProducts < ActiveRecord::Migration[6.0]
  def change
    create_join_table :sales_orders, :products do |t|
      # t.index [:sales_order_id, :product_id]
      # t.index [:product_id, :sales_order_id]
    end
  end
end

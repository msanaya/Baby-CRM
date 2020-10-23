class RemoveProductIdFromSalesOrders < ActiveRecord::Migration[6.0]
  def change
    remove_column :sales_orders, :product_id, :references, null: false
  end
end




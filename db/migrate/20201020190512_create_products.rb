class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.serial :product_id
      t.string :product_name
      t.string :product_description
      t.int :product_qty
      t.decimal :product_price
      t.string :product_img

      t.timestamps
    end
  end
end

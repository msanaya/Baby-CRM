class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.integer :qty
      t.decimal :price
      t.string :img

      t.timestamps
    end
  end
end

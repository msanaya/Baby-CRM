class CreateSalespeople < ActiveRecord::Migration[6.0]
  def change
    create_table :salespeople do |t|
      t.string :username
      t.string :name
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all
SalesOrder.destroy_all
Salesperson.destroy_all
Customer.destroy_all

SalesOrder.create!( salesperson_id: 1, customer_id: 2, product_id: 1, status: "Submitted")

Customer.create!(name: "Derek Barker", address: "123 Main St, New York, New York, 27701")


Salesperson.create!(username: "pilar01", name: "Pilar Barker", email: "pbarkerit@gmail.com", password: "holahola")





Product.create!(name: 'Home Sweet Home Door Hanger', description: 'This “Home Sweet Home” door hanger sign creates a warm welcome for your guests. Finished off with frosty greenery and a bow. Height: 18 Inches; Width: 18 Inches Wood is weathered sealed so that it is suitable for outdoor use. Ribbon colors and styles may vary depending on availability.', qty: 20, price: 59.99,img: 'https://i.etsystatic.com/9950666/r/il/a324f9/2179851241/il_794xN.2179851241_g09d.jpg')



# Product.create(name: 'Macrame Tassels Wall Decor', description: 'Can be decorated in a variety of areas, colors and styles are versatile
# Soft cotton material, hand-woven, fine workmanship. Material: Cotton rope + natural wooden stick. Width: 45cm Height: 70cm. Wooden stick ：55cm. Tassels macrame wall hanging,macrame wall decor, Crochet cotton bedroom backdrop, bedroom interior decor, home decor, bedroom wall decor.', qty: 8, price: 44.10,img: 'https://i.etsystatic.com/22942553/r/il/e4a79b/2440234227/il_794xN.2440234227_6lct.jpg' )

# Product.create(name: 'Remote Holder Box', description: 'Handcrafted mini wooden box, perfect for holding those remotes! I use mine on the coffee table, matches my farmhouse decor perfectly. Perfect housewarming gift!', qty: 18, price: 14.99, img: 'https://i.etsystatic.com/13189316/r/il/bdc39f/2512544497/il_794xN.2512544497_fsxs.jpg')

# Product.create(name: 'Himmeli Wall Sconce Air Plant Hanger', description: 'This “Home Sweet Home” door hanger sign creates a warm welcome for your guests. Finished off with frosty greenery and a bow. Height: 18 Inches; Width: 18 Inches Wood is weathered sealed so that it is suitable for outdoor use. Ribbon colors and styles may vary depending on availability.', qty: 20, price: 59.99,img: 'https://i.etsystatic.com/9950666/r/il/a324f9/2179851241/il_794xN.2179851241_g09d.jpg' )







puts "#{Product.count} products created!"
puts "#{Salesperson.count} salespeople created!"
puts "#{SalesOrder.count} sales orders created!"
puts "#{Customer.count} customers created!"
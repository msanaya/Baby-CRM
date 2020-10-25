# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

SalesOrder.destroy_all
Product.destroy_all
Salesperson.destroy_all
Customer.destroy_all




@customer = Customer.create!(name: "Derek Barker", address: "123 Main St, New York, New York, 27701")


@salesperson = Salesperson.create!(username: "pilar01", name: "Pilar Barker", email: "pbarkerit@gmail.com", password: "holahola")



@product = Product.create!(name: 'Home Sweet Home Door Hanger', description: 'This “Home Sweet Home” door hanger sign creates a warm welcome for your guests. Finished off with frosty greenery and a bow. Height: 18 Inches; Width: 18 Inches Wood is weathered sealed so that it is suitable for outdoor use. Ribbon colors and styles may vary depending on availability.', qty: 20, price: 59.99,img: 'https://i.etsystatic.com/9950666/r/il/a324f9/2179851241/il_794xN.2179851241_g09d.jpg')

SalesOrder.create!( salesperson:@salesperson, customer:@customer, products:[@product], status: "Submitted")


Product.create(name: 'Macrame Tassels Wall Decor', description: 'Can be decorated in a variety of areas, colors and styles are versatile
Soft cotton material, hand-woven, fine workmanship. Material: Cotton rope + natural wooden stick. Width: 45cm Height: 70cm. Wooden stick ：55cm. Tassels macrame wall hanging,macrame wall decor, Crochet cotton bedroom backdrop, bedroom interior decor, home decor, bedroom wall decor.', qty: 8, price: 44.10,img: 'https://i.etsystatic.com/22942553/r/il/e4a79b/2440234227/il_794xN.2440234227_6lct.jpg' )

Product.create(name: 'Remote Holder Box', description: 'Handcrafted mini wooden box, perfect for holding those remotes! I use mine on the coffee table, matches my farmhouse decor perfectly. Perfect housewarming gift!', qty: 18, price: 14.99, img: 'https://i.etsystatic.com/13189316/r/il/bdc39f/2512544497/il_794xN.2512544497_fsxs.jpg')

Product.create(name: 'Himmeli Wall Sconce Air Plant Hangerr', description: 'Handmade Disclaimer: All of my products are individually hand made, they are one of a kind creations and not factory manufactured. As a result products will have subtle variations from one piece to the next. The images, descriptions and measurements you will find on my site have been used to best portray the products I sell. If you do have any questions or queries regarding this please feel free to message me.', qty: 28, price: 49.99,img: 'https://i.etsystatic.com/24562843/r/il/a8cba7/2552435041/il_794xN.2552435041_23g6.jpg')







puts "#{Product.count} products created!"
puts "#{Salesperson.count} salespeople created!"
puts "#{SalesOrder.count} sales orders created!"
puts "#{Customer.count} customers created!"
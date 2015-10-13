require_relative 'package'

orlando = Hotel.new('Orlando 5 dias')
orlando.daily_price= 2000.00
orlando.dailies= 2
orlando = Flight.new(orlando)
orlando = Transfer.new(orlando)
puts orlando.description
puts orlando.price

Dir["./pizza_stores/*.rb"].each {|file| require file }

ny = NYPizzaStore.new
pizza_cheese_ny = ny.create_pizza('cheese')
pizza_cheese_ny = ny.create_pizza('veggie')

chicago = ChicagoPizzaStore.new
pizza_cheese_chicago = chicago.create_pizza('cheese')
pizza_cheese_chicago = chicago.create_pizza('veggie')

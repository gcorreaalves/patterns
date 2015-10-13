require_relative 'pizza_store'

require_relative './../ingredient/ingredient_chicago'
require_relative './../pizzas/cheese'
require_relative './../pizzas/veggie'

class ChicagoPizzaStore < PizzaStore

  @ingredient = IngredientPizzaChicago.new

  def create_pizza(pizza)
    if pizza == 'cheese'
      @pizza = CheesePizza.new("Cheese Pizza from Chicago", @ingredient)
    elsif pizza == 'veggie'
      @pizza = VeggiePizza.new("Veggie Pizza from Chicago", @ingredient)
    end
    @pizza.prepare()
  end
end

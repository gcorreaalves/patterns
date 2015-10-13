require_relative 'pizza_store'

require_relative './../ingredient/ingredient_ny'
require_relative './../pizzas/cheese'
require_relative './../pizzas/veggie'

class NYPizzaStore < PizzaStore

  @ingredient = IngredientPizzaNY.new

  def create_pizza(pizza)
    if pizza == 'cheese'
      @pizza = CheesePizza.new("Cheese Pizza from NY", @ingredient)
    elsif pizza == 'veggie'
      @pizza = VeggiePizza.new("Veggie Pizza from NY", @ingredient)
    end
    @pizza.prepare()
  end
end

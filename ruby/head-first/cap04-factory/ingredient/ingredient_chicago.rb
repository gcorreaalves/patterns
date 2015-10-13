require_relative '../factories/ingredient'
require_relative 'cheese'
require_relative 'sauce'

class IngredientPizzaChicago < IngredientPizzaFactory

  def create_cheese
    cheese = Cheese.new
    puts 'cheese from ch'
  end

  def create_sauce
    sauce = Sauce.new
    puts 'sauce from ch'
  end

end

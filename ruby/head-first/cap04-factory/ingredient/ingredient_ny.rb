require_relative '../factories/ingredient'
require_relative 'cheese'
require_relative 'sauce'

class IngredientPizzaNY < IngredientPizzaFactory

  def create_cheese
    cheese = Cheese.new
    puts 'cheese from ny'
  end

  def create_sauce
    sauce = Sauce.new
    puts 'sauce from ny'
  end

end

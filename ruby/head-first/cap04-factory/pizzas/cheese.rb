require_relative 'pizza'

class CheesePizza < Pizza
  def prepare
    puts "Pizza: #{name}"
    bake()
    cut()
    box()
  end
end

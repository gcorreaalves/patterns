require_relative 'pizza'

class VeggiePizza < Pizza
  def prepare
    puts "Pizza: #{name}"
    bake()
    cut()
    box()
  end
end

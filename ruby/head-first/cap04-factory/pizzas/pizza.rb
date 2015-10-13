class Pizza

  attr_accessor :name
  attr_accessor :ingredient

  def initialize(name, ingredient)
    @name = name
    @ingredient = ingredient
  end

  def prepare; end

  def bake
    puts "Assar por 25 minutos a 350 graus"
  end

  def cut
    puts "Cortar a pizza em fatias"
  end

  def box
    puts "Colocar na caixa"
  end

end

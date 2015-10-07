require_relative 'observer'

class Reader < Observer
  @name = nil
  def initialize(name)
    @name = name
  end

  def subscribe(type, observable)
    observable.subscribe(type, self)
  end

  def update(observable, data)
    puts "#{@name} recieving #{data} from #{observable.getName()}"
  end
end

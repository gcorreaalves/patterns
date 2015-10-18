module Animal
  extend self

  def adapter
    return @adapter if @adapter
  end

  def adapter=(adapter_name)
    case adapter_name
    when Symbol, String
      require_relative "adapters/#{adapter_name}"
      @adapter = Animal::Adapters.const_get("#{adapter_name.to_s.capitalize}")
    else
      raise "Missing adapter #{adapter_name}"
    end
  end

  def move
    adapter.move()
  end
end

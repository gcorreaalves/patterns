class Observable

  def initialize(name)
    @observers = {
      any: []
    }
  end

  def subscribe(type, observer)
    type = type_to_sym(type)
    @observers[type] = [] unless @observers[type]
    @observers[type] << observer
  end

  def unsubscribe(type, observer)
    type = type_to_sym(type)
    @observers[type].delete(observer)
  end

  def notify(type, data)
    type = type_to_sym(type)
    @observers[type].each do |observer|
      observer.update(self, data)
    end
  end

  private

  def type_to_sym(type)
    if (type)
      type.to_sym
    else
      :any
    end
  end
end

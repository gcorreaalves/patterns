class PackageItem

  attr_accessor :description
  attr_accessor :price

  def initialize(description)
    @description = description
  end

end

class Hotel < PackageItem

  attr_accessor :dailies
  attr_accessor :daily_price

  def initialize(description)
    super
    @dailies = 1
    @daily_price = 1000.00
  end

  def dailies=(dailies)
    @dailies = dailies if dailies > 0
  end

  def daily_price=(price)
    @daily_price = price if price > 0
  end

  def price
    return @daily_price * @dailies
  end

end

class Flight < PackageItem

  attr_accessor :item

  def initialize(item)
    super(nil)
    @item = item
  end

  def description
    return @item.description() + ', Voo partindo do Rio de Janeiro'
  end

  def price
    return @item.price() + 200
  end

end

class Transfer < PackageItem

  attr_accessor :item

  def initialize(item)
    super(nil)
    @item = item
  end

  def description
    return @item.description() + ', Translado Aeroporto Hotel / Hotel Aeroporto'
  end

  def price
    return @item.price() + 100
  end

end

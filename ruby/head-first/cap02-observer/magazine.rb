require_relative 'observable'

class Magazine < Observable
  @name = nil
  def initialize(name)
    super
    @name = name
  end

  def getName
    @name
  end

  def daily
    notify('daily', 'braking new daily')
  end

  def monthly
    notify('monthly', 'braking new monthly')
  end
end

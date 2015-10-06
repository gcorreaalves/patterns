class Character

  # Instance variable to use another object as composition
  @weapon = nil

  # Allow to set a new weapon in instantiation
  def initialize(weapon)
    @weapon = weapon
  end

  # Method to be overwrite by children implemetation
  def fight
    return nil
  end
end

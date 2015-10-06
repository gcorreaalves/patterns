require_relative 'character'

class Queen < Character

  # Allow to set a new weapon in execution time.
  def setWeapon weapon
    @weapon = weapon
  end

  # Overwrite parent method
  def setWeapon weapon
    @weapon = weapon
  end
  def fight
    puts 'Queen'
    @weapon.getWeapon()
  end
end

require_relative 'character'

class Knight < Character

  # Allow to set a new weapon in execution time.
  def setWeapon weapon
    @weapon = weapon
  end

  # Overwrite parent method
  def setWeapon weapon
    @weapon = weapon
  end
  def fight
    puts 'Knight'
    @weapon.getWeapon()
  end
end

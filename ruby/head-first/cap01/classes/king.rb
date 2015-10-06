require_relative 'character'

class King < Character

  # Allow to set a new weapon in execution time.
  def setWeapon weapon
    @weapon = weapon
  end

  # Overwrite parent method
  def fight
    puts 'King'
    @weapon.getWeapon()
  end
end

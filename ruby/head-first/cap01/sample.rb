require_relative 'modules/weapon'
Dir["./classes/*.rb"].each {|file| require file }

king = King.new(Weapon::Sword.new)
king.fight()

knight = Knight.new(Weapon::BowAndArrow.new)
knight.fight()

queen = Queen.new(Weapon::NotWeapon.new)
queen.fight()

require_relative 'animal'

Animal.adapter= :fish
Animal.move
Animal.adapter= :reptile
Animal.move
Animal.adapter= :bird
Animal.move

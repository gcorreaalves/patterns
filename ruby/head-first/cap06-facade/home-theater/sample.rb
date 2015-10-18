Dir["./classes/*.rb"].each {|file| require file }
require_relative 'facades/home_theater'

projector = Projector.new
dvd = DVD.new
amplifier = Amplifier.new
light = Light.new
popcorn = Popcorn.new

hometheater = HomeTheaterFacade.new(projector, dvd, amplifier, light, popcorn)
hometheater.watch_movie("Matrix")

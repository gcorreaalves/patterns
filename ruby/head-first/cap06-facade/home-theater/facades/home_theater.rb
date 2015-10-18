class HomeTheaterFacade
  def initialize(projector, dvd, amplifier, light, popcorn)
    @projector = projector
    @dvd = dvd
    @amplifier = amplifier
    @light = light
    @popcorn = popcorn
  end
  def watch_movie(movie)
    @projector.open
    @dvd.on
    @dvd.set_amplifier(@amplifier)
    @dvd.play = movie
    @light.turn_on
    @popcorn.prepare
    @popcorn.serve
  end
end

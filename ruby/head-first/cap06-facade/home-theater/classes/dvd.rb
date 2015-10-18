class DVD
  def on
    puts "Turn on the DVD"
  end
  def off
    puts "Turn off the DVD"
  end
  def set_amplifier(amplifier)
    @amplifier = amplifier
  end
  def play=(movie)
    puts "Play movie #{movie}"
    @amplifier.play = movie
  end
  def stop
    puts "Stop"
  end
end

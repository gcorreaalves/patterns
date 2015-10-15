require 'singleton'

class SingletonLogger
  include Singleton

  attr_reader :output

  def initialize
    @output = []
  end

  def info(message)
    output << formatted_message(message, 'INFO')
  end

  def warn(message)
    output << formatted_message(message, 'WARNING')
  end

  def error(message)
    output << formatted_message(message, 'ERROR')
  end

  def write(filename)
    File.open(filename, "w"){ |f| f << output.join("\n")}
  end

  private

  def formatted_message(message, type)
    "#{Time.now} | #{type}: #{message}"
  end

end

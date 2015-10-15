require_relative 'singleton-using-module'

singleton = SingletonLogger.instance
singleton.info('Info testing...')
singleton.warn('Warn testing...')
singleton.error('Error testing...')
puts singleton.output
singleton.write("log.txt")

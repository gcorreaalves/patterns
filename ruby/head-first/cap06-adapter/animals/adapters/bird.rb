module Animal
  module Adapters
    module Bird
      extend self
      def move
        puts 'Fly...'
      end
    end
  end
end

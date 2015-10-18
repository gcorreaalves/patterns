module Animal
  module Adapters
    module Fish
      extend self
      def move
        puts 'Swim...'
      end
    end
  end
end

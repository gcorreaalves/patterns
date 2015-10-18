require_relative '../classes/own_storage'

module Upload
  module Adapters
    module OwnStorage
      extend self
      @storage = Own.new
      def upload(file)
        @storage.upload(file)
      end
    end
  end
end

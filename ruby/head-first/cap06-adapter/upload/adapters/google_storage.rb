require_relative '../classes/google_storage'

module Upload
  module Adapters
    module GoogleStorage
      extend self
      @storage = GCloud.new

      def upload(file)
        @storage.insert_file(file)
      end
    end
  end
end

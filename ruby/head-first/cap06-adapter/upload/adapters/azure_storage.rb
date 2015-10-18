require_relative '../classes/azure_storage'

module Upload
  module Adapters
    module AzureStorage
      extend self
      @storage = Azure.new

      def upload(file)
        @storage.create_block_blob(file)
      end
    end
  end
end

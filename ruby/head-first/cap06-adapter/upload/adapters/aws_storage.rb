require_relative '../classes/aws_s3'

module Upload
  module Adapters
    module AwsStorage
      extend self
      @storage = AwsS3.new

      def upload(file)
        @storage.store(file)
      end
    end
  end
end

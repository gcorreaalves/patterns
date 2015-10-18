class AwsS3
  def store(file)
    file_name = File.basename file
    puts "Uploading #{file_name} to S3..."
  end
end

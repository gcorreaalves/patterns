class GCloud
  def insert_file(file)
    file_name = File.basename file
    puts "Uploading #{file_name} to Google Cloud Storage..."
  end
end

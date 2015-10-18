class Azure
  def create_block_blob(file)
    file_name = File.basename file
    puts "Uploading #{file_name} to Azure..."
  end
end

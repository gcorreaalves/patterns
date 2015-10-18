class Own
  def upload(file)
    file_name = File.basename file
    puts "Uploading #{file_name} to own storage..."
  end
end

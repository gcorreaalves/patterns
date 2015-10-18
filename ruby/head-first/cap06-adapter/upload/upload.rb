module Upload
  extend self

  def adapter
    return @adapter if @adapter
    @adapter = :aws
    @adapter
  end

  def adapter=(adapter_name)
    case adapter_name
    when Symbol, String
      adapter_file = "#{adapter_name.to_s}_storage"
      adapter_constant = "#{adapter_name.to_s.capitalize}Storage"
      require_relative "adapters/#{adapter_file}"
      @adapter = Upload::Adapters.const_get(adapter_constant)
    else
      raise "Missing adapter #{adapter_name}"
    end
  end

  def send_file(file)
    adapter.upload(file)
  end

end

module Configuration
  CONFIG_FILE = "package.json"

  def from_json(file_path)
    require 'json'
    JSON.parse(File.read(file_path))
  end

  def read()
    from_json(CONFIG_FILE) if File.file?(CONFIG_FILE)
  end
end

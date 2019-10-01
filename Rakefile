require_relative "tasks/config"
include Configuration
config = Configuration.read()

import "./tasks/add.rake"
import "./tasks/clean.rake"

NPM_DIR = "./node_modules"
NPM_BIN = "#{NPM_DIR}/.bin"

desc "Builts the Kit: #{config['version']} -> build"
task :default => ["build"]

desc "Version bumping"
task "bump", [:version] => ["build"] do |t, args|
  config['version'] = args[:version] if args[:version];

  File.write(
    "package.json",
    JSON.pretty_generate(config)
  )

  sh %{
    git commit -am "Version stamp #{config['version']}";
    git branch --show-current | git push origin $1
  }
end

desc "Builts the Kit: src -> build"
task "build" => ["test", "sass", "doc"]

desc "Compiles SCSS files src/index.scss -> build/kit.css"
task "sass" => ['clean:build'] do
  command = "#{NPM_BIN}/node-sass"
  flags   = "--output-style=compact --source-map=true --importer=./src/importer.js"
  source  = "./src/index.scss"
  output  = "./build/kit.css"

  sh "#{command} #{flags} #{source} #{output}"
end

desc "Tests the code: jest"
task "test" do
  sh "#{NPM_BIN}/jest"
end

desc "Watch and tests the code: jest"
task "test:watch" do
  sh "#{NPM_BIN}/jest --watchAll"
end

desc "Generates SassDoc documentation: sassdoc -> docs"
task "doc" do
  sh "#{NPM_BIN}/sassdoc src/colors/ --dest=docs"
end

desc "Open freshly generated documentation: sassdoc -> docs/index"
task "doc:open" => ["doc"] do
  sh "open docs/index.html"
end

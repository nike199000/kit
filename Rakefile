# Rake files repo
require 'rebo'

spec = Gem::Specification.find_by_name 'rebo'
load "#{spec.gem_dir}/lib/rebo/Rakefile"

SASS_CONFIG.merge!({
  source_file: "./src/index.scss",
  output_file: "./build/kit.css",
  importer: "./src/importer.js"
})

desc "Builts the Kit: src -> build"
task "build" => [
  "sass:test",
  "sass:compile",
  "sass:doc"
]

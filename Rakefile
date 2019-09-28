NPM_DIR = "./node_modules"
NPM_BIN = "#{NPM_DIR}/.bin"

task :default => ["build"]

task "build" => [
  "test",
  "sass",
  "doc"
]

task "sass" do
  COMMAND = "#{NPM_BIN}/node-sass"
  FLAGS = "--output-style=compact --source-map=true"
  SOURCE  = "./src/index.scss"
  OUTPUT  = "./build/kit.css"

  sh "#{COMMAND} #{FLAGS} #{SOURCE} #{OUTPUT}"
end

task "test" do
  sh "#{NPM_BIN}/jest"
end

task "test:watch" do
  sh "#{NPM_BIN}/jest --watchAll"
end

task "doc" do
  sh "#{NPM_BIN}/sassdoc src/colors/ --dest=docs"
end

task "doc:open" => ["doc"] do
  sh "open docs/index.html"
end

namespace :add do
  task :init => ["clean"] do
    sh "yarn install"
  end

  task :install, [:package] do |task, args|
    sh "yarn add #{args[:package]}"
  end

  task :dev, [:package] do |task, args|
    sh "yarn add #{args[:package]} --dev"
  end

  task :clean do
    sh "rm -rf #{NPM_DIR}"
  end
end

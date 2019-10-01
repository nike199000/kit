desc "Node package manager wrapper: yarn"
namespace :add do
  desc "Fresh copy of node modules"
  task :init => ["clean:cache", "clean:temp"] do
    sh "yarn install";
  end

  desc "Add a dependency"
  task :install, [:package] do |task, args|
    sh "yarn add #{args[:package]}"
  end

  desc "Added a dev dependency"
  task :dev, [:package] do |task, args|
    sh "yarn add #{args[:package]} --dev"
  end
end

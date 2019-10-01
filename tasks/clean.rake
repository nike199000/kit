desc "Cleaner wrapper: yarn"
namespace :clean do
  desc "Clean cache: yarn"
  task :cache do
    sh "yarn cache clean;"
  end

  desc "Clean -> build"
  task :build do
    sh "rm -rf ./build"
  end

  desc "Clean cache directories and files"
  task :temp do
    remove        = "rm -rf "
    node_modules  = "#{NPM_DIR} "
    logs          = "*.log "
    locks         = "*.lock "
    build         = "build "

    sh remove << node_modules << locks << logs << build
  end

  # desc "Clean cache: Cloudflare"
  # task "cache:cloudflare" do
  #   CLOUDFLARE_ZONE_ID = "?"
  #   CLOUDFLARE_EMAIL = "?"
  #   CLOUDFLARE_API_KEY = "?"
  #
  #   sh %{
  #     curl -X DELETE \"https://api.cloudflare.com/client/v4/zones/#{CLOUDFLARE_ZONE_ID}/purge_cache\" \
  #      -H \"X-Auth-Email: #{CLOUDFLARE_EMAIL}\" \
  #      -H \"X-Auth-Key: #{CLOUDFLARE_API_KEY}\" \
  #      -H \"Content-Type: application/json\" \
  #      --data '{\"purge_everything\":true}'
  #   }
  # end
end

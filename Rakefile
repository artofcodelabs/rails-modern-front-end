require_relative 'config/application'

# add this line
Rake::Task.define_task("assets:precompile" => ["yarn:install", "webpacker:compile"])

Rails.application.load_tasks
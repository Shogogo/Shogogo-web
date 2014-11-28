# Load DSL and Setup Up Stages
require 'capistrano/setup'

# Includes default deployment tasks
require 'capistrano/deploy'

require 'capistrano/rails'
require 'capistrano/rails/assets'
require 'capistrano/rbenv'
require 'capistrano/bundler'

set :rbenv_type, :system
set :rbenv_ruby, '2.0.0-p481'
set :rbenv_custom_path, '/home/deploy/.rbenv'
# 
# require 'capistrano/rails/migrations'

# Loads custom tasks from `lib/capistrano/tasks' if you have any defined.
Dir.glob('lib/capistrano/tasks/*.cap').each { |r| import r }

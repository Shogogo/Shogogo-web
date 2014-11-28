# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary
# server in each group is considered to be the first
# unless any hosts have the primary property set.
# Don't declare `role :all`, it's a meta role
role :app, %w{deploy@104.131.54.31}
role :web, %w{deploy@104.131.54.31}
role :db,  %w{postgres@104.131.54.31}

set :stage, :production

server '104.131.54.31', user: 'deploy', roles: %w{web app}

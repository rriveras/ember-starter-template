configure :development do
  require 'rake-pipeline'
  require 'rake-pipeline/middleware'
  use Rake::Pipeline::Middleware, 'Assetfile'
end
configure :development do
  require 'rake-pipeline'
  require 'rake-pipeline/middleware'
  use Rake::Pipeline::Middleware, Rake::Pipeline::Project.new('Assetfile')
end
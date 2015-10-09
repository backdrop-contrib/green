require 'compass'
require 'toolkit'
require 'sassy-buttons'
require 'compass-normalize'

extension_path = File.expand_path(File.join(File.dirname(__FILE__), ".."))
Compass::Frameworks.register('wormhole', :path => extension_path)

module Wormhole
  VERSION = "3.0.9"
  DATE = "2014-01-28"
end

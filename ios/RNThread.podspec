require 'json'

package = JSON.parse(File.read(File.join(__dir__, '../package.json')))

Pod::Spec.new do |s|
  s.name           = "reactNativeHamsters"
  s.version        = package['version']
  s.summary        = "React Native Hamsters"
  s.description    = "React Native Hamsters"
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = "https://github.com/austinksmith/reactNativeHamsters.git"
  s.source       = { :git => "https://github.com/austinksmith/reactNativeHamsters.git", :tag => s.version }
  s.source_files  = "**/*.{h,m}"
  s.platform      = :ios, "7.0"
  s.tvos.deployment_target = '10.0'

  s.dependency 'React'
end

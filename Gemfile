source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.9.0"

gem "kramdown-parser-gfm", "~>1.1"
gem "jemoji", "~> 0.12"
gem "webrick", "~>1.7"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Removing this will break the site under Arch Linux's provided ruby package (3.0.6-1) as it appears to be missing the json gem.
gem "json", "~>2.7", ">=2.7.2"

# Add gems removed from Ruby 3.4.0 Standard library
gem "csv", "~> 3.3", ">=3.3.2"
gem "base64", "~> 0.2.0"
gem "bigdecimal", "~> 3.1", ">= 3.1.9"

# Add gems removed from Ruby 3.5.0 Standard library
gem 'logger', '~> 1.6', '>= 1.6.4'

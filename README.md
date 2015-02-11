# Green

Green is an HTML5, [Sass](http://sass-lang.com/) and [Compass](http://compass-style.org/) powered minimalist base theme. It is optimized for both responsive and mobile first web design. Built to encourage best modern front end practices.



## Yeoman

Theme generation is being moved to [Yeoman](http://yeoman.io/). Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced. To use Yeoman, make sure you have installed [node.js](http://nodejs.org/), then run once from the command line:



## Using Bundler

Bundler is standard Ruby of managing gem dependencies, and it is highly encouraged you use it to ensure that your project is using the correct version of required gems. As stated above, this stuff moves fast, and if you are updating your gems without understanding what they break, it's likely you're going to get yourself into trouble. Bundler helps to ensure you can use the cutting edge gems on new projects while not breaking old projects.

Installing Bundler is easy, type the following into your command line:

`gem install bundler`

Once you've installed Bundler, in your theme's directory, where your `config.rb` file is, create a file called `Gemfile`. The Gemfile that comes with new Green 1.x subthemes looks like this:

```
# Pull gems from RubyGems
source 'https://rubygems.org'

gem 'toolkit', '~>1.0.0'
gem 'singularitygs', '~>1.0.7'
gem 'breakpoint', '~>2.0.2'
gem 'sassy-buttons', '~>0.1.4'

# Now that you're using Bundler, you need to run `bundle exec compass watch` instead of simply `compass watch`.
```

Once you've set up your Gemfile, in your command line, run the following:

`bundle install`

This will install the relevant gems and ensure your theme stays at those versions. Then, to compile, instead of using `compass watch`, use the following:

`bundle exec compass watch`


```

### Maintenance

The Green theme is maintained by [Ezenwa Isiogu](http://drupal.org/user/820332) ([@snugug](http://twitter.com/snugug)) and [Ian Carrico](http://drupal.org/user/1300542) ([@iamcarrico](http://twitter.com/iamcarrico))

Any updates or changes to the Aurora Yeoman Generator can be made on it's [GitHub page](https://github.com/Snugug/generator-aurora). Please either submit an issue or a pull request with the desired changes.

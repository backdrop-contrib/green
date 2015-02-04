Green
======================

A modern theme for Backdrop CMS

Responsive base theme using SingularityGS with Breakpoint 
Options
------------ 
- Grunt with LiveReload
- Bower
- Normalize.scss

Installation
------------

- Install this theme using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/themes

- Visit the configuration page under Administration > Appearance >
  Green (admin/appearance/) enable & set to default.

![ScreenShot](https://raw.githubusercontent.com/backdrop-contrib/green/images/img/green_screenshot.png)


- Using Bundler
------------

Bundler is the standard Ruby gem for managing gem dependencies, and it is highly encouraged you use it to ensure that your project is using the correct version of required gems. This stuff moves fast, and if you are updating your gems without understanding them, they break... Bundler helps to ensure you can use the cutting edge gems on new projects while not breaking old projects.

Installing Bundler is easy, type the following into your command line:

gem install bundler

The following command will install the relevant gems and ensure your theme stays at those versions: 

bundle install

Then, to compile, instead of using compass watch, use the following:

bundle exec compass watch --poll

License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.

Current Maintainers
-------------------

- Ezenwa Isiogu (https://github.com/clickbox/)

Credits
-------

This theme is adapted from Aurora originally designed for Drupal by Sam Richard
(https://www.drupal.org/project/aurora)

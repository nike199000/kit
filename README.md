# Kit
Opinionated Ui-Kit with a dream to become a Design System one day.

The Kit is still under-development and not ready for production or even for ~~`npm install kit`~~ experimental use.

Want to help developing the Kit? Keep on reading...

## Install
This is as basic as running:

```
  yarn install
  bundle install
```

### Prerequisite
This repository using `node` version `10.16.3` and `ruby` version `2.6.4`.

#### Node
Don't have `node` or have a different version other than, then I would recommand installing [FNM](https://github.com/Schniz/fnm) or [NVM](https://github.com/nvm-sh/nvm) (Node package managers) with the right version of Node for this project.

#### Ruby
Don't have Ruby or have a different version other than, then I would recommand installing [RVM](https://rvm.io/) (Ruby package managers) with the right version of Ruby for this project.


## Test
What? Tests for SASS? YES!!! Those tests are built with the awesome [True](https://github.com/oddbird/true) unit-testing tool and run by [Jest](https://github.com/facebook/jest).

Here are the command you can run to test stuff:

```
  rake test                  # Running all the tests once.
  rake test:watch            # Running and watching all
```

Tests are awesome, with that written they are also a pain in the ass to set up and maintain. So, if you see badly written tests or lack of them in some areas, fill free to let me know or better yet send a pull request.

## Docs
Want to make sense of the code? Here are the commands that will help you with that:

```
  rake doc       # Generates a ./docs folder.
  rake doc:open  # Open's that folder in the browser.
```

This section is still partially done, any help will be much appreciated. I'm using [SassDoc](https://github.com/SassDoc/) as documentation tool. You can see the outcome  [documantation](https://idangoldman.github.io/kit) here.

## Rake disclaimer
I love Yarn and prefer it over NPM, but don't like to type `yarn` command at all. I prefer typing `rake` command instead. That is why the project has a `Rakefile` which is a mirror of the `package.json` file commands. Feel free to keep using NPM, Yarn or join me with this weirdness.

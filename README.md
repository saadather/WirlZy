[![Build Status](https://travis-ci.org/saadather/WirlZy.svg?branch=master)](https://travis-ci.org/saadather/WirlZy) 
[![Join the chat at https://gitter.im/saadather/WirlZy](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/saadather/WirlZy?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Issue Stats](http://issuestats.com/github/saadather/WirlZy/badge/pr)](http://issuestats.com/github/saadather/WirlZy)
[![Issue Stats](http://issuestats.com/github/saadather/WirlZy/badge/issue)](http://issuestats.com/github/saadather/WirlZy)


# WirlZy

Technology
----------

* UI is developed using Angular JS:
  [https://angularjs.org](https://angularjs.org)
  [https://github.com/johnpapa/angularjs-styleguide](https://github.com/johnpapa/angularjs-styleguide)
* UI is composed of a core module and service modules for different functional groups
* Modules are developed using directives, here is a good read on the topic:
  http://briantford.com/blog/angular-bower
* The backend of the application are written in ExpressJS (RESTful), the ui services call the REST APIs
* Styling the application is done using SASS:
  http://sass-lang.com/
* Styling is based on Bootstrap CSS, a Bootstrap CSS is used for the portal:
  [http://getbootstrap.com/](http://getbootstrap.com/) & [https://angular-ui.github.io/bootstrap/](https://angular-ui.github.io/bootstrap/)
* Localization is done using angular translation
* Unit testing is written using Mocha with Karma
* End to end testing is based on the JS Selenium framework: Protractor
* Build process is built and run with Grunt.js


## Project Setup
* Install Git, SASS, NodeJS
* Install Yeoman, Grunt-Cli and Bower using the command
```
npm install -g yo grunt-cli bower
```

Contribute
----------

We use pull requests, and consequentially the forking model.  To make a contribution, you will need to fork this repository, make some changes, and then create a pull request with your changes.

1. From this web page, click **Fork** at the upper-right hand corner of the page
2. Select your username (e.g. @saadather)
3. After your new fork is created, you'll want to pull the fork to your local environment, and add the upstream and jenkins remotes:
 - `git clone git@github.com:<your-user-name>/WirlZy.git`
 - `git remote add upstream git@github.com:saadather/WirlZy.git`

When you're making changes to your fork, you'll push to your fork with `git push origin master`, and your pull request will get automatically updated with the latest pushes you've made.

To summarize, this is the process:

1. You fork the WirlZy repository
2. You make changes on your fork
3. You commit and push your changes to your fork (`git add`, `git commit`)
4. You create a pull request
5. Someone reviews your code and gives you feedback
6. Eventually, your code will get approved
7. You pull the latest changes (`git pull upstream master`)

Keeping your fork up-to-date
----------------------------

When contributing, it's important to keep your fork up-to-date with the master. You can do so by running the following command: `git pull upstream master`


## Running the Application
* Go to the project folder and run
```
npm install && bower install
```
* In the project folder run 
``` 
grunt serve
```
The application will run at `http://localhost:9000/`

## Learning Resources
* Angular StyleGuide - [https://github.com/johnpapa/angularjs-styleguide](https://github.com/johnpapa/angularjs-styleguide)
* Yeoman, Grunt, Bower - [http://www.pluralsight.com/courses/build-process-workflows-tooling-gruntjs](http://www.pluralsight.com/courses/build-process-workflows-tooling-gruntjs)
* Angular Testing - [http://www.pluralsight.com/courses/play-by-play-angular-testing-papa-bell](http://www.pluralsight.com/courses/play-by-play-angular-testing-papa-bell)
* ExpressJS - [http://www.pluralsight.com/courses/expressjs](http://www.pluralsight.com/courses/expressjs)
* MEAN Stack - [http://www.pluralsight.com/courses/building-angularjs-nodejs-apps-mean](http://www.pluralsight.com/courses/building-angularjs-nodejs-apps-mean)
* SASS CSS - [http://www.lynda.com/CSS-tutorials/Responsive-CSS-Sass-Compass/140777-2.html](http://www.lynda.com/CSS-tutorials/Responsive-CSS-Sass-Compass/140777-2.html)

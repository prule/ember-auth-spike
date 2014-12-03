# Create steps

* mkdir spike
* cd spike/
* ember new auth-spike
* cd auth-spike/
* npm install --save-dev ember-cli-simple-auth
* ember generate ember-cli-simple-auth
* ember g route login

Copied sample authenticator code from https://github.com/simplabs/ember-simple-auth/blob/master/examples/7-multiple-external-providers.html
 and added contentSecurityPolicy to environment.js

# Auth-spike

This README outlines the details of collaborating on this Ember application.

A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)



mkdir spike
cd spike/
ember new auth-spike
cd auth-spike/
npm install --save-dev ember-cli-simple-auth
ember generate ember-cli-simple-auth
ember g route login

/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'auth-spike',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'report-uri': "'self' http://static.ak.facebook.com https://www.facebook.com https://s-static.ak.facebook.com/connect/ http://connect.facebook.net/",
      'default-src': "'self' http://static.ak.facebook.com https://www.facebook.com https://s-static.ak.facebook.com/connect/ http://connect.facebook.net/",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",

      'font-src': "'self' http://fonts.gstatic.com http://netdna.bootstrapcdn.com/ http://fonts.googleapis.com",
      'connect-src': "'self' http://localhost:8002 https://www.facebook.com http://connect.facebook.net/",
      'img-src': "'self'",
      'style-src': "'self' ",
      'media-src': "'self'"
    },
    'simple-auth': {
      authenticationRoute: 'login',
      routeAfterAuthentication: 'home',
      routeIfAlreadyAuthenticated:'home'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }


  };
  //ENV['simple-auth'] = {
  //     authenticationRoute: 'login',
  //  routeAfterAuthentication: 'home',
  //  routeIfAlreadyAuthenticated:'home'
  //   };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

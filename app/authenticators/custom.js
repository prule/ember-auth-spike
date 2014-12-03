import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({
  restore: function (properties) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      console.log('restore');
      if (!Ember.isEmpty(properties.accessToken)) {
        console.log('found access token '+properties.accessToken);
        resolve(properties);
      }
      else {
        console.log('no token found');
        reject();
      }
    });
  },
  authenticate: function (options) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      console.log('1');
      FB.getLoginStatus(function (fbResponse) {
        console.log('2');
        console.log(fbResponse);

        if (fbResponse.status === 'connected') {
          Ember.run(function () {
            console.log(fbResponse.authResponse.accessToken);

            resolve({accessToken: fbResponse.authResponse.accessToken});
          });
        }
        else if (fbResponse.status === 'not_authorized') {
          reject();
        }
        else {
          FB.login(function (fbResponse) {
            if (fbResponse.authResponse) {
              Ember.run(function () {
                console.log(fbResponse.authResponse.accessToken);

                resolve({accessToken: fbResponse.authResponse.accessToken});
              });
            }
            else {
              reject();
            }
          });
        }
      });
    });
  },
  invalidate: function (data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      FB.logout(function (response) {
        Ember.run(resolve);
      });
    });
  }
});

import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

  actions: {
    // action to trigger authentication with Facebook
    authenticateWithFacebook: function () {
      this.get('session').authenticate('authenticator:custom', {});
    },
    sessionAuthenticationSucceeded: function() {
      this.transitionTo('home');
    }
  }

});

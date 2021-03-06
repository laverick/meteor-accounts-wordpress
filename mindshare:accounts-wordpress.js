(function() {
	// packages/mindshare:accounts-wordpress/mindshare:accounts-wordpress.js

	Accounts.oauth.registerService('wordpress');

	if (Meteor.isClient) {
		Meteor.loginWithWordPress = function(options, callback) {
			// support a callback without options             
			if (!callback && typeof options === "function") {
				callback = options;
				options = null;
			}

			var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
			WordPress.requestCredential(options, credentialRequestCompleteCallback);
		};
	} else {
		Accounts.addAutopublishFields({

			forLoggedInUser: [ 'services.wordpress' ],
			forOtherUsers: [ 'services.wordpress.username' ]
		});
	}

}).call(this);

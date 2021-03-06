require.config({
	paths : {
		backbone : '../vendor/backbone.marionette/backbone',
		underscore : '../vendor/underscore/underscore',
		jquery : '../vendor/jquery/jquery',
		marionette : '../vendor/backbone.marionette/backbone.marionette.min'
  	},
	shim : {
		jquery : {
		  exports : 'jQuery'
		},
		underscore : {
		  exports : '_'
		},
		backbone : {
		  deps : ['jquery', 'underscore'],
		  exports : 'Backbone'
		},
		marionette : {
		  deps : ['jquery', 'underscore', 'backbone'],
		  exports : 'Marionette'
		}
  	}
});

require([
		'jquery',
		'app'
	],
	function($, App) {
		//
		// $(document).ready(function() {
		// 	App.start();
		// });

		//
		App.start();
	}
);
var site = {
	settings: {
		$body: $('body'),
    	$window: $(window)
	},
	a {
		init: function () {
			var self = this;

			site.b();
		}
	},
	b: function () {
		var self = this;
	},
	ready: function () {
		site.a.init();
	}
}

// onReady jQuery function
$(function() {
    site.ready();
});
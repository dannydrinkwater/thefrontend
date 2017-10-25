var site = {
	settings: {
		$body: $('body'),
    	$window: $(window)
	},

	mq: {
	    $body: $('body'),
	    $window: $(window),
	    $detector: $('#monitor-width'),
	    detectorWidth: 0,

	    // Current break point of the page
	    currentBreakpoint: 0,
	    previousBreakpoint: 0,
	    
	    // Breakpoint variables (should match Sass MQ)
	    mobile: 320,
	    phablet: 576,
	    tablet: 768,
	    desktop: 992,
	    wide: 1200,

	    init: function() {
	        var self = this;
	        mq.monitorWidth();
	        self.$window.on('resize.mq', function() {
	            mq.monitorWidth();
	        });
	    },
	    monitorWidth: function() {
	        var self = this;
	        if (!self.$detector.length) {
	            self.$body.append('<div id="monitor-width"></div>');
	            self.$detector = $('#monitor-width');
	        }
	        self.detectorWidth = self.$detector.width();
	        if (self.detectorWidth !== self.currentBreakpoint) {
	            // A change has occurred so update the comparison variable
	            self.previousBreakpoint = self.currentBreakpoint;
	            self.currentBreakpoint = self.detectorWidth;
	        }
	    }
	},

	ready: function () {
		site.mq.init();
	}
}

// onReady jQuery function
$(function() {
    site.ready();
});
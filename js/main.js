(function() {

	var support = { animations : Modernizr.cssanimations },
		main = document.getElementById( 'maindiv' ),
		container = document.getElementById( 'section0' ),
		header = container.querySelector( 'header.ip-header' ),
		
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			//startLoading();
		};

		// disable scrolling
		window.addEventListener( 'scroll', noscroll );

		// initial animation
		classie.add( container, 'loading' );

		if( support.animations ) {
			container.addEventListener( animEndEventName, onEndInitialAnimation );
		}
		else {
			onEndInitialAnimation();
		}
	}


	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();

})();

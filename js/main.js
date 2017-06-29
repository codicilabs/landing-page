(function() {

	var support = { animations : Modernizr.cssanimations },
		main = document.getElementById( 'maindiv' ),
		container = document.getElementById( 'section0' ),
		header = container.querySelector( 'header.ip-header' ),
		loader = new PathLoader( document.getElementById( 'ip-loader-circle' ) ),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

	function init() {
		var onEndInitialAnimation = function() {
			if( support.animations ) {
				this.removeEventListener( animEndEventName, onEndInitialAnimation );
			}

			startLoading();
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

	function startLoading() {
		// simulate loading something..
		var simulationFn = function(instance) {
			var progress = 0,
				interval = setInterval( function() {
					progress = Math.min( progress + Math.random() * 0.1, 1 );

					instance.setProgress( progress );

					// reached the end
					if( progress === 1 ) {
						classie.remove( container, 'loading' );
						classie.add( container, 'loaded' );
						clearInterval( interval );

						var onEndHeaderAnimation = function(ev) {
							if( support.animations ) {
								if( ev.target !== header ) return;
								this.removeEventListener( animEndEventName, onEndHeaderAnimation );
							}

							classie.add(main, 'layout-switch' );
							window.removeEventListener( 'scroll', noscroll );
						};

						if( support.animations ) {
							header.addEventListener( animEndEventName, onEndHeaderAnimation );
						}
						else {
							onEndHeaderAnimation();
						}
					}
				}, 80 );
		};

		loader.setProgressFn( simulationFn );
	}
	
	function noscroll() {
		window.scrollTo( 0, 0 );
	}

	init();

})();

$(document).ready(function(){

	// $(function() {
	// 	$('#sectionarrow a').on('click', function(e) {
	// 		e.preventDefault();
	// 		console.log('click');
	// 		$('#section0').animate({
	// 		    step: function () {
	// 		        $(this).css({"transform": "translate3d(0px, -100%, 0px)"});
	// 		    },
	// 		    duration: 500,
	// 		    easing: 'linear',
	// 		    queue: false,
	// 		    complete: function () {
	// 		        alert('Animation is done');
	// 		    }
	// 		}, 'linear');
	// 	// 	animate({css., 500, 'linear');
	// 	// });
	// 	});
	// });

	var hpHeadlines = ["<br>Hello<br>and<br>welcome<br>to<br>Codici",
    "A<br>Small<br>Creative<br>Company<br>With<br>Big<br>Ideas",
    "Building<br>Software<br>With<br>a<br>Customer<br>First<br>Approach",
    "Where<br>Beauty<br>and<br>function<br>are<br>crafted<br>together"
	];

	var readDelay = 3;
	var zero = $('#zero-text');

	$('#maindiv').pagepiling({
		direction: 'vertical',
       	verticalCentered: true,
        scrollingSpeed: 700,
		keyboardScrolling: true,
        sectionSelector: '.section'

	// $('#maindiv').fullpage({
	// 	scrollOverflow: true,
	// 	navigation: true,
	// 	scrollingSpeed: 1700,
	});

	// if ($(".first-section.active")){
	// 	$('#pp-nav li a:before').css({
	// 		'background':'#000'
	// 	});
	// }

	zero.delay(4000).fadeIn(800, function(){

	zero.cooltext({
	   sequence: [{
                action: "update",
                text: hpHeadlines[0]
            }, {
                action: "animation",
                animation: "cool16",
                stagger: 102,
                speed: 81,
                order: "random"
            }, {
                action: "animation",
                animation: "cool239",
                stagger: 186,
                speed: 97,
                order: "random",
                delay: readDelay
            },

            {
                action: "update",
                text: hpHeadlines[1]
            }, {
                action: "animation",
                animation: "cool16",
                stagger: 102,
                speed: 81,
                order: "random"
            }, {
                action: "animation",
                animation: "cool239",
                stagger: 186,
                speed: 97,
                order: "random",
                delay: readDelay
            },

            {
                action: "update",
                text: hpHeadlines[2]
            }, {
                action: "animation",
                animation: "cool16",
                stagger: 102,
                speed: 81,
                order: "random"
            }, {
                action: "animation",
                animation: "cool239",
                stagger: 186,
                speed: 97,
                order: "random",
                delay: readDelay
            },

            {
                action: "update",
                text: hpHeadlines[3]
            }, {
                action: "animation",
                animation: "cool16",
                stagger: 102,
                speed: 81,
                order: "random"
            }, {
                action: "animation",
                animation: "cool239",
                stagger: 186,
                speed: 97,
                order: "random",
                delay: readDelay
            }
	   ],
	   pauseOnMouseOver:true, // stops animations sequence on mouse over
	   resumeOnMouseOut:true, // resume animations sequence on mouse out
	   cycle:true             // cyclic sequence
	});

	});
	
});
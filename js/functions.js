(function($){

//////////////////////////////////
//////////////////////////////////
//			HOME PAGE			//
//////////////////////////////////
//////////////////////////////////
	
	$('.splash_wrapper').show();
	
	// Creazione dei riquadri
	for(i = 0; i < 200; i++) {
    	$('.square_container').append('<div/>');
  	}

	//	Dichiarazione variabili
	var square = $('.square_container div'),
		width = square.width();

  	// Imposto la classe colored in modo random ai quadrati
	square.each(function() {
		( Math.floor( Math.random() * 2) ) && $(this).addClass('colored');
	});

	//	Imposto l'altezza dei quadrati
	square.height(width);
	//	Imposto l'altezza dei quadrati quando viene ridimensionata la finestra
	$(window).bind("debouncedresize", function() {
		var width = square.width();
    	square.height(width);
	});
	
	//	Effetto colore sui quadrati al movimento del mouse
	square.on('mouseenter', function() {
		$(this).toggleClass('colored');
	});

	// Consiglio su come contienuare dopo 5 secondi
	setTimeout(function() {
		$('.advice').css('opacity', 1);
	}, 3000);
	

	$('.splash_wrapper').on('click', function() {
		$(window).scrollTop(0);
		$('.splash_wrapper').fadeOut();
	})

//////////////////////////////////
//////////////////////////////////
//			PORTFOLIO			//
//////////////////////////////////
//////////////////////////////////

	//	Dichiarazione delle variabili
	var info = $('.info');

	//	Dichiarazione funzione per mostrare le info
	function showInfo(arg) {
		return arg.find('.info').removeClass('hide');
	}
	//	Dichiarazione funzione per nasconedere le info
	function hideInfo(arg) {
		return arg.find('.info').addClass('hide');
	}

	//	Gestione dello show/hide (da sistemare)
	$(".browser_container").mouseover( function () {
        showInfo($(this));
    }).mouseleave(function () {
        hideInfo($(this));
    });
    //	Gestione dello show/hide anche sopra il testo (da sistemare)
    // info.mouseover(function () {
    //     showInfo($(this)).stop(true, true);
    // }).mouseleave(function () {
    //     hideInfo($(this));
    // });

    $('.options').on('click', function() {
    	$(this).parent().parent().find('.info').toggleClass('hide');
    });

    $('.site_ss').each(function() {
    	$(this).css('background-image', 'url('+$(this).data('bg')+')');
    })

//////////////////////////////////
//////////////////////////////////
//			FUNCTIONS			//
//////////////////////////////////
//////////////////////////////////


    $("a[rel='ajax']").click(function(e){
    	
		//e.preventDefault();
		/*
		if uncomment the above line, html5 nonsupported browers won't change the url but will display the ajax content;
		if commented, html5 nonsupported browers will reload the page to the specified link.
		*/

		NProgress.start();

		//get the link location that was clicked
		pageurl = $(this).attr('href');

		//to get the ajax content and display in div with id 'content'
		$.ajax({url:pageurl+'?rel=ajax',success: function(data){
			$('.wrapper').fadeOut(400,function() {
				NProgress.done();
				$(window).scrollTop(0);
				$(this).html(data).fadeIn(400)
			});
			

		}});

		//to change the browser URL to the given link location
		if(pageurl!=window.location){
			window.history.pushState({path:pageurl},'',pageurl);
		}
		//stop refreshing to the page given in
		return false;
	});

	/* the below code is to override back button to get the ajax content without page reload*/
$(window).bind('popstate', function() {
	$.ajax({url:location.pathname+'?rel=ajax',success: function(data){
		$(window).scrollTop(0);
		$('body').html(data).fadeIn(400);;
	}});
});




})(jQuery);
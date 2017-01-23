$(function() {
	// Tabs settings
	$('#menu-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#menu-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('li.t1').click();
	// Tabs mysite
	$('#mysite-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#mysite-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	// Tabs ref
	$('#ref-tabs li').click(function(){
		var thisClass = this.className.slice(0,2);
		$('div.t1').hide();
		$('div.t2').hide();
		$('div.' + thisClass).fadeIn(500);
		$('#ref-tabs li').removeClass('active');
		$(this).addClass('active');
		return false;
	});
	$('li.t1').click();
	// click animation control in main
	$("#main .main-page .top .control .ctrl-menu").click(function() {
		if ($("#main .main-page .top .control .ctrl-menu").hasClass('active')) { 
			$('#main .main-page .top .control .ctrl-menu').removeClass("active");
			$('#main .main-page .top .control').find('.drop').removeClass("active");
			return false;
		}
		else {
			$(this).addClass("active");
			$(this).parent().find('.drop').addClass("active");
			return false;
		}
	});
	$('body').click(function(){
	    $('#main .main-page .top .control .drop').removeClass("active");
	    $('#main .main-page .top .control .ctrl-menu').removeClass("active");
	 });
	//click animation header menu-title dropdown
	$("#header .menu-title .menu").click(function() {
		if ($("#header .menu-title .menu").hasClass('active')) { 
			$(this).removeClass("active");
			$(this).parent().find('.dropdown').removeClass("active");
			$('#header .login-title').find('.dropdown').removeClass("active");
			return false;
		}
		else {
			$('#header .login-title').find('.dropdown').removeClass("active");
			$(this).addClass("active");
			$(this).parent().find('.dropdown').addClass("active");
			return false;
		}
	});
	//click animation popup
	$(".popup .add").click(function() {
		$(this).toggleClass("active");
	});
	$(document).on('click', function (e) {
	    if ($(e.target).closest("#header .menu-title .menu .dropdown").length === 0) {
	        $("#header .menu-title .dropdown").removeClass("active");
	        $('#header .menu-title .menu').removeClass("active");
	    }
	});
	//click animation header login dropdown
	$("#header .login-title").click(function() {
		if ($("#header .login-title").hasClass('active')) { 
			$('#header .login-title').removeClass("active");
			$('#header .menu-title .menu').removeClass("active");
			$('#header .login-title').find('.dropdown').removeClass("active");
			$('#header .menu-title').find('.dropdown').removeClass("active");
			return false;
		}
		else {
			$('#header .menu-title .menu').removeClass("active");
			$('#header .menu-title').find('.dropdown').removeClass("active");
			$(this).addClass("active");
			$(this).find('.dropdown').addClass("active");
			return false;
		}
	});
	$(document).on('click', function (e) {
	    if ($(e.target).closest("#header .login-title .menu .dropdown").length === 0) {
	        $("#header .login-title .dropdown").removeClass("active");
	        $('#header .menu-title .menu').removeClass("active");
	    }
	});
	// time animation add item site
	$('#content .sites-sort .sites-list li').addClass('show-item');
	var arr = $('.show-item');
	for (let i=0; i<($('.show-item').length); i++) {
		setTimeout(function(){

			$(arr[i]).addClass('opacity');
		}, i*150);
	}
	
	//scroll screenshot image site
	var xH, times, HH, IH;
	$('#content .sites-sort .sites-list li .img-holder').hover(
		function () {
			HH = $(this).height();
			IH = $(this).children("img").height();
			times = (IH-300)/100;
			xH = HH - IH +'px';
			xH = parseInt(xH);
			$(this).children("img").css("top", xH);
			$(this).children("img").css("transition", ("top "+times+"s linear"));
		}, function () {
		$(this).children("img").css("top", "0px");
	});
	//selectbox
	// $(".selectbox").selectBox ();
});
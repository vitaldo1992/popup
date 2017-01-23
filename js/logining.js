$(function() {

	if (document.querySelector('#logining-container')) {

		setTimeout(function(){
			$($('.preloaded')[0]).removeClass('active-step');

			$($('.logining-form-wrapper')[0]).addClass('active-step');
			$($('.progress-bar')[0]).addClass('first-progress');
		},1000);

		var bar_spans = $('.bar-span');
		var input_item_icon_array = $('.input-item-icon');
		var inputs_containers = $('.input-container');
		var inputs_array = $('.input-item');
		var icon_containers = $('.icon_container');

		var show_passwords_icons = $('.show-password-icon');

		function validatingSubmit(e) {
			e.preventDefault();
			return false;
		}

		$('form')[0].onsubmit = validatingSubmit;


		var	validate_flag = [false, false];

		function go_to_postloading() {
			if (validate_flag[0] == true && validate_flag[1] == true) {

				$($('.logining-form-wrapper')[0]).removeClass('active-step');
				$($('.postloader')).addClass('active-step');
				$($('.progress-bar')[0]).addClass('third-progress');
			}
		}

		$('.logining')[0].addEventListener('click', go_to_postloading);


		$('.forgot-password')[0].addEventListener('click', function (){
			$($('.forgot-password-step')).addClass('active-step');
			$($('.first-step')[0]).removeClass('active-step');
			$($('.progress-bar')[0]).addClass('third-progress');

		});

		$('.continue-reset-password')[0].addEventListener('click', function (){
			$($('.forgot-password-step')).removeClass('active-step');
			$($('.your-email-send')[0]).addClass('active-step');

		});



		inputs_containers[0].addEventListener('input', function(){
			$(input_item_icon_array[0]).removeClass('required');
			$(input_item_icon_array[0]).removeClass('error');
			$(input_item_icon_array[0]).removeClass('success');

			if (inputs_array[0] && inputs_array[0].value.length == 0) {
				$(input_item_icon_array[0]).addClass('required');
			}
		});

		inputs_array[0].addEventListener('blur', function(e){

			if (this.value.length==0) {
				validate_flag[0] = false;
				$(input_item_icon_array[0]).addClass('required');
				$(input_item_icon_array[0]).removeClass('error');
				$(input_item_icon_array[0]).removeClass('success');
				$(inputs_array[0]).addClass('error-input');
				$(inputs_array[0]).removeClass('success-input');
				$($(inputs_containers[0])).effect( "shake", {times:4, distance: 5}, 500  );
			} else if (this.value.length>0 && this.value.length<3) {
				validate_flag[0] = false;
				$(input_item_icon_array[0]).addClass('error');
				$(input_item_icon_array[0]).removeClass('required');
				$(input_item_icon_array[0]).removeClass('success');
				$(inputs_array[0]).addClass('error-input');
				$(inputs_array[0]).removeClass('success-input');
				$($(inputs_containers[0])).effect( "shake", {times:4, distance: 5}, 500  );
			} else if (this.value.length > 2) {
				validate_flag[0] = true;
				$(input_item_icon_array[0]).addClass('success');
				$(input_item_icon_array[0]).removeClass('required');
				$(input_item_icon_array[0]).removeClass('error');
				$(inputs_array[0]).addClass('success-input');
				$(inputs_array[0]).removeClass('error-input');
			}
		});

		inputs_array[0].addEventListener('keypress', function(e){
			if (e.key == "Enter") {

				if (this.value.length==0) {
					$(input_item_icon_array[0]).addClass('required');
					$(inputs_array[0]).addClass('error-input');
					$(input_item_icon_array[0]).removeClass('error');
					$(input_item_icon_array[0]).removeClass('success');
					$($(inputs_containers[0])).effect( "shake", {times:4, distance: 5}, 500  );
				} else if (this.value.length>0 && this.value.length<3) {
					$(input_item_icon_array[0]).addClass('error');
					$(inputs_array[0]).addClass('error-input');
					$(input_item_icon_array[0]).removeClass('required');
					$(input_item_icon_array[0]).removeClass('success');
					$($(inputs_containers[0])).effect( "shake", {times:4, distance: 5}, 500  );
				} else if (this.value.length > 2) {
					$(inputs_array[0]).removeClass('error-input');
					$(input_item_icon_array[0]).addClass('success');
					$(input_item_icon_array[0]).removeClass('required');
					$(input_item_icon_array[0]).removeClass('error');

					inputs_array[1].focus();
					inputs_array[1].click();
				}
			}
			e.stopImmediatePropagation();
		});

		inputs_array[0].addEventListener('click', function(e){

			inputs_array[1].type="password";
			$(input_item_icon_array[1]).show();
			$(bar_spans[0]).addClass('scaled_bar');
			$(bar_spans[1]).removeClass('scaled_bar');
			$(input_item_icon_array[0]).show();
			$(bar_spans[0]).removeClass('scaled_bar');
			$(show_passwords_icons[0]).hide();
			$(input_item_icon_array[1]).show();
			e.stopImmediatePropagation();
		});


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


inputs_array[1].addEventListener('keypress', function(e) {

	if (e.key == "Enter") {
		if (this.value.length>2) {

						$(input_item_icon_array[1]).show();
						$(input_item_icon_array[1]).addClass('success');
						$(input_item_icon_array[1]).removeClass('required');
						$(input_item_icon_array[1]).removeClass('error');
						$(inputs_array[1]).removeClass('error-input');
						$(inputs_array[1]).addClass('success-input');
						go_to_postloading();

					} else if (this.value.length>0 && this.value.length<=2) {
						setTimeout(function(){
							$(show_passwords_icons[1]).show();
						},1);
						$(input_item_icon_array[1]).show();
						$(show_passwords_icons[0]).show();
						$(input_item_icon_array[1]).addClass('error');
						$(input_item_icon_array[1]).removeClass('required');
						$(input_item_icon_array[1]).removeClass('success');
						$(inputs_array[1]).addClass('error-input');
						$(inputs_array[1]).removeClass('success-input');
						$($(inputs_containers[1])).effect( "shake", {times:4, distance: 5}, 500  );

					} else if (this.value.length==0) {
						$(input_item_icon_array[1]).show();
						$(input_item_icon_array[1]).addClass('required');
						$(input_item_icon_array[1]).removeClass('success');
						$(input_item_icon_array[1]).removeClass('error');
						$(inputs_array[1]).addClass('error-input');
						$(inputs_array[1]).addClass('error-input');
						$(inputs_array[1]).removeClass('success-input');
						$($(inputs_containers[1])).effect( "shake", {times:4, distance: 5}, 500  );
					}
				}
				e.stopImmediatePropagation();
			});



inputs_array[1].addEventListener('blur', function(e) {
	if (inputs_array[1].value.length < 3 && inputs_array[1].value.length>0) {
		$(inputs_array[1]).addClass('error-input');
		$(inputs_array[1]).removeClass('success-input');
		$($(inputs_containers[1])).effect( "shake", {times:4, distance: 5}, 500  );
	} else if (inputs_array[1].value.length>2) {

		$(inputs_array[1]).removeClass('error-input');
		$(inputs_array[1]).addClass('success-input');
	} else if (inputs_array[1].value.length == 0) {
		$($(inputs_containers[1])).effect( "shake", {times:4, distance: 5}, 500  );
		$(inputs_array[1]).addClass('error-input');
		$(inputs_array[1]).removeClass('success-input');
	}
});

inputs_array[1].addEventListener('input', function(e)
{

	if (this.value.length>0 && this.value.length<3) {

		$(show_passwords_icons[0]).show();
		$(input_item_icon_array[1]).hide();
		$(input_item_icon_array[1]).addClass('error');
		$(input_item_icon_array[1]).removeClass('required');
		$(input_item_icon_array[1]).removeClass('success');
		validate_flag[1] = false;
	} else if (this.value.length == 0) {
		validate_flag[1] = false;
		$(inputs_array[1]).addClass('error-input');
		$(show_passwords_icons[0]).hide();
		$(input_item_icon_array[1]).show();
		$(input_item_icon_array[1]).addClass('required');
		$(input_item_icon_array[1]).removeClass('success');
		$(input_item_icon_array[1]).removeClass('error');
	} else if (this.value.length>=3) {
		validate_flag[1] = true;
		$(inputs_array[1]).removeClass('error-input');
		$(show_passwords_icons[0]).show();
		$(input_item_icon_array[1]).hide();
		$(input_item_icon_array[1]).addClass('success');
		$(input_item_icon_array[1]).removeClass('required');
		$(input_item_icon_array[1]).removeClass('error');
	}
});

inputs_array[1].addEventListener('blur', function(e) {
	if (inputs_array[1].value.length < 3 && inputs_array[1].value.length>0) {
		$(inputs_array[1]).addClass('error-input');
		$(inputs_array[1]).removeClass('success-input');
		$($(inputs_containers[1])).effect( "shake", {times:4, distance: 5}, 500  );
	} else if (inputs_array[1].value.length>2) {

		$(inputs_array[1]).removeClass('error-input');
		$(inputs_array[1]).addClass('success-input');
	} else if (inputs_array[1].value.length == 0) {
		$($(inputs_containers[1])).effect( "shake", {times:4, distance: 5}, 500  );
		$(inputs_array[1]).addClass('error-input');
		$(inputs_array[1]).removeClass('success-input');
	}
});

show_passwords_icons[0].addEventListener('click', function(e){
	if (inputs_array[1].type == "password") {
		inputs_array[1].type="text";
	} else {
		inputs_array[1].type="password";
	}
	e.stopImmediatePropagation();
});

document.addEventListener('click', function(e) {
	e.preventDefault();
	$(input_item_icon_array[0]).show();
	$(input_item_icon_array[1]).show();
	$(show_passwords_icons[0]).hide();
	inputs_array[1].type = "password";
	$(bar_spans[1]).removeClass('scaled_bar');
});

inputs_array[1].addEventListener('click', function(e){
	if (this.value.length > 0 ) {
		$(show_passwords_icons[0]).show();
		$(input_item_icon_array[0]).hide();
	}
	e.stopImmediatePropagation();
});

inputs_array[2].addEventListener('keypress', function(e){
	if (e.key == "Enter") {
		console.log(inputs_array[2]);

		if (this.value.length==0) {
			$(input_item_icon_array[2]).addClass('required');
			$(inputs_array[2]).addClass('error-input');
			$(input_item_icon_array[2]).removeClass('error');
			$(input_item_icon_array[2]).removeClass('success');
			$($(inputs_containers[2])).effect( "shake", {times:4, distance: 5}, 500  );
		} else if (this.value.length>0 && this.value.length<3) {
			$(input_item_icon_array[2]).addClass('error');
			$(inputs_array[2]).addClass('error-input');
			$(input_item_icon_array[2]).removeClass('required');
			$(input_item_icon_array[2]).removeClass('success');
			$($(inputs_containers[2])).effect( "shake", {times:4, distance: 5}, 500  );
		} else if (this.value.length > 2) {
			$(inputs_array[2]).removeClass('error-input');
			$(input_item_icon_array[2]).addClass('success');
			$(input_item_icon_array[2]).removeClass('required');
			$(input_item_icon_array[2]).removeClass('error');
			$('.continue-reset-password')[0].click();
		}
	}
	e.stopImmediatePropagation();
});


inputs_array[2].addEventListener('input', function(e)
{

	if (this.value.length>0 && this.value.length<3) {

		$(input_item_icon_array[2]).hide();
		$(input_item_icon_array[2]).addClass('error');
		$(input_item_icon_array[2]).removeClass('required');
		$(input_item_icon_array[2]).removeClass('success');

	} else if (this.value.length == 0) {

		$(inputs_array[2]).addClass('error-input');
		$(input_item_icon_array[2]).show();
		$(input_item_icon_array[2]).addClass('required');
		$(input_item_icon_array[2]).removeClass('success');
		$(input_item_icon_array[2]).removeClass('error');
	} else if (this.value.length>=3) {

		$(inputs_array[2]).removeClass('error-input');
		$(input_item_icon_array[2]).hide();
		$(input_item_icon_array[2]).addClass('success');
		$(input_item_icon_array[2]).removeClass('required');
		$(input_item_icon_array[2]).removeClass('error');
	}
});


























var colors = new Array(
	[62,35,255],
	[60,255,60],
	[255,35,98],
	[45,175,230],
	[255,0,255],
	[255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

	if ( $===undefined ) return;

	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];

	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb("+r1+","+g1+","+b1+")";

	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb("+r2+","+g2+","+b2+")";

	$('#gradient').css({
		background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
			background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

		step += gradientSpeed;
		if ( step >= 1 )
		{
			step %= 1;
			colorIndices[0] = colorIndices[1];
			colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

}
}

setInterval(updateGradient,10);
}
});
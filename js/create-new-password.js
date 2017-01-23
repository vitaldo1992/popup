$(function() {
	if (document.querySelector('#create-new-password-form-container')) {

		var	validate_flag = [false, false];
		var validate_flag2 = [false, false];

		var password_containers = $('.input-container');
		var inputs_type_password = $('.input-item');;
		var show_passwords_icons = $('.show-password-icon');
		var show_pass_icon_cont = $('.icon_container');
		var other_icons = $('.input-item-icon');
		var password_bar_spans = $('.bar-span');

		var user_tasks = $('.user-task');

		setTimeout(function(){
			$($('.preloaded')[0]).removeClass('active-step');
			$($('.form-wrapper')[0]).addClass('active-step');
			$($('.progress-bar')[0]).addClass('first-progress');
		},1000);


		$('.first-next')[0].addEventListener("click", function() {
			go_to_postloading();
		});

		function validating_submit(e) {
			e.preventDefault();
			return false;
		}

		$('form')[0].onsubmit = validating_submit;



		for (let i = 0; i<2; i++) {

			(function(i) {
				inputs_type_password[i].addEventListener('input', function(e)
				{

					if (this.value.length>0 && this.value.length<3) {

						$(show_passwords_icons[i]).show();
						$(other_icons[i]).hide();
						$(other_icons[i]).addClass('error');
						$(other_icons[i]).removeClass('required');
						$(other_icons[i]).removeClass('success');
						validate_flag2[i] = false;
					} else if (this.value.length == 0) {
						validate_flag2[i] = false;
						$(inputs_type_password[i]).addClass('error-input');
						$(show_passwords_icons[i]).hide();
						$(other_icons[i]).show();
						$(other_icons[i]).addClass('required');
						$(other_icons[i]).removeClass('success');
						$(other_icons[i]).removeClass('error');
					} else if (this.value.length>=3) {
						validate_flag2[i] = true;
						$(inputs_type_password[i]).removeClass('error-input');
						$(show_passwords_icons[i]).show();
						$(other_icons[i]).hide();
						$(other_icons[i]).addClass('success');
						$(other_icons[i]).removeClass('required');
						$(other_icons[i]).removeClass('error');
					}
				});

				inputs_type_password[i].addEventListener('keypress', function(e) {

					e.stopImmediatePropagation();
					if (e.key == "Enter") {
						if (this.value.length>2) {
							if (inputs_type_password[i+1]) {
								inputs_type_password[i+1].focus();
							} else if (!inputs_type_password[i+1]){
								go_to_postloading();
							};
							$(other_icons[i]).show();
							$(other_icons[i]).addClass('success');
							$(other_icons[i]).removeClass('required');
							$(other_icons[i]).removeClass('error');
							$(inputs_type_password[i]).removeClass('error-input');
							$(inputs_type_password[i]).addClass('success-input');
							$(show_passwords_icons[i]).hide();

						} else if (this.value.length>0 && this.value.length<=2) {
							setTimeout(function(){
								$(show_passwords_icons[i]).show();
							},1);
							$(other_icons[i]).show();
							$(show_passwords_icons[i]).show();
							$(other_icons[i]).addClass('error');
							$(other_icons[i]).removeClass('required');
							$(other_icons[i]).removeClass('success');
							$(inputs_type_password[i]).addClass('error-input');
							$(inputs_type_password[i]).removeClass('success-input');
							$($(password_containers[i])).effect( "shake", {times:4, distance: 5}, 500  );

						} else if (this.value.length==0) {
							$(other_icons[i]).show();
							$(other_icons[i]).addClass('required');
							$(other_icons[i]).removeClass('success');
							$(other_icons[i]).removeClass('error');
							$(inputs_type_password[i]).addClass('error-input');
							$(inputs_type_password[i]).removeClass('success-input');
							$($(password_containers[i])).effect( "shake", {times:4, distance: 5}, 500  );
						}
					}
				});

				inputs_type_password[i].addEventListener('click', function(e) {

					$(password_bar_spans[i]).addClass('scaled_bar');

					if (i==0) {
						$(show_passwords_icons[1]).hide();
						inputs_type_password[1].type = "password";
						$(other_icons[1]).show();
						$(password_bar_spans[1]).removeClass('scaled_bar');
					}

					if (i==1) {
						$(show_passwords_icons[0]).hide();
						inputs_type_password[0].type = "password";
						$(other_icons[0]).show();
						$(password_bar_spans[0]).removeClass('scaled_bar');
					}
					if (this.value.length > 0 ) {
						$(show_passwords_icons[i]).show();
						$(other_icons[i]).hide();
					}
					e.stopImmediatePropagation();
				});

				inputs_type_password[i].addEventListener('blur', function(e) {
					if (inputs_type_password[i].value.length < 3 && inputs_type_password[i].value.length>0) {
						$(inputs_type_password[i]).addClass('error-input');
						$(inputs_type_password[i]).removeClass('success-input');
						$($(password_containers[i])).effect( "shake", {times:4, distance: 5}, 500  );
					} else if (inputs_type_password[i].value.length>2) {

						$(inputs_type_password[i]).removeClass('error-input');
						$(inputs_type_password[i]).addClass('success-input');
					} else if (inputs_type_password[i].value.length == 0) {
						$($(password_containers[i])).effect( "shake", {times:4, distance: 5}, 500  );
						$(inputs_type_password[i]).addClass('error-input');
						$(inputs_type_password[i]).removeClass('success-input');
					}
				});


				show_passwords_icons[i].addEventListener('click', function(e){
					if (inputs_type_password[i].type == "password") {
						inputs_type_password[i].type="text";
					} else {
						inputs_type_password[i].type="password";
					}
				e.stopImmediatePropagation();
			});

				document.addEventListener('click', function(e) {
					e.preventDefault();
					$(other_icons[i]).show();
					$(show_passwords_icons[i]).hide();
					inputs_type_password[0].type = "password";
					inputs_type_password[1].type = "password";
					$(password_bar_spans[0]).removeClass('scaled_bar');
					$(password_bar_spans[1]).removeClass('scaled_bar');

				});
			})(i);


		}

	function go_to_postloading() {
		if (validate_flag2[0] == true && validate_flag2[1] == true) {

			$('.form-wrapper').removeClass('active-step');
			$($('.postloader')).addClass('active-step');
			$($('.progress-bar')[0]).addClass('third-progress');
		}
	}


	var colors = new Array(
		[62,35,255],
		[60,255,60],
		[255,35,98],
		[45,175,230],
		[255,0,255],
		[255,128,0]);

	var step = 0;

var color_indices = [0,1,2,3];


var gradient_speed = 0.002;

function update_gradient()
{

	if ( $===undefined ) return;

	var c0_0 = colors[color_indices[0]];
	var c0_1 = colors[color_indices[1]];
	var c1_0 = colors[color_indices[2]];
	var c1_1 = colors[color_indices[3]];

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

		step += gradient_speed;
		if ( step >= 1 )
		{
			step %= 1;
			color_indices[0] = color_indices[1];
			color_indices[2] = color_indices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    color_indices[1] = ( color_indices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    color_indices[3] = ( color_indices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

}
}

setInterval(update_gradient,10);
}
});
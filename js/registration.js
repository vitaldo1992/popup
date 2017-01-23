$(function() {

	if (document.querySelector('#form-container')) {

		var	validate_flag = [false, false];
		var validate_flag2 = [false, false];

		var bar_spans = $('.bar-span');

		var input_item_icon_array = $('.input-item-icon');
		var inputs_containers = $('.input-container');
		var inputs_array = $('.input-item');
		var icon_containers = $('.icon_container');

		var password_containers = inputs_containers.splice(3,2);
		var inputs_type_password = inputs_array.splice(3,2);
		var show_passwords_icons = $('.show-password-icon');
		var show_pass_icon_cont = icon_containers.splice(3,2);
		var other_icons = input_item_icon_array.splice(3,2);
		var password_bar_spans = bar_spans.splice(3,2);

		var user_tasks = $('.user-task');

		var left_container_height = $('.first-name')[0].children[3].getBoundingClientRect().top-10+"px";
		$('.task-container')[0].style.marginTop = left_container_height;

		setTimeout(function(){
			$($('.preloaded')[0]).removeClass('active-step');

			$($('.form-wrapper')[0]).addClass('active-step');
			$($('.progress-bar')[0]).addClass('first-progress');
		},1000);

		function allow_to_back(){
			$('.first-step').addClass('active-step');
			$('.second-step').removeClass('active-step');
			$($('.user-task')[0]).addClass('active-task');
			$($('.user-task')[1]).removeClass('active-task');
			$($('.progress-bar')[0]).removeClass('second-progress');
			$($(user_tasks)[0]).removeClass('clickable_user-task');
			$(user_tasks)[0].removeEventListener('click', allow_to_back);
		}

		function allow_to_go_ahead() {
			if (validate_flag[0] == true && validate_flag[1] == true) {
				$('.first-step').removeClass('active-step');
				$('.second-step').addClass('active-step');
				$($('.user-task')[0]).removeClass('active-task');
				$($('.user-task')[1]).addClass('active-task');
				$($('.progress-bar')[0]).addClass('second-progress');
				$($(user_tasks)[0]).addClass('clickable_user-task');
				$(user_tasks)[0].addEventListener('click', allow_to_back);
			}
		}

		function go_to_postloading() {
			if (validate_flag2[0] == true && validate_flag2[1] == true) {

				$('.second-step').removeClass('active-step');
				$($('.postloader')).addClass('active-step');
				$($('.progress-bar')[0]).addClass('third-progress');
			}
		}

		function validating_submit(e) {
			e.preventDefault();
			return false;
		}

		$('.first-next')[0].addEventListener("click", function() {
			allow_to_go_ahead();
		});


		$('form')[0].onsubmit = validating_submit;

		user_tasks[1].addEventListener('click', allow_to_go_ahead);

		for (var j = 0; j<3; j++) {
			(function(j) {

				inputs_containers[j].addEventListener('input', function(){
					$(input_item_icon_array[j]).removeClass('required');
					$(input_item_icon_array[j]).removeClass('error');
					$(input_item_icon_array[j]).removeClass('success');

					if (inputs_array[j] && inputs_array[j].value.length == 0) {
						$(input_item_icon_array[j]).addClass('required');
					}
				});

				inputs_array[j].addEventListener('blur', function(e){

					if (this.value.length==0) {
						validate_flag[j] = false;
						$(input_item_icon_array[j]).addClass('required');
						$(input_item_icon_array[j]).removeClass('error');
						$(input_item_icon_array[j]).removeClass('success');
						$(inputs_array[j]).addClass('error-input');
						$(inputs_array[j]).removeClass('success-input');
						$($(inputs_containers[j])).effect( "shake", {times:4, distance: 5}, 500  );
					} else if (this.value.length>0 && this.value.length<3) {
						validate_flag[j] = false;
						$(input_item_icon_array[j]).addClass('error');
						$(input_item_icon_array[j]).removeClass('required');
						$(input_item_icon_array[j]).removeClass('success');
						$(inputs_array[j]).addClass('error-input');
						$(inputs_array[j]).removeClass('success-input');
						$($(inputs_containers[j])).effect( "shake", {times:4, distance: 5}, 500  );
					} else if (this.value.length > 2) {
						validate_flag[j] = true;
						$(input_item_icon_array[j]).addClass('success');
						$(input_item_icon_array[j]).removeClass('required');
						$(input_item_icon_array[j]).removeClass('error');
						$(inputs_array[j]).addClass('success-input');
						$(inputs_array[j]).removeClass('error-input');
					}
				});

				inputs_array[j].addEventListener('keypress', function(e){

					if (e.key == "Enter") {

						if (this.value.length==0) {
							$(input_item_icon_array[j]).addClass('required');
							$(inputs_array[j]).addClass('error-input');
							$(input_item_icon_array[j]).removeClass('error');
							$(input_item_icon_array[j]).removeClass('success');
							$($(inputs_containers[j])).effect( "shake", {times:4, distance: 5}, 500  );
						} else if (this.value.length>0 && this.value.length<3) {
							$(input_item_icon_array[j]).addClass('error');
							$(inputs_array[j]).addClass('error-input');
							$(input_item_icon_array[j]).removeClass('required');
							$(input_item_icon_array[j]).removeClass('success');
							$($(inputs_containers[j])).effect( "shake", {times:4, distance: 5}, 500  );
						} else if (this.value.length > 2) {
							$(inputs_array[j]).removeClass('error-input');
							$(input_item_icon_array[j]).addClass('success');
							$(input_item_icon_array[j]).removeClass('required');
							$(input_item_icon_array[j]).removeClass('error');

							if (j==0) {
								inputs_array[1].focus();
								inputs_array[1].click();
							} else if (j==1) {
								inputs_type_password[0].focus();
								$('.first-next')[0].click();
							}

						}
					}
				});

				inputs_array[j].addEventListener('click', function(e){
					$(bar_spans[j]).addClass('scaled_bar');
					e.stopImmediatePropagation();

					if (j==0) {
						$(bar_spans[1]).removeClass('scaled_bar');
					} else if (j==1) {
						$(bar_spans[0]).removeClass('scaled_bar');
					}
				});

				document.addEventListener('click', function(e) {
					e.preventDefault();
					$(bar_spans[j]).removeClass('scaled_bar');
				});

			})(j);
		}

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
						$(inputs_array[i]).addClass('error-input');
						$(show_passwords_icons[i]).hide();
						$(other_icons[i]).show();
						$(other_icons[i]).addClass('required');
						$(other_icons[i]).removeClass('success');
						$(other_icons[i]).removeClass('error');
					} else if (this.value.length>=3) {
						validate_flag2[i] = true;
						$(inputs_array[i]).removeClass('error-input');
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

						} else if (this.value.length>0 && this.value.length<=2) {
							setTimeout(function(){
								$(show_passwords_icons[i]).show();
							},1);
							$(other_icons[i]).show();
							$(show_passwords_icons[0]).show();
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
							$(inputs_array[i]).addClass('error-input');
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



		$('.registration')[0].addEventListener('click', go_to_postloading);


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
var gradient_speed = 0.002;

function update_gradient()
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

		step += gradient_speed;
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


setInterval(update_gradient,10);
}
});
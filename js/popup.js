$(function() {
	(function(){
		new Clipboard('#copy-button');
	})();
	$( ".plan-input" ).checkboxradio({
		icon: true
	});
	$('.plan-label').on('click', function(){
		var element = this;
		setTimeout(function(){
			var checked = $(".plan-input:checked").length;
			if (checked>0) {
				$(element).find('.label-text').text('Вы прикрепили тарифный план - FREEDOM')
			} else {
				$(element).find('.label-text').text('Прикрепить тарифный план - FREEDOM')
			}
		}, 10)
	});
	$('#demo').multiple_emails({
		checkDupEmail: true
	});

	restrictPlaceHolder();

	function restrictPlaceHolder() {
		if ($('.email_name').length>0) {
			$('.multiple_emails-input.text-left').attr("placeholder", '')
			$('.multiple_emails-input.text-left').css('margin-top', '3px')
		} else {
			$('.multiple_emails-input.text-left').attr("placeholder", 'Вы можете ввести до 5 e-mail через пробел')
			$('.multiple_emails-input.text-left').css('margin-top', '35px')
		}
	}
	function restrictEmail (){
		if ($('.email_name').length>4) {
			$('.multiple_emails-input.text-left').attr("disabled", true)
		} else {
			$('.multiple_emails-input.text-left').attr("disabled", false)
		}
	}
	$('.multiple_emails-input.text-left').on('keyup focusout focus', restrictEmail);
	$('.multiple_emails-input.text-left').on('keyup focusout focus', restrictPlaceHolder);
	$('.form-layout').on('click', restrictEmail)
	// $('#current_emails').text($('#demo').val());
	// $('#demo').change( function(){
	// 	$('#current_emails').text($(this).val());
	// });
})
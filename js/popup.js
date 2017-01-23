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
	})
})
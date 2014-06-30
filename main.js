$(document).on('ready', function() {
  
	$(".text").on('click', function(){
		
		$(this).hide();

		var value = $(this).text();
	 	$(".something").show();
	 	$("textarea").val(value).focus();

	});

	 
	$(".btnsave").on('click', function(){
		$(".something").hide();
		var value = $("textarea").val();
		var toUpper = $('.toUpper').is(':checked');
		$(".text").setValue(value, toUpper).show();
	});

	$(".btncancel").on('click', function(){
	 	$(".something").hide();
		$(".text").setValue('empty').show();

	});


});

$.fn.setValue = function (value, accept) {
	if (accept == true) {
		value = value.toUpperCase();
	}

	$(this).text(value);

	return $(this);
}
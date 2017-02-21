function wordCount(text){
	return text.length;
}

function uniqueWordCount(text){
	var valuesSoFar = [];
	for(var i = 0; i < text.length; i++){
		if(valuesSoFar.indexOf(text[i]) == -1) {
			valuesSoFar.push(text[i]);
		}
	}
	
	return valuesSoFar.length;
}

function averageWordLength(text){
	return text.reduce(function(acc, currentVal){
		return acc + currentVal.length;
	}, 0) / text.length;
}

$(document).ready(function(){
	$('.js-form').on('click', '.js-submit', function(){
		var theArray = $(this).parents('.js-form').find('.js-text-content').val().split(' ');

		$(this).parents('.js-form').next().children(".js-word-count").text(wordCount(theArray));
		$(this).parents('.js-form').next().children(".js-unique-word").text(uniqueWordCount(theArray));
		$(this).parents('.js-form').next().children(".js-average-word").text(averageWordLength(theArray));
		$(this).parents('.js-form').next().removeClass("hidden");	
		return false;	
	});
});
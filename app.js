function wordCount(){
	var typedWord = $(".js-text-content").val().split(" ").length;
	return typedWord;
}

function uniqueWordCount(){
	var valuesSoFar = [];
	var theWord = $(".js-text-content").val().split(" ");
	for(var i = 0; i < theWord.length; i++){
		if(valuesSoFar.indexOf(theWord[i]) == -1) {
			valuesSoFar.push(theWord[i]);
		}
	}
	return valuesSoFar.length;
}

function averageWordLength(){
	var theWord = $(".js-text-content").val().split(" ");
	var sumOfWords = 0;
	for(var i = 0; i < theWord.length; i++){
		sumOfWords += theWord[i].length;
	}
	return sumOfWords/theWord.length; 
}

$(document).ready(function(){
	$(".js-submit").click(function(){
		$(".js-word-count").text(wordCount());
		$(".js-unique-word").text(uniqueWordCount());
		$(".js-average-word").text(averageWordLength());
		$("dl").removeClass("hidden");		
		return false;
	});
});
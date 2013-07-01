$(function(){
  var formInfo = {};
  
  var formHandler = function(event){

    for (var j = 0; j < $(".inp").length; j++){
    	formInfo[$(".inp")[j].id] = $(".inp")[j].value;
    }
    if (!checker()){
  		return;
  	}
	for (k in formInfo){
		$("." + k).text(formInfo[k]);
		$("#" + k)[0].value = "";
	}
	$("#rd").text("");
    for (var i = 0; i < $(".rd").length; i++){
    	if ($(".rd")[i].checked){
    		$("#rd").text($(".rd")[i].value);
    		$(".rd")[i].checked = false;
    	}
    }
    event['preventDefault']();
  };

  var checker = function(){
  	// debugger;
  	var reCard = /\d{16}/;
  	var reCcv = /\d{4}/;
  	if (!reCard.exec(formInfo['card'])){
  		alert("Please enter a 16 digit Credit Card number.");
  		return false;
  	}
  	if ()


  	return true;
  };

  $("form")['submit'](formHandler);

});

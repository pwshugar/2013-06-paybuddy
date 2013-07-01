$(function(){

  var formInfo = {};
  var formHandler = function(event){
  	console.log($(".rd"));
  	$("#rd").text("");
    for (var i = 0; i < $(".rd").length; i++){
    	if ($(".rd")[i].checked){
    		$("#rd").text($(".rd")[i].value);
    		$(".rd")[i].checked = false;
    	}
    }
    for (var j = 0; j < $(".inp").length; j++){
    	formInfo[$(".inp")[j].id] = $(".inp")[j].value;
    }
	for (k in formInfo){
		$("." + k).text(formInfo[k]);
		$("#" + k)[0].value = "";
	}

    event['preventDefault']();
  };

  $("form")['submit'](formHandler);

});

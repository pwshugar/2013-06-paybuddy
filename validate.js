$(function(){

  var formInfo = {}

  var formHandler = function(event){
    console['log']("submitted");

    for (var i = 0; i < $("input").length; i++){
    	formInfo[$("input")[i].id] = $("input")[i].value;
    }

	for (k in formInfo){
		$("." + k).text(formInfo[k]);
		$("#" + k)[0].value = "";
	}

	$("#submit")[0].value = "Submit";


    event['preventDefault']();
  };

  $("form")['submit'](formHandler);

});

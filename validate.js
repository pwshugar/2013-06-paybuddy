$(function(){

  var formInfo = {}

  var formHandler = function(event){
    for (var i = 0; i < $(".inp").length; i++){
    	formInfo[$(".inp")[i].id] = $(".inp")[i].value;
    }
	for (k in formInfo){
		$("." + k).text(formInfo[k]);
		$("#" + k)[0].value = "";
	}
    event['preventDefault']();
  };


  $("form")['submit'](formHandler);

});

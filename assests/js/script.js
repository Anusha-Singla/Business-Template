 function functionAlert(msg, onSubmit) {
 	var submitBox = $("#submission");
 	submitBox.find(".message").text(msg);
 	submitBox.find(".submit").unbind().click(function() {
 		submitBox.hide();
 	});
 	submitBox.find(".submit").click(onSubmit);
 	submitBox.show();
 }
 $(document).ready(function(){
    $(".carousel")
      .delay(1)
      .slideUp(2000)
      .slideDown(2000);
  });
$(document).ready(function(){
    $(".team")
      .delay(1)
      .slideUp(2000)
      .slideDown(2000);
  });
$(document).ready(function(){
    $("#cservice")
      .delay(3200)
      .slideUp(2000)
      .slideDown(2000);
  });
$(document).ready(function(){
    $(".img-responsive")
      .delay(3200)
      .slideUp(2000)
      .slideDown(2000);
  });

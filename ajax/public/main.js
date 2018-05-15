$(document).ready(function() {  
  $("#ajax_btn").click(function(){
    $.ajax({
      method: "POST",
      url: "./ajax_data",
      //send data
      data: {
        Student_ID:$("#student_form").val(),
       
      },
      //receive succussfully
      success: function(data) {
        $("#ajax_content").text(data)
      },
      //receive failed
      error: function(){
        alert("fail");
      }
    })
  })
})


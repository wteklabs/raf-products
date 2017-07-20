$('#contactForm').submit(function(e){
  e.preventDefault();
  var name = $('#name')[0];
  var emailId = $('#email')[0];
  var subject = $('#subject')[0];
  var message = $('#messageBox')[0];

  console.log(name, emailId,subject, message);

  if(!name.value || !emailId.value || !message.value){
    alert('Please check your details!');
  }else{
    $.ajax({
      url: "https://formspree.io/sales@rafproducts.in",
      method: "POST",
      data: {Name: name.value, From: emailId.value ,Subject: subject.value, Message: message.value},
      dataType: "json",
      success: function(data, status, xhttp){
        alert('Mail sent successfully.');
        location.reload();
      },
      error: function(data,status,xhttp){
        alert('Server Error.Please try after some time.');
      }
    });
  }

});
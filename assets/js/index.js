function SendMail(){
    var params={
        from_name:document.getElementById("fullName").value,
        email_id:document.getElementById("email_id").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_j7pi0su", "template_3e0rsvr", params).then(function(res){
        alert("Success " + res.status);
         // Clear the form fields
         document.getElementById("fullName").value = "";
         document.getElementById("email_id").value = "";
         document.getElementById("message").value = "";
    })
}
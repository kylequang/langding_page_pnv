$(function(){$.validator.setDefaults({highlight:function(a){$(a).closest(".form-group").addClass("has-error")},unhighlight:function(a){$(a).closest(".form-group").removeClass("has-error")},errorPlacement:function(b,a){}});$("#phpcontactform").submit(function(a){a.preventDefault()}).validate({rules:{name:"required",l_name:"required",email:{required:true,email:true},subject:"required",phone:"required",message:"required",},messages:{first_name:"Your first name please",last_name:"Your last name please",email:"We need your email address",subject:"We need your subject",phone:"Please enter your phone number",message:"Please enter your message",},submitHandler:function(c){$("#js-contact-btn").attr("disabled",true);var e=$("#phpcontactform").data("redirect");var d=false;if(e=="none"||e==""||e==null){d=true}$("#js-contact-btn").text("Please wait");var f=$("#js-contact-result").data("success-msg");var b=$("#js-contact-result").data("error-msg");var a=$(c).serialize();$.ajax({type:"POST",data:a,url:"php/contact.php",cache:false,success:function(g){$(".form-group").removeClass("has-success");if(g=="success"){if(d){$("#js-contact-btn").text(f);$("#phpcontactform")[0].reset()}else{window.location.href=e}}else{$("#js-contact-btn").text(b);setTimeout(function(){$("#js-contact-btn").text("Send Message")},2000)}$("#js-contact-btn").attr("disabled",false)},error:function(g){$("#js-contact-btn").text("Cannot access Server");$("#js-contact-btn").attr("disabled",false);setTimeout(function(){$("#js-contact-btn").text("Send Message")},2000)}});return false}})});
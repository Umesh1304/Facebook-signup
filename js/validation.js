$(document).ready(function(){
    $('#signup').validate({
        rules: {

            fname: {

               required: true,
               minlength: 5,
            },
            sname: {

                required: true,
                minlength: 5,
            },
            number:{
                required: true,
                minlength:10,

            },
            password:{
                required: true,
                minlength: 8,
               
            },
            day:{
                required: true,
            },
            month:{
                required: true,
            },
            year:{
                required: true,
            },
            gender:{
                    required: true,
            },
       },
       messages: {
        password: {
            required: "Please enter a password.",
            minlength: "Your password must be at least 6 characters long.",
            containsSpecialChar: "Your password must contain at least one special character.",
            containsNumber: "Your password must contain at least one number."
        }
    },
    messages:{
        fname:{
             required: "Please enter your first name",
             minlength: "please enter minimum five letters"
        }

    },

    })
});
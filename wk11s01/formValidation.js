//create a function that will be called when user submit the form

function ValidateForm(){

    //reset error messages
    var errors = document.querySelectorAll(".error");
    for(var x=0 ; x<errors.length; x++){
        errors[x].innerText="";
    }

    //1: GET THE VALUES ENTERED BY THE USER
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let email = document.getElementById("email").value;
    
    //gender
    let mgender = document.getElementById("male").checked;
    
    //hobbies
    let hobby1 = document.getElementById("hobby1").checked;
    let hobby2 = document.getElementById("hobby2").checked;
    let hobby3 = document.getElementById("hobby3").checked;

    let age = document.getElementById("age").value;
    let country = document.getElementById("country").value;
    let comments = document.getElementById("comments").value;
    
    //validation for full name
    if(name.length<5){
        document.getElementById("nameError").innerText="The name should be more than 5 characters.";
        return false;
    }

    //check password
    var re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    if(!(re.test(password))){
        document.getElementById("passwordError").innerText = "Password should be eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
        return false;
    }
    // if(password.length>=8){
    //     document.getElementById("passwordError").innerText="The password should be more than 8 characters.";
    // }

    //check if password equal to confirm password
    if(password != cpassword){
        document.getElementById("cpasswordError").innerText="Confirm password doesn't match with password";
        return false;
    }

    //check if the user select at least one hobby
    if(!hobby1 || !hobby2 || hobby3){
        document.getElementById("hobbyError").innerText = "Please, select at least one hobby.";
        return false;
    }

    //age verification
    if(age<18){
        document.getElementById("ageError").innerText = "You should be 18 years old or more.";
        return false;
    }

    //comments validation
    if(comments.length < 5 || comments.length > 250){
        document.getElementById("commentsError").innerText = "Comments should be between 10 and 250 characters.";
        return false;
    }

}
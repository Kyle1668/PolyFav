/**
 * Created by kyleobrien on 7/22/17.
 */

var ERROR_MESSAGE = "<strong class=\"error\">Invalid Input: Username or password is incorrect.</strong>"

function submit() {
    var nameInput = $("#UserNameInput").val();
    var passwordInput = $("#PasswordInput").val();
    var errorMessagePrinted = $(".error").length === 0
    var validInput = nameInput !== "" || passwordInput !== "";

    console.log(validInput);
    console.log(nameInput);
    console.log(passwordInput);

    if (validInput) {
        /*location.href = 'app.html';*/
    }
    else if (errorMessagePrinted) {
        $("#SubmitButton").after(ERROR_MESSAGE)
    }
}

$(document).ready(function() {
    $("#SubmitButton").click(function() {
        submit()
    });
});
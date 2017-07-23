
var ERROR_MESSAGE = "<strong class=\"error\">Incorrect Username or Password.</strong>";

function clearErrorMessage() {
    var errorMessage = $(".error");
    if (errorMessage.count !== 0) {
        errorMessage.fadeOut("fast", "linear", function() {
            this.remove();
        });
    }
}

function submit() {
    var nameInput = $("#UserNameInput").val();
    var validUsernameInput = nameInput !== "";
    var passwordInput = $("#PasswordInput").val();
    var validPasswordInput = passwordInput !== "";

    if (validUsernameInput && validPasswordInput) {
        location.href = 'app.html'
    }
    else if ($(".error").length === 0) {
        $("#SubmitButton").after(ERROR_MESSAGE).fadeIn("slow");
    }
}

$(document).ready(function() {

    $("#SubmitButton").click(function() {
        submit()
    });

    $(".form-control").click(function() {
        clearErrorMessage();
    });

});

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
    validUsernameInput && validPasswordInput ? location.href = 'app.html' : $("#SubmitButton").after(ERROR_MESSAGE);
}

$(document).ready(function() {
    $("#SubmitButton").click(function() {
        submit()
    });

    $(".form-control").click(function() {
        clearErrorMessage();
    });
});
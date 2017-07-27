
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
        location.href = 'application.html'
    }
    else if ($(".error").length === 0) {
        $("#SubmitButton").after(ERROR_MESSAGE).fadeIn("slow");
    }

}

$(document).ready(function() {

    var registerText = $("#register");
    var inputForm = $(".form-control");
    var submitButton = $("#SubmitButton");

    registerText.hover(
        function() {
            registerText.css("color", "indianred");
        },
        function() {
            registerText.css("color", "#777");
        }
    );

    registerText.click(function() {
        location.href = 'register.html'
    });

    submitButton.click(function() {
        submit()
    });

    inputForm.click(function() {
        clearErrorMessage();
        registerText.fadeOut("slow");
    });

    inputForm.blur(function() {
        registerText.fadeIn("slow");
    });

});

function checkFields() {
    let isValidInput = true;

    if ($("#UserNameInput").val() === "") {
        isValidInput = false;
    }

    if (!confirmPassword()) {
        isValidInput = false;
    }

    return isValidInput;
}

function confirmPassword() {
    return $("#PasswordInput").val() === $("#ConfirmInput").val();
}

function pushUser() {
    let address = 'localhost';
    let port = 3000;
    let url = 'http://' + address + port;

    let newUser = new User();
    newUser.name = $("#UserNameInput").val();
    newUser.password = $("#PasswordInput").val();

    newUser.printUser();
}

$(document).ready(function() {
    let homeReturnButton = $("#home");
    let submitButton = $("#SubmitButton");

    homeReturnButton.click(function() {
        location.href = 'index.html'
    });

    $("input").click(function() {
        let header = $(".header h1");
        if (header.text() === "Invalid Name or Password") {
            header.text("Register");
        }
    });

    submitButton.click(function() {
        if (checkFields()) {
            // Database Stuff
            pushUser();
            location.href = 'index.html'
        }
        else {
            // Print Error
            console.log("Invalid Input");
            console.log($("#UserNameInput").val());
            console.log($("#PasswordInput").val());
            console.log($("#ConfirmInput").val());
            $(".header h1").text("Invalid Name or Password");
        }
    });

});
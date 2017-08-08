
function checkFields() {
    var isValidInput = true;

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
    var address = 'localhost';
    var port = 3000;
    var url = 'http://' + address + port;

    var socket = io(url);

    var newUser = new User();

    newUser.name = $("#UserNameInput").val();
    newUser.password = $("#PasswordInput").val();

    function saveToDatabase(saveNewUser) {
        socket.emit('printUser', saveNewUser); // (send request for user just sent, save the user to server);
    }

    saveToDatabase(newUser);

    socket.on("connect", function () {
        socket.emit("setUser", setUser)
    });

    socket.on("getUser", function (data) {
        var returnData = new User(data.username, data.password);
        returnData.printUser();
    });

    newUser.printUser();
}

$(document).ready(function() {
    var homeReturnButton = $("#home");
    var submitButton = $("#SubmitButton");

    homeReturnButton.click(function() {
        location.href = 'index.html'
    });

    $("input").click(function() {
        var header = $(".header h1");
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
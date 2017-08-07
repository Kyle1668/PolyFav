
function checkFields() {
    // Checks
    return true
}

function confirmPassword() {

}

$(document).ready(function() {
    var homeReturnButton = $("#home");
    var submitButton = $("#SubmitButton");

    homeReturnButton.click(function() {
        location.href = 'index.html'
    });

    submitButton.click(function() {
        if (checkFields()) {
            // Database Stuff
            pushUser();
            location.href = 'index.html'
        }
        else {
            // Print Error
        }
    });

    function pushUser() {
        var socket = io();
        var newUser = new User();

        newUser.name = $("#UserNameInput").val();
        newUser.password = $("#PasswordInput").val();

        socket.on("saveUser", function () {
           socket.emit("newUser", newUser)
        });

        socket.on("getUser", function (data) {
            var returnData = new User(data.username, data.password);
            returnData.printUser();
        });

        newUser.printUser();
    }

});

function checkFields() {
    // Checks
    return true
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
            location.href = 'index.html'
        }
        else {
            // Print Error
        }
    });

});
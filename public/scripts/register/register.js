
function checkFields() {
    return true
}

$(document).ready(function() {

    $("#home").click(function() {
        location.href = 'index.html'
    });

    $("#SubmitButton").click(function() {
        if (checkFields()) {
            // Database Stuff
            location.href = 'index.html'
        }
        else {
            // Print Error
        }
    });

});
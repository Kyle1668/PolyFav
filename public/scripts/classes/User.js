
var User = function (inName, inPass) {

    this.name = inName;
    this.password = inPass;
    this.uniqueID = getID();

    function getID() {
        return null;
    }

    this.printUser = function() {
        console.log("Name: ", this.name);
        console.log("Password: ", this.password);
        console.log("Unique ID: ", this.uniqueID);
    }

};

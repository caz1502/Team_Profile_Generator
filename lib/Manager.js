// calling/linking parent class

const Employee = require("./Employee");

// Child class
class Manager extends Employee {
    constructor(name, id, email, officeNumber, profilePic) {
        super(name, id, email, profilePic)
        this.officeNumber = officeNumber;    
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;


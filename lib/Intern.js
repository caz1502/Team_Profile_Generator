// calling/linking parent class
const Employee = require("./Employee");


// Child class

class Intern extends Employee {
    constructor(name, id, email, school, profilePic) {
        super(name, id, email, profilePic)
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;
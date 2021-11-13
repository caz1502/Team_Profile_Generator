// Child class
// calling/linking parent class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github, profilePic) {
        super(name, id, email, profilePic);
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;


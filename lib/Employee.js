// parent class

class Employee {
    constructor(name, id, email, profilePic) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.profilePic = profilePic;
    }

    getName() {
        return this.name;

    }
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
    getpic() {
        return this.profilePic;
    }
    getRole() {
        return "Employee";
    }
}

    module.exports = Employee;

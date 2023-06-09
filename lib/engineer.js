const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    returnRole() {
        return "Engineer";
    }

    returnId() {
        return this.id;
    }

    returnGitHub() {
        return this.github;
    }
}

module.exports = Engineer;
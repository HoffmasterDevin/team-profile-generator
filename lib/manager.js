const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, managerOfficeNum) {
        super(name, id, email);
        this.managerOfficeNum = managerOfficeNum;
    }

    returnRole() {
        return "Manager";
    }

    returnManagerOfficeNum() {
        return this.managerOfficeNum;
    }
}

module.exports = Manager;
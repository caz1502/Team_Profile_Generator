const { it } = require("@jest/globals");
const Employee = require("../lib/Employee"); //make sure right file path!

describe("Employee class", () => {
  //testing methods
  describe("getName method", () => {
    // when we create a new class = creating an obj, bc creating new obj we can use the typeof to check that. (instantiations)
    it("can instantiate a new Employee", () => {
      const employee = new Employee();
      expect(typeof employee).toBe("object");
    });
    it("stores the employee's name", () => {
      const employee = new Employee("Carol");
      expect(employee.getName()).toBe("Carol");
    });

    it("getID", () => {
      const employee = new Employee("Carol", 5);
      expect(employee.getId()).toBe(5);
    });

    it("getEmail", () => {
      const employee = new Employee("Carol", 5, "carol@gmail.com");
      expect(employee.getEmail()).toBe("carol@gmail.com");
    });
    // testing constructor
    it("getRole", () => {
      const employee = new Employee("Carol", 5, "carol@gmail.com");
      expect(employee.getRole()).toBe("Employee");
    });
    it("can set name", () => {
      const employee = new Employee("Carol");
      expect(employee.name).toBe("Carol");
    });
    it("can set id", () => {
      const employee = new Employee("Carol", 5);
      expect(employee.id).toBe(5);
    });
    it("can set email", () => {
      const employee = new Employee("Carol", 5, "carol@gmail.com");
      expect(employee.email).toBe("carol@gmail.com");
    });
  });
});
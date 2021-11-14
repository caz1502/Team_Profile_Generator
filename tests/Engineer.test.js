const { it } = require("@jest/globals");
const Engineer = require("../lib/Engineer"); //make sure right file path!

describe("Engineer class", () => {
    //testing methods
    describe("getName method", () => {
    // when we create a new class = creating an obj, bc creating new obj we can use the typeof to check that. (instantiations)
    it("can instantiate a new Engineer", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe("object");
    });
      it("stores the Engineer's name", () => {
        const engineer = new Engineer("Carol");
        expect(engineer.getName()).toBe("Carol");
      });
  
      it("getID", () => {
        const engineer = new Engineer("Carol", 5);
        expect(engineer.getId()).toBe(5);
      });

      it("getEmail", () => {
        const engineer = new Engineer("Carol", 5, "carol@gmail.com");
        expect(engineer.getEmail()).toBe("carol@gmail.com");

    });
// testing constructor
    it("getRole", () => {
        const engineer = new Engineer("Carol", 5, "carol@gmail.com");
        expect(engineer.getRole()).toBe("Engineer");
    });
    it("can set name", () => {
        const engineer = new Engineer("Carol");
        expect(engineer.name).toBe("Carol");
    });
    it("can set id", () => {
        const engineer = new Engineer("Carol", 5);
        expect(engineer.id).toBe(5);
    });
    it("can set email", () => {
        const engineer = new Engineer("Carol", 5, "carol@gmail.com");
        expect(engineer.email).toBe("carol@gmail.com");
    });
    });
  
  });
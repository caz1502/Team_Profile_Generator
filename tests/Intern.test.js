const Intern = require("../lib/Intern"); //make sure right file path!
//need getSchool and getRole
test('return intern\'s school', () => {
    const intern = new Intern("Carol", 5, "carol@gmail.com", "UNISA");
    expect(intern.school).toBe("UNISA");
  });

test('return intern\'s role', () => {
    const intern = new Intern("Carol", 5, "carol@gmail.com", "UNISA");
    expect(intern.getRole()).toBe("Intern");
  });
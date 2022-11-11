import { stringify } from "../src";
describe("stringify is a valid jsx factory", () => {
  it("should use a string as a tag name", () => {
    expect(stringify("section", null)).toBe("<section></section>");
  });
  it("uses props as attributes", () => {
    const input = stringify("input", {
      type: "email",
      name: "user-mail",
      minlength: 1,
      autofocus: true,
      disabled: false,
    });
    expect(input).toMatch(/type="email"/i);
    expect(input).toMatch(/name="user-mail"/i);
    expect(input).toMatch(/autofocus(?!=)/i);
    expect(input).toMatch(/disabled=""/i);
  });
  it("inserts the given children", () => {
    expect(stringify("h1", null, "Welcome stranger!")).toMatch(
      /welcome stranger/i
    );
    expect(
      stringify("div", null, stringify("span", null, "Batman & Robin"))
    ).toMatch(/<span>batman & robin<\/span>/i);
    expect(stringify("p", null, "See you later, alligator!")).toMatch(
      /<p>see you later, alligator!<\/p>/i
    );
  });
  it("unwraps children arrays", () => {
    const ul = stringify(
      "ul",
      null,
      ["Wizards of Earthsea", "Hyperion", "Lies of Locke Lamora"].map((book) =>
        stringify("li", null, book)
      )
    );
    expect(ul).toMatch(/wizards of earthsea/i);
    expect(ul).toMatch(/<li>[^<]+<\/li>/i);
    expect(ul).not.toMatch(/\[|\]/i);
  });
});

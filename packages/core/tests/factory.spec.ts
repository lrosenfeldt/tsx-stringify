import { stringify } from "../src";
describe("stringify is a valid jsx factory", () => {
  it("should use a string as a tag name", async () => {
    await expect(stringify("section", null)).resolves.toBe(
      "<section></section>"
    );
  });
  it("uses props as attributes", async () => {
    const input = await stringify("input", {
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
  it("inserts the given children", async () => {
    await expect(stringify("h1", null, "Welcome stranger!")).resolves.toMatch(
      /welcome stranger/i
    );
    await expect(
      stringify("div", null, stringify("span", null, "Batman & Robin"))
    ).resolves.toMatch(/<span>batman & robin<\/span>/i);
    await expect(
      stringify("p", null, "See you later, alligator!")
    ).resolves.toMatch(/<p>see you later, alligator!<\/p>/i);
  });
  it("unwraps children arrays", async () => {
    const ul = await stringify(
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
  it("uses resolved values of promised children", async () => {
    const ul = await stringify(
      "ul",
      null,
      stringify(
        "li",
        null,
        "Fighting Crayfishes",
        Promise.resolve("Score: "),
        Promise.resolve(12)
      ),
      stringify(
        "li",
        null,
        Promise.resolve("Charging Toads"),
        "Score: ",
        Promise.resolve(11)
      )
    );
    expect(ul).toMatch(/fighting crayfishes/i);
    expect(ul).toMatch(/charging toads/i);
    expect(ul).toMatch(/^<ul>/i);
  });
});

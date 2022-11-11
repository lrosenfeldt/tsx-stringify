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
});

import { stringify } from "../src";
describe("stringify is a valid jsx factory", () => {
  it("should use a string as a tag name", () => {
    expect(stringify("section", null)).toBe("<section></section>");
  });
});

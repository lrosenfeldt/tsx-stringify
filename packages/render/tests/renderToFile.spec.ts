import { renderToFile } from "../src";
import { TmpFile } from "./file-utils";

const HTML_FILE = new TmpFile("jsx-renderToFile.html");

beforeEach(() => HTML_FILE.delete());

describe("renderToFile writes jsx to disk", () => {
  const jsxSync = "<p>Don't banish me to a file puny, little mortal!</p>",
    jsx = Promise.resolve("<p>In a while crocodile</p>");
  it("creates a file with the given content", async () => {
    await renderToFile(jsxSync, HTML_FILE.path);
    expect(HTML_FILE.content()).toBe(jsxSync);
  });
  it("works with promises", async () => {
    await renderToFile(jsx, HTML_FILE.path);
    const content = await jsx;
    expect(HTML_FILE.content()).toBe(content);
  });
  it("doesn't overwrite files by default", async () => {
    HTML_FILE.create();
    await expect(async () =>
      renderToFile(jsxSync, HTML_FILE.path)
    ).rejects.toThrow(/EEXIST/i);
  });
});

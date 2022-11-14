import "@testing-library/jest-dom";

import { screen } from "@testing-library/dom";
import { Fragment, HTML, stringify } from "@tsx-stringify/sync";

describe("jsx is html with xml-syntax (synchronous)", () => {
  it("outputs the corresponding the html", () => {
    const html = (
      <div role="tab">
        <h1 class="heading-lg">Welcome to TypeScript-Land!</h1>
        <section>
          <h2 class="heading-md">How to: Custom JSX in TypeScript</h2>
          <em>Look how awesome it is</em>
        </section>
      </div>
    );
    document.body.innerHTML = html;
    expect(screen.getByRole("tab")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /welcome to typescript-land/i
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass("heading-md");
  });
  it("provides an <HTML />-Tag that adds the neccessary doctype", () => {
    const html = (
      <HTML lang="en">
        <body>
          <h1>This is the body</h1>
          <p>I'm a sexy and I know it!</p>
        </body>
      </HTML>
    );
    document.body.innerHTML = html;
    expect(document.doctype).not.toBeNull();
    expect(html).toMatch(/^<!DOCTYPE html>/);
    expect(screen.getByText(/i'm a sexy and i know it!/i)).toBeInTheDocument();
  });
  it("provides a fragment to wrap plain values", () => {
    const html = (
      <>
        <h1>Hello World</h1>
        <p class="cthulhu">fthagn!</p>
      </>
    );
    document.body.innerHTML = html;
    expect(document.body.childElementCount).toBe(2);
    expect(screen.getByText(/fthagn/i)).toHaveClass("cthulhu");
  });
});

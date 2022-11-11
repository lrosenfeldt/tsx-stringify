import "@testing-library/jest-dom";

import { screen } from "@testing-library/dom";
import { stringify } from "@tsx-stringify/core";
describe("jsx is html with xml-syntax", () => {
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
});

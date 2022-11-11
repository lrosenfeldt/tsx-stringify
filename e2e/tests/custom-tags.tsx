import "@testing-library/jest-dom";

import { screen } from "@testing-library/dom";
import { stringify, Tag } from "@tsx-stringify/core";

function waitfor<T>(data: T, ms: number): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(data), ms));
}

describe("you can define custom tags", () => {
  type CoolProps = Tag.PropsWithChildren<{ notSoSecretNumber: number }>;
  type MyTag = Tag.Func<CoolProps>;
  it("allows functional tags", async () => {
    const MyTag: MyTag = ({ children, notSoSecretNumber }) => {
      return (
        <div>
          {children}
          <em>The number is {notSoSecretNumber}</em>
        </div>
      );
    };
    document.body.innerHTML = await (
      <MyTag notSoSecretNumber={31}>
        <h2>Look at the number below</h2>
      </MyTag>
    );
    expect(screen.getByText(/31/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /look at the number/i
    );
  });
  it("supports async operations", async () => {
    const MyTag: Tag.Func = async () => {
      const books = await waitfor(
        [
          { name: "It", author: "Stephen King" },
          { name: "Wizards of Earthsea", author: "Ursula K. Le Guin" },
          { name: "Lies of Locke Lamora", author: "Scott Lynch" },
        ],
        10
      );
      return (
        <div>
          <ul>
            {books.map(({ name, author }) => (
              <li>
                {name} by {author}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    await expect(<MyTag />).resolves.toMatch(/it by stephen king/i);
    await expect(<MyTag />).resolves.toMatch(
      /wizards of earthsea by ursula k. le guin/i
    );
    await expect(<MyTag />).resolves.toMatch(
      /lies of locke lamora by scott lynch/i
    );
  });
  it("allows class tags", async () => {
    class MyTag {
      props: CoolProps;
      constructor(props: CoolProps) {
        this.props = props;
      }
      render() {
        return (
          <div>
            {this.props.children}
            <em>The number is {this.props.notSoSecretNumber}</em>
          </div>
        );
      }
    }
    const html = await (
      <MyTag notSoSecretNumber={31}>
        <h2>Look at the number below</h2>
      </MyTag>
    );
    expect(html).toMatch(/31/);
    expect(html).toMatch(/look at the number/i);
  });
});

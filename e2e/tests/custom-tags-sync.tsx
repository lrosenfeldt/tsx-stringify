import "@testing-library/jest-dom";

import { screen } from "@testing-library/dom";
import { stringify, Tag } from "@tsx-stringify/sync";

describe("you can define custom tags (synchronous)", () => {
  type CoolProps = Tag.PropsWithChildren<{ notSoSecretNumber: number }>;
  type MyTag = Tag.Func<CoolProps>;
  it("allows functional tags", () => {
    const MyTag: MyTag = ({ children, notSoSecretNumber }) => {
      return (
        <div>
          {children}
          <em>The number is {notSoSecretNumber}</em>
        </div>
      );
    };
    document.body.innerHTML = (
      <MyTag notSoSecretNumber={31}>
        <h2>Look at the number below</h2>
      </MyTag>
    );
    expect(screen.getByText(/31/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      /look at the number/i
    );
  });
  it("allows class tags", () => {
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
    const html = (
      <MyTag notSoSecretNumber={31}>
        <h2>Look at the number below</h2>
      </MyTag>
    );
    expect(html).toMatch(/31/);
    expect(html).toMatch(/look at the number/i);
  });
});

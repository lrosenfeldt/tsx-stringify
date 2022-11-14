import { Fragment, stringify, Tag } from "../src";

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
      ["Wizards of Earthsea", "Hyperion", "Lies of Locke Lamora"].map(book =>
        stringify("li", null, book)
      )
    );
    expect(ul).toMatch(/wizards of earthsea/i);
    expect(ul).toMatch(/<li>[^<]+<\/li>/i);
    expect(ul).not.toMatch(/\[|\]/i);
  });
  it("respects void tags", () => {
    expect(stringify("input", null, "Pennywise")).toBe("<input>");
    expect(stringify("hr", { role: "presentation" })).toBe(
      '<hr role="presentation">'
    );
  });
  it("uses functions as custom tags", () => {
    type MagicProps = Tag.PropsWithChildren<{ spell: string }>;
    type MyTag = Tag.Func<MagicProps>;
    const MyTag: MyTag = ({ children, spell }) => {
      return stringify(
        "div",
        null,
        stringify("em", null, `I cast ${spell} at your content!`),
        children
      );
    };
    const MockedTag = jest.fn<ReturnType<MyTag>, [MagicProps]>(MyTag);
    const props = { spell: "fireball" };
    const children = stringify("p", null, "Im good content");
    const html = stringify(MockedTag, props, children);
    expect(MockedTag).toHaveBeenCalledTimes(1);
    expect(MockedTag).toHaveBeenCalledWith({
      ...props,
      children: [children],
    });
    expect(html).toMatch(/fireball/i);
  });
  it("uses classes as custom tags", () => {
    type FlagProps = { flag: boolean };
    class FlagTag implements Tag.Class<FlagProps> {
      props: FlagProps;
      constructor(props: FlagProps) {
        this.props = props;
      }
      render() {
        return stringify("span", null, this.screamFlag());
      }
      screamFlag() {
        return `${this.props.flag}`.toUpperCase();
      }
    }
    expect(stringify(FlagTag, { flag: false })).toMatch(/FALSE/);
  });
  it("produces same output for class & functional tag", () => {
    type DevProps = { languages: Array<{ name: string; likes?: number }> };
    type ListLanguagesTag = Tag.Func<DevProps>;
    const ListLanguagesTagFn: ListLanguagesTag = ({ languages }) => {
      return stringify(
        "div",
        null,
        stringify("h1", null, "Programming language ranking"),
        stringify(
          "ul",
          null,
          languages.map(({ name, likes }) =>
            stringify("li", null, `${name} +${likes || 0}`)
          )
        )
      );
    };
    class ListLanguagesClass implements Tag.Class<DevProps> {
      props: DevProps;
      constructor(props: DevProps) {
        this.props = props;
      }
      render() {
        return stringify(
          "div",
          null,
          stringify("h1", null, "Programming language ranking"),
          stringify(
            "ul",
            null,
            this.props.languages.map(({ name, likes }) =>
              stringify("li", null, `${name} +${likes || 0}`)
            )
          )
        );
      }
    }
    const languages = [
      { name: "JavaScript", likes: 14 },
      { name: "Rust", likes: 12 },
      { name: "Elixir", likes: 7 },
      { name: "Go", likes: 13 },
      { name: "Python" },
    ];
    const fnHtml = stringify(ListLanguagesTagFn, { languages });
    const classHtml = stringify(ListLanguagesClass, { languages });
    expect(fnHtml).toBe(classHtml);
  });
  it("has a fragment that inserts plain values as a jsx node", () => {
    const htmlFragment = stringify(
      Fragment,
      null,
      stringify("main", null, "Big foot"),
      stringify("footer", null, "Little foot")
    );
    expect(htmlFragment).toMatch(/big foot/i);
    expect(htmlFragment).toMatch(/little foot/i);
    expect(htmlFragment).toMatch(/^<main>.*<\/footer>$/i);
  });
});

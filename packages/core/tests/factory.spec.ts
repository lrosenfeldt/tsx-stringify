import { stringify, Tag } from "../src";

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
      ["Wizards of Earthsea", "Hyperion", "Lies of Locke Lamora"].map(book =>
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
  it("respects void tags", async () => {
    expect(await stringify("input", null, "Pennywise")).toBe("<input>");
    expect(await stringify("hr", { role: "presentation" })).toBe(
      '<hr role="presentation">'
    );
  });
  it("uses functions as custom tags", async () => {
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
    const children = await stringify("p", null, "Im good content");
    const html = await stringify(MockedTag, props, children);
    await expect(MockedTag).toHaveBeenCalledTimes(1);
    await expect(MockedTag).toHaveBeenCalledWith({
      ...props,
      children: [children],
    });
    await expect(html).toMatch(/fireball/i);
  });
  it("uses classes as custom tags", async () => {
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
    expect(await stringify(FlagTag, { flag: false })).toMatch(/FALSE/);
  });
  it("produces same output for class & functional tag", async () => {
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
    const fnHtml = await stringify(ListLanguagesTagFn, { languages });
    const classHtml = await stringify(ListLanguagesClass, { languages });
    expect(fnHtml).toBe(classHtml);
  });
});

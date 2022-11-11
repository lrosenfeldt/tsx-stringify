# tsx-stringify

Use TypeScript to turn your JSX into html strings. Benefit from type checking and high html compability with every JS-Developers favorite templating language: JSX!

## Roadmap

- [x] type checked jsx with high html compability
- [x] handle basic string tags
- [x] convert props to attributes
- [x] insert children
- [x] handle async children
- [x] handle void tags
- [x] custom functional tags
- [x] custom class tags
- [x] fragment
- [x] `<HTML />`-Tag to add doctype
- [ ] add synchronous alternative
- [ ] render to file
- [ ] examples
  - [ ] node server
  - [ ] basic ssg
  - [ ] 11ty

## Docs

### Configure TypeScript for tsx-stringify

You need to tell TypeScript, to use the `stringify` function to replace your JSX. This function, the so called `jsxFactory` is used to generate the html-strings _at runtime_. A simple jsx tag `<div role="tab">Tab 1</div>` will be then turned into `stringify("div", { role: "tab" }, "Tab 1")`. To allow the use of fragments set `jsxFragmentFactory` to `Fragment`. You need to explicitly import `stringify` and `Fragment` in your `.tsx`-Files to make this work.

```json
{
  // in your tsconfig.json
  "compilerOptions": {
    // add these 2 lines
    "jsxFactory": "stringify",
    "jsxFragmentFactory": "Fragment"
  }
}
```

Now you're ready to go!

```tsx
// some.tsx
import { Fragment, stringify } from "@tsx-stringify/jsx";

// by default all operations are asynchronous in tsx-stringify
const Section: Tag.Func = async () => {
  // get a text to display but only after 100 ms
  const promisedText = new Promise(resolve =>
    setTimeout(() => resolve("I hope you enjoy your stay!"), 100)
  );
  return (
    <section>
      <h1>Welcome to TypeScript-Land</h1>
      <p>{promisedText}</p>
    </section>
  );
};

const ListContent: Tag.Func<{ books: string[] }> = async ({ books }) => {
  return (
    <>
      {books.map(book => (
        <li>{book}</li>
      ))}
    </>
  );
};
```

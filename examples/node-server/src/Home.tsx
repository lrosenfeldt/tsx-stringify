import { stringify, Tag } from "@tsx-stringify/core";

import { Layout } from "./Layout";

export const Home: Tag.Func = async () => {
  const date = new Date().toISOString();
  return (
    <Layout>
      <h1>TSX-Stringify - Node Sever</h1>
      <main>
        <section>
          <h2>Use JSX with only TypeScript for simple SSR!</h2>
          <small>This content was rendered on the server at {date}</small>
        </section>
      </main>
    </Layout>
  );
};

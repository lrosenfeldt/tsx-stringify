import { stringify, Tag } from "@tsx-stringify/core";
type Props = Tag.PropsWithChildren;
export const Layout: Tag.Func<Props> = async ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

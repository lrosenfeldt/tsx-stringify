import { writeFile } from "node:fs/promises";

export type RenderOptions = {
  overwrite: boolean;
};
export async function renderToFile(
  jsx: string | Promise<string>,
  fileName: string,
  options: Partial<RenderOptions> = {}
) {
  const content = await jsx;
  return writeFile(fileName, content, {
    encoding: "utf8",
    flag: options.overwrite ? "w+" : "wx",
  });
}

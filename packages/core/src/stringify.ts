import { attributesFromProps, childToString } from "@tsx-stringify/common";
import * as JSXInternal from "./jsx";
function contentFromChilren(children: unknown[]): string {
  const content: string[] = [];
  for (const child of children) {
    if (child === null) continue;
    if (Array.isArray(child)) {
      content.push(contentFromChilren(child));
      continue;
    }
    content.push(childToString(child));
  }
  return content.join("");
}
export function stringify(
  tag: string,
  props: Record<string, unknown> | null,
  ...children: unknown[]
): JSXInternal.Element {
  if (!props) props = {};
  return `<${tag}${attributesFromProps(props)}>${contentFromChilren(
    children
  )}</${tag}>`;
}
export namespace stringify {
  export import JSX = JSXInternal;
}

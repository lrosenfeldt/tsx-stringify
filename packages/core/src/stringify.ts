import { attributesFromProps } from "@tsx-stringify/common";
import * as JSXInternal from "./jsx";
export function stringify(
  tag: string,
  props: Record<string, unknown> | null
): JSXInternal.Element {
  if (!props) props = {};
  return `<${tag}${attributesFromProps(props)}></${tag}>`;
}
export namespace stringify {
  export import JSX = JSXInternal;
}

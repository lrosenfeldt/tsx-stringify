import * as JSXInternal from "./jsx";
export function stringify(
  tag: string,
  props: Record<string, unknown> | null
): JSXInternal.Element {
  return `<${tag}></${tag}>`;
}
export namespace stringify {
  export import JSX = JSXInternal;
}

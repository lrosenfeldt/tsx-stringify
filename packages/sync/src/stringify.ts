import {
  attributesFromProps,
  childToString,
  isRenderable,
  isVoid,
} from "@tsx-stringify/common";

import * as JSXInternal from "./jsx";
function* unwrapChildren(
  children: JSXInternal.ChildNode[]
): Generator<JSXInternal.Child> {
  for (const child of children) {
    if (child === null) continue;
    if (Array.isArray(child)) {
      for (const innerChild of unwrapChildren(child)) {
        yield innerChild;
      }
      continue;
    }
    yield child;
  }
}
function contentFromChilren(children: JSXInternal.ChildNode[]): string {
  const content: string[] = [];
  for (const child of unwrapChildren(children)) {
    content.push(childToString(child));
  }
  return content.join("");
}
export function stringify(
  tag: string | Function,
  props: Record<string, unknown> | null,
  ...children: JSXInternal.ChildNode[]
) {
  if (!props) props = {};
  if (typeof tag === "function") {
    props["children"] = children;
    return isRenderable<JSXInternal.Element>(tag)
      ? new tag(props).render()
      : tag(props);
  }
  if (isVoid(tag)) {
    return `<${tag}${attributesFromProps(props)}>`;
  }
  return `<${tag}${attributesFromProps(props)}>${contentFromChilren(
    children
  )}</${tag}>`;
}
export namespace stringify {
  export import JSX = JSXInternal;
}
export function Fragment({
  children,
}: {
  children?: JSXInternal.ChildNode[];
}): JSXInternal.Element {
  return children ? contentFromChilren(children) : "";
}
export function HTML(
  props: JSXInternal.IntrinsicElements["html"]
): JSXInternal.Element {
  const { children } = props;
  delete props.children;
  return (
    "<!DOCTYPE html>" +
    "\n" +
    stringify("html", props as Record<string, unknown>, children)
  );
}

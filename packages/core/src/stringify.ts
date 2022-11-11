import {
  attributesFromProps,
  childToString,
  isRenderable,
  isVoid,
} from "@tsx-stringify/common";

import * as JSXInternal from "./jsx";
async function* unwrapChildren(
  children: JSXInternal.ChildNode[]
): AsyncGenerator<JSXInternal.ChildSync> {
  for (let child of children) {
    child = child instanceof Promise ? await child : child;
    if (child === null) continue;
    if (Array.isArray(child)) {
      for await (const innerChild of unwrapChildren(child)) {
        yield innerChild;
      }
      continue;
    }
    yield child;
  }
}
async function contentFromChilren(
  children: JSXInternal.ChildNode[]
): Promise<string> {
  const content: string[] = [];
  for await (const child of unwrapChildren(children)) {
    content.push(childToString(child));
  }
  return content.join("");
}
export async function stringify(
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
  return `<${tag}${attributesFromProps(props)}>${await contentFromChilren(
    children
  )}</${tag}>`;
}
export namespace stringify {
  export import JSX = JSXInternal;
}
export async function Fragment({
  children,
}: {
  children?: JSXInternal.ChildNode[];
}): JSXInternal.Element {
  return children ? await contentFromChilren(children) : "";
}
export async function HTML(
  props: JSXInternal.IntrinsicElements["html"]
): JSXInternal.Element {
  const { children } = props;
  delete props.children;
  const html = await stringify(
    "html",
    props as Record<string, unknown>,
    children
  );
  return "<!DOCTYPE html>" + "\n" + html;
}

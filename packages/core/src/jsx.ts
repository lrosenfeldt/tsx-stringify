import { AsJsxIntrinsicElements } from "@tsx-stringify/html-types";
export interface ElementChildrenAttribute {
  children: {};
}
export type Child = boolean | null | number | string | undefined;
export type ChildNode = Child | Child[];
export interface IntrinsicElements
  extends AsJsxIntrinsicElements<{}, ChildNode> {}

import { AsJsxIntrinsicElements } from "@tsx-stringify/html-types";
// return type of an jsx expression
export type Element = Promise<string>;
// all properties are passed down in a object called `props`
export interface ElementAttributesProperty {
  props: {};
}
/**
 * jsx children are named `children` in props. This allows to specify a children property for entries in JSX.IntrinsicElements that will be used to type check the actual children.
 * @example ```tsx
 * // this will be correctly transformed
 * <div children={<span>I'm a child</span>}>I have a family</div>
 * // this will fail because of `type JSX.IntrinsicElements.hr = { children?: never }`
 * <hr>I have not permission to be here :(</hr>
 * ```
 */
export interface ElementChildAttribute {
  children: {};
}
// disabled class based elements
export type ElementClass = never;
export interface IntrinsicAttributes {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface IntrinsicClassAttributes<T> {}
// helper types for the jsx implementaiton. They have no special meaning when TS uses the JSX namespace to type check the jsx.
export type ChildSync = boolean | null | number | string | undefined;
export type Child = ChildSync | Promise<ChildSync>;
export type ChildNode =
  | Child
  | Child[]
  | Promise<Child[]>
  | Promise<Promise<ChildSync>[]>;
export interface IntrinsicElements
  extends AsJsxIntrinsicElements<{}, ChildNode> {}

import * as JSX from "./jsx";
export type ChildNode = JSX.ChildNode;
export type PropsWithChildren<P extends Record<string, unknown> = {}> = P & {
  children?: ChildNode;
};
export type Func<P extends Record<string, unknown> = {}> = (
  props: P
) => JSX.Element | null;
export type Class<P extends Record<string, unknown> = {}> = {
  props: P;
  render(): JSX.Element | null;
};

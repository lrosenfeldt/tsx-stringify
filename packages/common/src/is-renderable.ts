export interface RenderableConstructor<T> {
  new (props: Record<string, unknown>): { render(): T | null };
}
export function isRenderable<T>(
  tag: Function
): tag is RenderableConstructor<T> {
  return Boolean(tag.prototype?.render);
}

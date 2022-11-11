const VOID_TAGS = new Set<string>([
  "area",
  "base",
  "br",
  "col",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr",
]);
export function isVoid(tag: string) {
  return VOID_TAGS.has(tag);
}

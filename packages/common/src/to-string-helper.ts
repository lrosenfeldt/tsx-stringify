export function attributesFromProps(props: Record<string, unknown>): string {
  const attributes: string[] = [];
  for (const key in props) {
    const prop = props[key];
    switch (typeof prop) {
      case "boolean":
        attributes.push(prop ? key : `${key}=""`);
        break;
      case "number":
      case "string":
        attributes.push(`${key}="${prop}"`);
        break;
      case "undefined":
        break;
      case "object":
        throw new Error(
          "An Object, including null, is not a valid prop for intrinsic elements"
        );
      default:
        throw new Error(`Unhandled prop ${prop} with type ${typeof prop}`);
    }
  }
  return attributes.length > 0 ? " " + attributes.join(" ") : "";
}
export function childToString(child: unknown): string {
  switch (typeof child) {
    case "boolean":
    case "number":
      return child.toString();
    case "string":
      return child;
    case "undefined":
      return "undefined";
    case "object":
      if (!child)
        throw new Error("null should be filtered out and not be used as child");
      if (Array.isArray(child))
        throw new Error(
          "Arrays must be unwrapped and not used as children directly"
        );
      throw new Error("Objects are not valid children");
    default:
      throw new Error(`Unhandled child ${child} of type ${typeof child}`);
  }
}

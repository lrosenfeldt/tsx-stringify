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

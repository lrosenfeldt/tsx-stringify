import * as HTML from "./html";
type AsJsx<
  Element,
  JsxProperties extends Record<string, unknown> = {},
  JsxChildren = any
> = Element & JsxProperties & { children?: JsxChildren };
/**
 * @description Generic interface to be used as `JSX.IntrinsicElements` if you need a html-based jsx.
    To use this the `JSX.ElementChildrenAttribute` must be set to default (or explicitly to `{ children: {} }`).
    This enforces the the prop with the name of children to inserted as children.
 */
export interface AsJsxIntrinsicElements<
  JsxProperties extends Record<string, unknown>,
  JsxChildren = any
> {
  a: AsJsx<HTML.AnchorElement, JsxProperties, JsxChildren>;
  abbr: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  address: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  area: AsJsx<HTML.AreaElement, JsxProperties, never>;
  article: AsJsx<
    HTML.Element<
      | "application"
      | "document"
      | "feed"
      | "main"
      | "none"
      | "presentation"
      | "region"
    >,
    JsxProperties,
    JsxChildren
  >;
  aside: AsJsx<
    HTML.Element<
      "feed" | "none" | "note" | "presentation" | "region" | "search"
    >,
    JsxProperties,
    JsxChildren
  >;
  audio: HTML.AudioElement;
  b: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  base: AsJsx<HTML.Element, JsxProperties, never>;
  bdi: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  bdo: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  blockquote: AsJsx<HTML.QuoteElement, JsxProperties, JsxChildren>;
  body: AsJsx<HTML.BodyElement, JsxProperties, JsxChildren>;
  br: AsJsx<HTML.Element<"none" | "presentation">, JsxProperties, never>;
  button: AsJsx<HTML.ButtonElement, JsxProperties, JsxChildren>;
  canvas: AsJsx<HTML.CanvasElement, JsxProperties, JsxChildren>;
  caption: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  cite: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  code: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  col: AsJsx<HTML.TableColElement, JsxProperties, never>;
  colgroup: AsJsx<HTML.TableColElement, JsxProperties, JsxChildren>;
  data: AsJsx<HTML.DataElement, JsxProperties, JsxChildren>;
  datalist: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  dd: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  del: AsJsx<HTML.ModElement, JsxProperties, JsxChildren>;
  details: AsJsx<HTML.DetailsElement, JsxProperties, JsxChildren>;
  dfn: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  dialog: AsJsx<HTML.DialogElement, JsxProperties, JsxChildren>;
  div: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  dl: AsJsx<
    HTML.Element<"group" | "list" | "none" | "presentation">,
    JsxProperties,
    JsxChildren
  >;
  dt: AsJsx<HTML.Element<"listitem">, JsxProperties, JsxChildren>;
  em: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  embed: AsJsx<HTML.EmbedElement, JsxProperties, never>;
  fieldset: AsJsx<HTML.FieldSetElement, JsxProperties, JsxChildren>;
  figcaption: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  figure: AsJsx<
    HTML.Element<"group" | "none" | "presentation">,
    JsxProperties,
    JsxChildren
  >;
  footer: AsJsx<
    HTML.Element<"group" | "presentation" | "none">,
    JsxProperties,
    JsxChildren
  >;
  form: AsJsx<HTML.FormElement, JsxProperties, JsxChildren>;
  h1: AsJsx<
    HTML.Element<"tab" | "presentation" | "none">,
    JsxProperties,
    JsxChildren
  >;
  h2: AsJsx<
    HTML.Element<"tab" | "presentation" | "none">,
    JsxProperties,
    JsxChildren
  >;
  h3: AsJsx<
    HTML.Element<"tab" | "presentation" | "none">,
    JsxProperties,
    JsxChildren
  >;
  h4: AsJsx<
    HTML.Element<"tab" | "presentation" | "none">,
    JsxProperties,
    JsxChildren
  >;
  h5: AsJsx<
    HTML.Element<"tab" | "presentation" | "none">,
    JsxProperties,
    JsxChildren
  >;
  h6: AsJsx<
    HTML.Element<"tab" | "presentation" | "none">,
    JsxProperties,
    JsxChildren
  >;
  head: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  header: AsJsx<
    HTML.Element<"group" | "presentation" | "none">,
    JsxProperties,
    JsxChildren
  >;
  hr: AsJsx<HTML.Element<"presentation" | "none">, JsxProperties, never>;
  html: AsJsx<HTML.HtmlElement, JsxProperties, JsxChildren>;
  i: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  iframe: AsJsx<HTML.IFrameElement, JsxProperties, JsxChildren>;
  img: AsJsx<HTML.ImageElement, JsxProperties, never>;
  input: AsJsx<HTML.InputElement, JsxProperties, never>;
  ins: AsJsx<HTML.ModElement, JsxProperties, JsxChildren>;
  kbd: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  label: AsJsx<HTML.LabelElement, JsxProperties, JsxChildren>;
  legend: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  li: AsJsx<HTML.LiElement, JsxProperties, JsxChildren>;
  link: AsJsx<HTML.LinkElement, JsxProperties, never>;
  main: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  map: AsJsx<HTML.MapElement, JsxProperties, JsxChildren>;
  mark: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  menu: AsJsx<
    HTML.Element<
      | "directory"
      | "group"
      | "listbox"
      | "menu"
      | "menubar"
      | "none"
      | "presentation"
      | "radiogroup"
      | "tablist"
      | "toolbar"
      | "tree"
    >,
    JsxProperties,
    JsxChildren
  >;
  menuitem: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  meta: AsJsx<HTML.MetaElement, JsxProperties, never>;
  meter: AsJsx<HTML.MeterElement, JsxProperties, JsxChildren>;
  nav: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  noscript: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  object: AsJsx<HTML.ObjectElement, JsxProperties, JsxChildren>;
  ol: AsJsx<HTML.OlElement, JsxProperties, JsxChildren>;
  optgroup: AsJsx<HTML.OptGroupElement, JsxProperties, JsxChildren>;
  option: AsJsx<HTML.OptionElement, JsxProperties, JsxChildren>;
  output: AsJsx<HTML.OutputElement, JsxProperties, JsxChildren>;
  p: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  picture: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  portal: AsJsx<HTML.PortalElement, JsxProperties, JsxChildren>;
  pre: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  progress: AsJsx<HTML.ProgressElement, JsxProperties, JsxChildren>;
  q: AsJsx<HTML.QuoteElement, JsxProperties, JsxChildren>;
  rp: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  rt: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  rtc: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  ruby: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  s: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  samp: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  script: AsJsx<HTML.ScriptElement, JsxProperties, JsxChildren>;
  section: AsJsx<
    HTML.Element<
      | "alert"
      | "alertdialog"
      | "application"
      | "banner"
      | "complementary"
      | "contentinfo"
      | "dialog"
      | "document"
      | "feed"
      | "log"
      | "main"
      | "marquee"
      | "navigation"
      | "none"
      | "note"
      | "presentation"
      | "search"
      | "status"
      | "tabpanel"
    >,
    JsxProperties,
    JsxChildren
  >;
  select: AsJsx<HTML.SelectElement, JsxProperties, JsxChildren>;
  small: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  source: AsJsx<HTML.SourceElement, JsxProperties, never>;
  span: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  strong: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  style: AsJsx<HTML.StyleElement, JsxProperties, JsxChildren>;
  sub: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  summary: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  sup: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  table: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  tbody: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  td: AsJsx<HTML.TdElement, JsxProperties, JsxChildren>;
  template: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  textarea: AsJsx<HTML.TextareaElement, JsxProperties, JsxChildren>;
  tfoot: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  th: AsJsx<HTML.ThElement, JsxProperties, JsxChildren>;
  thead: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  time: AsJsx<HTML.TimeElement, JsxProperties, JsxChildren>;
  title: AsJsx<HTML.Element<null>, JsxProperties, JsxChildren>;
  tr: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  track: AsJsx<HTML.TrackElement, JsxProperties, never>;
  u: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  ul: AsJsx<
    HTML.Element<
      | "directory"
      | "group"
      | "listbox"
      | "menu"
      | "menubar"
      | "none"
      | "presentation"
      | "radiogroup"
      | "tablist"
      | "toolbar"
      | "tree"
    >,
    JsxProperties,
    JsxChildren
  >;
  var: AsJsx<HTML.Element, JsxProperties, JsxChildren>;
  video: AsJsx<HTML.VideoElement, JsxProperties, JsxChildren>;
  wbr: AsJsx<HTML.Element, JsxProperties, never>;
}

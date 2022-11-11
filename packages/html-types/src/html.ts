// type of html attributes
// valid aria roles
export type AriaRole =
  | "alert"
  | "alertdialog"
  | "application"
  | "article"
  | "banner"
  | "button"
  | "cell"
  | "checkbox"
  | "columnheader"
  | "combobox"
  | "complementary"
  | "contentinfo"
  | "definition"
  | "dialog"
  | "directory"
  | "document"
  | "feed"
  | "figure"
  | "form"
  | "grid"
  | "gridcell"
  | "group"
  | "heading"
  | "img"
  | "image"
  | "link"
  | "list"
  | "listbox"
  | "listitem"
  | "log"
  | "main"
  | "marquee"
  | "math"
  | "menu"
  | "menubar"
  | "menuitem"
  | "menuitemcheckbox"
  | "menuitemradio"
  | "navigation"
  | "none"
  | "note"
  | "option"
  | "presentation"
  | "progressbar"
  | "radio"
  | "radiogroup"
  | "region"
  | "row"
  | "rowgroup"
  | "rowheader"
  | "scrollbar"
  | "search"
  | "searchbox"
  | "separator"
  | "slider"
  | "spinbutton"
  | "status"
  | "switch"
  | "tab"
  | "table"
  | "tablist"
  | "tabpanel"
  | "term"
  | "textbox"
  | "timer"
  | "toolbar"
  | "tooltip"
  | "tree"
  | "treegrid"
  | "treeitem";
type AutocompleteAttribute =
  | "off"
  | "on"
  | "name"
  | "honorific-prefix"
  | "given-name"
  | "additional-name"
  | "family-name"
  | "honorific-suffix"
  | "nickname"
  | "email"
  | "username"
  | "new-password"
  | "current-password"
  | "one-time-code"
  | "organization-title"
  | "organization"
  | "street-address"
  | "address-line1"
  | "address-line2"
  | "address-line3"
  | "address-level4"
  | "address-level3"
  | "address-level2"
  | "address-level1"
  | "country"
  | "country-name"
  | "cc-name"
  | "cc-given-name"
  | "cc-additional-name"
  | "cc-family-name"
  | "cc-number"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-csc"
  | "cc-type"
  | "transaction-currency"
  | "transcation-amount"
  | "language"
  | "bday"
  | "bday-day"
  | "bday-month"
  | "bday-year"
  | "sex"
  | "tel"
  | "tel-country-code"
  | "tel-national"
  | "tel-area-code"
  | "tel-local"
  | "tel-extension"
  | "impp"
  | "url"
  | "photo";
export type BooleanAttribute = true | false | "";
export type FormenctypeAttribute =
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "text/plain";
export type RelationAttribute =
  | "alternate"
  | "archives"
  | "author"
  | "bookmark"
  | "canonical"
  | "dns-prefetch"
  | "external"
  | "first"
  | "help"
  | "icon"
  | "index"
  | "last"
  | "license"
  | "manifest"
  | "me"
  | "modulepreload"
  | "next"
  | "nofollow"
  | "noopener"
  | "noreferrer"
  | "opener"
  | "pingback"
  | "preconnect"
  | "prefetch"
  | "preload"
  | "prerender"
  | "prev"
  | "search"
  | "shortlink"
  | "sidebar"
  | "stylesheet"
  | "tag"
  | "up";
export type ReferrerpolicyAttribute =
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";
export type TargetAttribute = "_self" | "_blank" | "_parent" | "_top";
// utilities
// for every html element different roles are allowed
// use extends with tuples to prevent distributive behavior
export type PermittedRoles<R extends AriaRole | null> = [R] extends [AriaRole]
  ? Extract<AriaRole, AriaRole>
  : never;
// global Attributes (available on all html elements)
export interface AriaAttributes {
  "aria-activedescendant"?: string;
  "aria-atomic"?: "true" | "false";
  "aria-autocomplete"?: "none" | "inline" | "list" | "both";
  "aria-braillelabel"?: string;
  "aria-brailleroledescription"?: string;
  "aria-busy"?: "true" | "false";
  "aria-checked"?: "true" | "false";
  "aria-colcount"?: number;
  "aria-colindex"?: number;
  "aria-colindextext"?: string;
  "aria-colspan"?: number;
  "aria-controls"?: string;
  "aria-current"?:
    | "page"
    | "step"
    | "location"
    | "date"
    | "time"
    | "true"
    | "false";
  "aria-describedby"?: string;
  "aria-description"?: string;
  "aria-details"?: "true" | "false";
  "aria-disabled"?: string;
  "aria-errormessage"?: string;
  "aria-expanded"?: "true" | "false" | "undefined";
  "aria-flowto"?: string;
  "aria-haspopup"?:
    | "false"
    | "true"
    | "menu"
    | "listbox"
    | "tree"
    | "grid"
    | "dialog";
  "aria-hidden"?: "true" | "false" | "undefined";
  "aria-invalid"?: "grammar" | "false" | "spelling" | "true";
  "aria-keyshortcuts"?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-level"?: number;
  "aria-live"?: "assertive" | "off" | "polite";
  "aria-modal"?: "false" | "true";
  "aria-multiline"?: "false" | "true";
  "aria-multiselectable"?: "false" | "true";
  "aria-orientation"?: "horizontal" | "undefined" | "vertical";
  "aria-owns"?: string;
  "aria-placeholder"?: string;
  "aria-posinset"?: number;
  "aria-pressed"?: "false" | "mixed" | "true" | "undefined";
  "aria-readonly"?: "true" | "false";
  "aria-relevant"?:
    | "additions"
    | "all"
    | "removals"
    | "text"
    | "additions text";
  "aria-required"?: "true" | "false";
  "aria-roledescription"?: string;
  "aria-rowcount"?: number;
  "aria-rowindex"?: number;
  "aria-rowindextext"?: number;
  "aria-rowspan"?: number;
  "aria-selected"?: "true" | "false" | "undefined";
  "aria-setsize"?: number;
  "aria-sort"?: "ascending" | "descending" | "none" | "other";
  "aria-valuemax"?: number;
  "aria-valuemin"?: number;
  "aria-valuenow"?: number;
  "aria-valuetext"?: string;
}
/**
 * @description custom data attributes like: `<div data-hello="world"></div>`
 */
export interface DataAttributes {
  [customAttribute: `data-${string}`]: string;
}
export interface EventHandlerAttributes {
  onabort?: string;
  onautocomplete?: string;
  onautocompleteerror?: string;
  onblur?: string;
  oncancel?: string;
  oncanplay?: string;
  oncanplaythrough?: string;
  onchange?: string;
  onclick?: string;
  onclose?: string;
  oncontextmenu?: string;
  oncuechange?: string;
  ondblclick?: string;
  ondrag?: string;
  ondragend?: string;
  ondragenter?: string;
  ondragleave?: string;
  ondragover?: string;
  ondragstart?: string;
  ondrop?: string;
  ondurationchange?: string;
  onemptied?: string;
  onended?: string;
  onerror?: string;
  onfocus?: string;
  oninput?: string;
  oninvalid?: string;
  onkeydown?: string;
  onkeypress?: string;
  onkeyup?: string;
  onload?: string;
  onloadeddata?: string;
  onloadedmetadata?: string;
  onloadstart?: string;
  onmousedown?: string;
  onmouseenter?: string;
  onmouseleave?: string;
  onmousemove?: string;
  onmouseout?: string;
  onmouseover?: string;
  onmouseup?: string;
  onmousewheel?: string;
  onpause?: string;
  onplay?: string;
  onplaying?: string;
  onprogress?: string;
  onratechange?: string;
  onreset?: string;
  onresize?: string;
  onscroll?: string;
  onseeked?: string;
  onseeking?: string;
  onselect?: string;
  onshow?: string;
  onsort?: string;
  onstalled?: string;
  onsubmit?: string;
  onsuspend?: string;
  ontimeupdate?: string;
  ontoggle?: string;
  onvolumechange?: string;
  onwaiting?: string;
}
// global attributes without aria role
export interface GlobalAttributes<R extends AriaRole | null = AriaRole>
  extends AriaAttributes,
    DataAttributes,
    EventHandlerAttributes {
  accesskey?: string;
  autocapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters";
  autofocus?: BooleanAttribute;
  class?: string;
  contenteditable?: "true" | "" | "false";
  dir?: "ltr" | "rtl" | "auto";
  draggable?: "true" | "false";
  enterkeyhint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
  hidden?: BooleanAttribute;
  id?: string;
  inputmode?:
    | "none"
    | "text"
    | "decimal"
    | "numeric"
    | "tel"
    | "search"
    | "email"
    | "url";
  itemid?: string;
  itemprop?: string;
  itemref?: string;
  itemscope?: BooleanAttribute;
  itemtype?: string;
  lang?: string;
  nonce?: string;
  role?: PermittedRoles<R>;
  spellcheck?: "true" | "" | "false";
  style?: string;
  tabindex?: number;
  title?: string;
  translate?: "yes" | "" | "no";
}
// HTML Elements as used in jsx
// base interface for all html elements
// a html element has all global attributes including a role and jsx attributes
// some aria roles may be forbidden
export interface Element<Roles extends AriaRole | null = AriaRole>
  extends GlobalAttributes<Roles> {}
export interface AnchorElement
  extends Element<
    | "button"
    | "checkbox"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "option"
    | "radio"
    | "switch"
    | "tab"
    | "treeitem"
  > {
  download?: true | false | string;
  href?: string;
  hreflang?: GlobalAttributes["lang"];
  ping?: string;
  referrerpolicy?: ReferrerpolicyAttribute;
  rel?: RelationAttribute;
  target?: TargetAttribute;
  type?: string;
}
export interface AreaElement
  extends Element<null>,
    Pick<
      AnchorElement,
      | "download"
      | "href"
      | "hreflang"
      | "ping"
      | "referrerpolicy"
      | "rel"
      | "target"
    > {
  alt?: string;
  coords?: string;
  shape?: "rect" | "circle" | "poly" | "default";
}
export interface AudioElement extends Element<null> {
  autoplay?: BooleanAttribute;
  controls?: BooleanAttribute;
  controlslist?: "nodownload" | "nofullscreen" | "noremoteplayback";
  crossorigin?: "anonymous" | "use-credentials";
  disableremoteplayback?: BooleanAttribute;
  loop?: BooleanAttribute;
  mute?: BooleanAttribute;
  preload?: "none" | "metadata" | "auto" | "";
  src?: string;
}
export interface BodyElement extends Element<null> {
  onafterprint?: string;
  onbeforeprint?: string;
  onbeforeunload?: string;
  onblur?: string;
  onerror?: string;
  onfocus?: string;
  onhashchange?: string;
  onlanguagechange?: string;
  onload?: string;
  onmessage?: string;
  onoffline?: string;
  ononline?: string;
  onpopstate?: string;
  onredo?: string;
  onresize?: string;
  onstorage?: string;
  onundo?: string;
  onunload?: string;
}
export interface ButtonElement
  extends Element<
    | "checkbox"
    | "link"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "option"
    | "radio"
    | "switch"
    | "tab"
  > {
  autofocus?: BooleanAttribute;
  disabled?: BooleanAttribute;
  form?: string;
  formaction?: string;
  formenctype?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  formmethod?: "post" | "get";
  formnovalidate?: BooleanAttribute;
  formtarget?: TargetAttribute;
  name?: string;
  type?: "submit" | "reset" | "button";
  value?: string;
}
export interface CanvasElement extends Element {
  height?: number;
  width?: number;
}
export interface DataElement extends Element {
  value?: string;
}
export interface DetailsElement extends Element<null> {
  open?: BooleanAttribute;
}
export interface DialogElement extends Element<"alertdialog"> {
  open?: BooleanAttribute;
}
export interface EmbedElement
  extends Element<
    "application" | "document" | "image" | "img" | "none" | "presentation"
  > {
  height?: number;
  src?: string;
  type?: string;
  width?: string;
}
export interface FieldSetElement
  extends Element<"radiogroup" | "presentation" | "none"> {
  disabled?: BooleanAttribute;
  form?: string;
  name?: string;
}
export interface FormElement
  extends Element<"search" | "none" | "presentation"> {
  "accept-charset"?: string;
  action?: string;
  autocapitalize?: "none" | "sentences" | "words" | "characters";
  autocomplete?: "off" | "on";
  enctype?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  method?: "post" | "get" | "dialog";
  name?: string;
  nonvalidate?: BooleanAttribute;
  rel?: string;
  target?: TargetAttribute;
}
export interface HtmlElement extends Element<null> {
  xmlns?: string;
}
export interface IFrameElement
  extends Element<
    "application" | "document" | "image" | "img" | "none" | "presentation"
  > {
  allow?: string;
  csp?: string;
  fetchpriority?: "high" | "low" | "auto";
  height?: number;
  loading?: "eager" | "lazy";
  name?: string;
  referrerpolicy?: ReferrerpolicyAttribute;
  sandbox?:
    | "allow-downloads-without-user-activation"
    | "allow-downloads"
    | "allow-forms"
    | "allow-modals"
    | "allow-orientation-lock"
    | "allow-pointer-lock"
    | "allow-popups"
    | "allow-popups-to-escape-sandbox"
    | "allow-presentation"
    | "allow-same-origin"
    | "allow-scripts"
    | "allow-storage-access-by-user-activation"
    | "allow-top-navigation"
    | "allow-top-navigation-by-user-activation";
  src?: string;
  srcdoc?: string;
  width?: number;
}
export interface ImageElement
  extends Element<
    | "button"
    | "checkbox"
    | "link"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "none"
    | "option"
    | "presentation"
    | "progressbar"
    | "scrollbar"
    | "separator"
    | "slider"
    | "switch"
    | "tab"
    | "treeitem"
  > {
  alt?: string;
  crossorigin?: "anonymous" | "use-credentials";
  decoding?: "sync" | "async" | "auto";
  fetchpriority?: "high" | "low" | "auto";
  height?: number;
  ismap?: BooleanAttribute;
  loading?: "eager" | "lazy";
  referrerpolicy?: ReferrerpolicyAttribute;
  sizes?: string;
  src?: string;
  width?: number;
  usemap?: `#${string}`;
}
namespace Input {
  // an input element accepts different attributes dependening on the type attribute
  // but it is represented by the same JSX Element
  interface InputAttributes {
    accept?: string;
    alt?: string;
    autocomplete?: AutocompleteAttribute;
    autofocus?: BooleanAttribute;
    capture?: string | BooleanAttribute;
    checked?: BooleanAttribute;
    dirname?: string;
    disabled?: BooleanAttribute;
    form?: string;
    formaction?: string;
    formenctype?: FormenctypeAttribute;
    formmethod?: "get" | "post" | "dialog";
    formnovalidate?: BooleanAttribute;
    formtarget?: TargetAttribute;
    height?: number;
    id?: string;
    list?: string;
    maxlength?: number;
    minlength?: number;
    multiple?: BooleanAttribute;
    name?: string;
    pattern?: RegExp;
    placeholder?: number | string;
    readonly?: BooleanAttribute;
    required?: BooleanAttribute;
    size?: number;
    src?: string;
    step?: number | "any";
    value?: number | string;
    width?: number;
  }
  /**
   * @description The following non-standard attributes are also available on some browsers. As a general rule, you should avoid using them unless it can't be helped.
   */
  interface NonStandardAttributes {
    autocorrect?: "on" | "off";
    incremental?: BooleanAttribute;
    orient?: "horizontal" | "vertical";
    results?: number;
    webkitdirectory?: BooleanAttribute;
  }
  interface ButtonElement
    extends NonStandardAttributes,
      Element<
        | "checkbox"
        | "link"
        | "menuitem"
        | "menuitemcheckbox"
        | "menuitemradio"
        | "option"
        | "radio"
        | "switch"
        | "tab"
      > {
    type: "button";
    value?: string;
  }
  interface CheckboxElement
    extends NonStandardAttributes,
      Element<"button" | "menuitemcheckbox" | "option" | "switch"> {
    type: "checkbox";
    value?: string;
  }
  interface ColorElement
    extends Pick<InputAttributes, "autocomplete" | "list">,
      NonStandardAttributes,
      Element<null> {
    type: "color";
    value?: string;
  }
  interface DateElement
    extends Pick<InputAttributes, "autocomplete" | "step">,
      NonStandardAttributes,
      Element<null> {
    type: "date";
    max?: string;
    min?: string;
    value?: string;
  }
  interface DatetimeLocalElement
    extends Pick<
        InputAttributes,
        "autocomplete" | "list" | "readonly" | "step"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "datetime-local";
    value?: string;
  }
  interface EmailElement
    extends Pick<
        InputAttributes,
        | "autocomplete"
        | "list"
        | "maxlength"
        | "minlength"
        | "multiple"
        | "name"
        | "pattern"
        | "placeholder"
        | "readonly"
        | "required"
        | "size"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "email";
    value?: string;
  }
  interface FileElement
    extends Pick<
        InputAttributes,
        "accept" | "capture" | "multiple" | "required"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "file";
    value?: string;
  }
  interface HiddenElement
    extends Pick<InputAttributes, "autocomplete">,
      NonStandardAttributes,
      Element<null> {
    type: "hidden";
    value?: string;
  }
  interface ImageElement
    extends Pick<
        InputAttributes,
        | "alt"
        | "formaction"
        | "formenctype"
        | "formmethod"
        | "formnovalidate"
        | "formtarget"
        | "src"
        | "width"
      >,
      NonStandardAttributes,
      Element<
        | "link"
        | "menuitem"
        | "menuitemcheckbox"
        | "menuitemradio"
        | "radio"
        | "switch"
      > {
    type: "image";
  }
  interface MonthElement
    extends Pick<
        InputAttributes,
        "autocomplete" | "list" | "readonly" | "step"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "month";
    value?: string;
  }
  interface NumberElement
    extends Pick<
        InputAttributes,
        "autocomplete" | "list" | "placeholder" | "readonly"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "number";
    max?: number;
    min?: number;
    value?: string | "";
  }
  interface PasswordElement
    extends Pick<
        InputAttributes,
        | "autocomplete"
        | "maxlength"
        | "minlength"
        | "pattern"
        | "placeholder"
        | "readonly"
        | "required"
        | "size"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "password";
    value?: string;
  }
  interface RadioElement
    extends Pick<InputAttributes, "checked" | "required">,
      NonStandardAttributes,
      Element<"menuitemradio"> {
    type: "radio";
    value?: string;
  }
  interface RangeElement
    extends Pick<InputAttributes, "autocomplete" | "list" | "step">,
      NonStandardAttributes,
      Element<null> {
    type: "range";
    value?: number;
    max?: number;
    min?: number;
  }
  interface ResetElement extends NonStandardAttributes, Element<null> {
    type: "reset";
    value?: string;
  }
  interface SearchElement
    extends Pick<
        InputAttributes,
        | "autocomplete"
        | "list"
        | "maxlength"
        | "minlength"
        | "pattern"
        | "placeholder"
        | "required"
        | "size"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "search";
    value?: string;
  }
  interface SubmitElement extends NonStandardAttributes, Element<null> {
    type: "submit";
    value?: string;
  }
  interface TelephoneElement
    extends Pick<
        InputAttributes,
        | "autocomplete"
        | "list"
        | "maxlength"
        | "minlength"
        | "pattern"
        | "placeholder"
        | "readonly"
        | "size"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "tel";
    value?: string;
  }
  interface TextElement
    extends Pick<
        InputAttributes,
        | "autocomplete"
        | "list"
        | "maxlength"
        | "minlength"
        | "pattern"
        | "placeholder"
        | "readonly"
        | "required"
        | "size"
      >,
      NonStandardAttributes,
      Element<"combobox" | "searchbox" | "spinbutton"> {
    // text input is the default if type is unknown to the browser or omitted
    type?: "text";
    value?: string;
  }
  interface TimeElement
    extends Pick<
        InputAttributes,
        "autocomplete" | "list" | "readonly" | "step"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "time";
    max?: string;
    min?: string;
    value?: string;
  }
  interface UrlElement
    extends Pick<
        InputAttributes,
        | "autocomplete"
        | "list"
        | "maxlength"
        | "minlength"
        | "pattern"
        | "placeholder"
        | "readonly"
        | "required"
        | "size"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "url";
    value?: string;
  }
  interface WeekElement
    extends Pick<
        InputAttributes,
        "autocomplete" | "list" | "readonly" | "step"
      >,
      NonStandardAttributes,
      Element<null> {
    type: "week";
    max?: string;
    min?: string;
    value?: string;
  }
  export type GenericElement =
    | ButtonElement
    | CheckboxElement
    | ColorElement
    | DateElement
    | DatetimeLocalElement
    | EmailElement
    | FileElement
    | HiddenElement
    | ImageElement
    | MonthElement
    | NumberElement
    | PasswordElement
    | RadioElement
    | RangeElement
    | ResetElement
    | SearchElement
    | SubmitElement
    | TelephoneElement
    | TextElement
    | TimeElement
    | UrlElement
    | WeekElement;
}
export type InputElement = Input.GenericElement;
export interface LabelElement extends Element<null> {
  for?: string;
}
export interface LiElement
  extends Element<
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "option"
    | "none"
    | "presentation"
    | "radio"
    | "separator"
    | "tab"
    | "treeitem"
  > {
  value?: number;
}
export interface LinkElement extends Element<null> {
  as:
    | "audio"
    | "document"
    | "embed"
    | "fetch"
    | "font"
    | "image"
    | "object"
    | "script"
    | "style"
    | "track"
    | "video"
    | "worker";
  crossorigin?: "anonymous" | "use-credentials";
  fetchpriority?: "high" | "low" | "auto";
  href?: string;
  hreflang?: GlobalAttributes["lang"];
  imagesizes?: string;
  imagesrcset?: string;
  integrity?: string;
  media?: string;
  prefetch?: BooleanAttribute;
  referrerpolicy?: ReferrerpolicyAttribute;
  rel?: RelationAttribute;
  sizes?: string;
  type?: string;
}
export interface MapElement extends Element<null> {
  name?: string;
}
export interface MetaElement extends Element<null> {
  charset?: "utf-8";
  content?: string;
  "http-equiv"?:
    | "content-security-policy"
    | "content-type"
    | "default-style"
    | "x-ua-compatible"
    | "refresh"
    | "name";
}
export interface MeterElement extends Element<null> {
  high?: number;
  low?: number;
  max?: number;
  min?: number;
  optimum?: number;
  value?: number;
}
export interface ModElement extends Element {
  cite?: string;
  datetime?: string;
}
export interface ObjectElement
  extends Element<"application" | "document" | "image" | "img"> {
  data?: string;
  form?: string;
  height?: number;
  name?: string;
  type?: string;
  usemap?: `#${string}`;
  width?: number;
}
export interface OlElement
  extends Element<
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
  > {
  reversed?: BooleanAttribute;
  start?: number;
  type?: "a" | "A" | "i" | "I" | "1";
}
export interface OptGroupElement extends Element<null> {
  disabled?: BooleanAttribute;
  label?: string;
}
export interface OptionElement extends Element<null> {
  disabled?: BooleanAttribute;
  label?: string;
  selected?: BooleanAttribute;
  value?: string;
}
export interface OutputElement extends Element {
  for?: string;
  form?: string;
  name?: string;
}
export interface PortalElement extends Element<null> {
  referrerpolicy?: ReferrerpolicyAttribute;
  src?: string;
}
export interface ProgressElement extends Element<null> {
  max?: number;
  min?: number;
}
export interface ScriptElement extends Element<null> {
  async?: BooleanAttribute;
  crossorigin?: string;
  defer?: BooleanAttribute;
  fetchpriority?: "high" | "low" | "auto";
  integrity?: string;
  nomodule?: BooleanAttribute;
  nonce?: string;
  referrerpolicy?: ReferrerpolicyAttribute;
  src?: string;
  type?: string;
}
export interface SelectElement extends Element<"menu"> {
  autocomplete?: AutocompleteAttribute;
  autofocus?: BooleanAttribute;
  disabled?: BooleanAttribute;
  form?: string;
  multiple?: BooleanAttribute;
  name?: string;
  required?: BooleanAttribute;
  size?: number;
}
export interface SourceElement extends Element<null> {
  type?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  media?: string;
  height?: number;
  width?: number;
}
export interface StyleElement extends Element<null> {
  media?: string;
  nonce?: string;
}
export interface TableColElement extends Element<null> {
  span?: number;
}
export interface TextareaElement extends Element<null> {
  autocomplete?: Extract<AutocompleteAttribute, "on" | "off">;
  autocorrect?: "on" | "off";
  autofocus?: BooleanAttribute;
  cols?: number;
  disabled?: BooleanAttribute;
  form?: string;
  maxlength?: number;
  minlength?: number;
  name?: string;
  placeholder?: string;
  readonly?: BooleanAttribute;
  required?: BooleanAttribute;
  rows?: number;
  wrap?: "hard" | "soft" | "off";
}
export interface TdElement extends Element {
  colspan?: number;
  headers?: string;
  rowspan?: number;
}
export interface ThElement extends Element<"columnheader" | "rowheader"> {
  abbr?: string;
  colspan?: number;
  headers?: string;
  rowspan?: number;
  scope?: "row" | "col" | "rowgroup" | "colgroup";
}
export interface TimeElement extends Element {
  datetime?: string;
}
export interface TrackElement extends Element<null> {
  default?: BooleanAttribute;
  kind?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  label?: string;
  src?: string;
  srclang?: string;
}
export interface QuoteElement extends Element {
  cite?: string;
}
export interface VideoElement extends Element<"application"> {
  autoplay?: BooleanAttribute;
  autopictureinpicture?: BooleanAttribute;
  controlslist?: string;
  crossorigin?: "anonymous" | "use-credentials";
  disablepictureinpicture?: BooleanAttribute;
  disableremoteplayback?: BooleanAttribute;
  height?: number;
  loop?: BooleanAttribute;
  muted?: BooleanAttribute;
  playsinline?: BooleanAttribute;
  poster?: string;
  preload?: "none" | "metadata" | "auto" | "";
  src?: string;
  width?: number;
}

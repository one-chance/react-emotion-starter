const DEFAULT_PROPS = [
  {
    name: 'background',
    type: 'Colors',
    property: 'background-color',
    default: 'transparent',
  },
  {
    name: 'border',
    type: 'Colors',
    property: 'border-color',
    default: '-',
  },
  {
    name: 'radius',
    type: 'number',
    property: 'border-radius',
    default: '-',
  },
  {
    name: 'flex',
    type: 'boolean',
    property: 'flex',
    default: '-',
  },
  {
    name: 'width',
    type: 'Sizes | number',
    property: 'width',
    default: '-',
  },
  {
    name: 'minWidth',
    type: 'Sizes | number',
    property: 'min-width',
    default: '-',
  },
  {
    name: 'maxWidth',
    type: 'Sizes | number',
    property: 'max-width',
    default: '-',
  },
  {
    name: 'height',
    type: 'Sizes | number',
    property: 'height',
    default: '-',
  },
  {
    name: 'minHeight',
    type: 'Sizes | number',
    property: 'min-height',
    default: '-',
  },
  {
    name: 'maxHeight',
    type: 'Sizes | number',
    property: 'max-height',
    default: '-',
  },
  {
    name: 'margin',
    type: 'string',
    property: 'margin',
    default: '-',
  },
  {
    name: 'padding',
    type: 'string',
    property: 'padding',
    default: '-',
  },
];

const FONT_PROPS = [
  {
    name: 'font',
    type: 'string',
    property: 'font-family',
    default: 'Pretandard Variable',
  },
  {
    name: 'size',
    type: 'FontSizes',
    property: 'font-size',
    default: '1rem',
  },
  {
    name: 'weight',
    type: 'FontWeights',
    property: 'font-weight',
    default: '400',
  },
  {
    name: 'color',
    type: 'Colors',
    property: 'color',
    default: 'var(--text-color)',
  },
];

const BUTTON_PROPS = [...FONT_PROPS, ...DEFAULT_PROPS];

const INPUT_PROPS = [...FONT_PROPS, ...DEFAULT_PROPS];

const SELECT_PROPS = [
  {
    name: 'name*',
    type: 'string',
    property: '-',
    default: '-',
  },
  {
    name: 'maxHeight',
    type: 'number',
    property: 'max-height',
    default: '-',
  },
  {
    name: 'disabled',
    type: 'boolean',
    property: '-',
    default: '-',
  },
  {
    name: ' ',
    type: ' ',
    property: ' ',
    default: ' ',
  },
  {
    name: 'selected*',
    type: 'string',
    property: '-',
    default: '-',
  },
  {
    name: 'values*',
    type: 'string',
    property: '-',
    default: '-',
  },
  {
    name: 'onSelect*',
    type: '(index: number) => void',
    property: '-',
    default: '-',
  },
  {
    name: 'height',
    type: 'number',
    property: 'height',
    default: '32px',
  },
];

const TEXTAREA_PROPS = [...FONT_PROPS, ...DEFAULT_PROPS];

const TEXTFIELD_PROPS = [
  {
    name: 'as*',
    type: 'underlined | outlined',
    property: '-',
    default: '-',
  },
  {
    name: 'placeholder*',
    type: 'string',
    property: '-',
    default: '-',
  },
  {
    name: 'border*',
    type: 'Colors',
    property: '-',
    default: '-',
  },
  {
    name: 'background',
    type: 'Colors',
    property: '-',
    default: 'transparent',
  },
  {
    name: 'color',
    type: 'Colors',
    property: '-',
    default: 'var(--text-color)',
  },
  {
    name: 'error',
    type: 'string',
    property: '-',
    default: '-',
  },
  {
    name: 'correct',
    type: 'boolean',
    property: '-',
    default: '-',
  },
];

const BOX_PROPS = [
  {
    name: 'as',
    type: 'div | header | footer | main | nav | aside | section | article',
    property: '-',
    default: 'div',
  },
  ...DEFAULT_PROPS,
];

const FLEX_PROPS = [
  {
    name: 'direction',
    type: 'row | column | row-reverse | column-reverse',
    property: 'border-radius',
    default: 'row',
  },
  {
    name: 'alignItems',
    type: 'start | end | center | between | around | evenly',
    property: 'align-items',
    default: 'row',
  },
  {
    name: 'alignContent',
    type: 'start | end | center| strectch | between| around',
    property: 'align-content',
    default: '-',
  },
  {
    name: 'justifyContent',
    type: 'start | end | center | between | around | evenly',
    property: 'justify-content',
    default: '-',
  },
  {
    name: 'wrap',
    type: 'boolean',
    property: 'flex-wrap',
    default: '-',
  },
  {
    name: 'gap',
    type: 'number',
    property: 'gap',
    default: '-',
  },
  ...DEFAULT_PROPS,
  {
    name: 'pointer',
    type: 'boolean',
    property: 'cursor',
    default: 'pointer',
  },
];

const GRID_PROPS = [...DEFAULT_PROPS];

const MODAL_PROPS = [
  {
    name: 'modalId*',
    type: 'string',
    property: '-',
    default: '-',
  },
  {
    name: 'onClose*',
    type: '(id: string) => void',
    property: '-',
    default: '-',
  },
  {
    name: 'children*',
    type: 'ReactNode',
    property: '-',
    default: '-',
  },
];

const SLIDEMODAL_PROPS = [
  {
    name: 'distance*',
    type: 'number',
    property: '-',
    default: '-',
  },
  {
    name: 'modalId*',
    type: 'string',
    property: '-',
    default: '-',
  },
  {
    name: 'onClose*',
    type: '(id: string) => void',
    property: '-',
    default: '-',
  },
  {
    name: 'position*',
    type: 'top | right | bottom | left',
    property: '-',
    default: '-',
  },
  {
    name: 'children*',
    type: 'ReactNode',
    property: '-',
    default: '-',
  },
];

const IMAGE_PROPS = [
  {
    name: 'ratio',
    type: 'string',
    property: 'aspect-ratio',
    default: '-',
  },
  {
    name: 'margin',
    type: 'string',
    property: 'margin',
    default: '-',
  },
  {
    name: 'padding',
    type: 'string',
    property: 'padding',
    default: '-',
  },
];

const ICON_PROPS = [
  {
    name: 'name*',
    type: 'string',
    property: '-',
    default: '-',
  },
  {
    name: 'size*',
    type: 'number',
    property: '-',
    default: '-',
  },
  {
    name: 'color*',
    type: 'Colors',
    property: '-',
    default: '-',
  },
  {
    name: 'border',
    type: 'Colors',
    property: 'border-color',
    default: '-',
  },
  {
    name: 'radius',
    type: 'number',
    property: 'border-radius',
    default: '-',
  },
];

const SVG_PROPS = [
  {
    name: 'width',
    type: 'number',
    property: 'width',
    default: '-',
  },
  {
    name: 'height',
    type: 'number',
    property: 'height',
    default: '-',
  },
  {
    name: 'fill',
    type: 'string',
    property: 'fill',
    default: '-',
  },
  {
    name: 'margin',
    type: 'string',
    property: 'margin',
    default: '-',
  },
  {
    name: 'padding',
    type: 'string',
    property: 'padding',
    default: '-',
  },
];

const LINK_PROPS = [
  {
    name: 'href*',
    type: 'string',
    property: '-',
    default: '-',
  },
  ...FONT_PROPS,
  ...DEFAULT_PROPS,
];

const NAVLINK_PROPS = [
  {
    name: 'to*',
    type: 'string',
    property: '-',
    default: '-',
  },
  ...FONT_PROPS,
  ...DEFAULT_PROPS,
];

const PAGINATION_PROPS = [
  {
    name: 'currentPage*',
    type: 'number',
    property: '-',
    default: '-',
  },
  {
    name: 'totalPage*',
    type: 'number',
    property: '-',
    default: '-',
  },
  ...DEFAULT_PROPS,
];

const TEXT_PROPS = [...FONT_PROPS, ...DEFAULT_PROPS];

const HEADING_PROPS = [
  {
    name: 'as*',
    type: 'h1 | h2 | h3 | h4 | h5 | h6',
    property: '-',
    default: '-',
  },
  ...FONT_PROPS,
  ...DEFAULT_PROPS,
];

export const PROPS = {
  button: BUTTON_PROPS,
  input: INPUT_PROPS,
  select: SELECT_PROPS,
  textarea: TEXTAREA_PROPS,
  'text-field': TEXTFIELD_PROPS,
  box: BOX_PROPS,
  flex: FLEX_PROPS,
  grid: GRID_PROPS,
  modal: MODAL_PROPS,
  'slide-modal': SLIDEMODAL_PROPS,
  image: IMAGE_PROPS,
  icon: ICON_PROPS,
  svg: SVG_PROPS,
  link: LINK_PROPS,
  navlink: NAVLINK_PROPS,
  pagination: PAGINATION_PROPS,
  text: TEXT_PROPS,
  label: TEXT_PROPS,
  heading: HEADING_PROPS,
};

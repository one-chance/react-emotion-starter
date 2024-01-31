type ComponentTree = { main: string; sub: string[] };

export const GUIDES = ['Getting-Started'];

export const THEMES = ['color-palette', 'Dark-Mode', 'Design-Token'];

export const COMPONENTS: ComponentTree[] = [
  {
    main: 'INPUTS',
    sub: ['Button', 'Input', 'Select', 'Textarea', 'Text-Field'],
  },
  {
    main: 'LAYOUT',
    sub: ['Box', 'Flex', 'Grid', 'Modal', 'Slide-Modal'],
  },
  {
    main: 'MEDIA',
    sub: ['Image', 'Icon', 'Svg'],
  },
  {
    main: 'NAVIGATION',
    sub: ['Link', 'NavLink', 'Pagination'],
  },
  {
    main: 'TYPOGRAPHY',
    sub: ['Text', 'Label', 'Heading'],
  },
];

export interface navLinkItem {
  text: string;
  link: string;
  newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
  text: string;
  dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
  {
    text: 'Home',
    link: '/'
  },
  {
    text: 'Routes',
    link: '/routes'
  },
  {
    text: 'Register',
    dropdown: [
      {
        text: 'Runners',
        link: '/register'
      },
      {
        text: 'Volunteers',
        link: '/volunteer'
      }
    ]
  },
  {
    text: 'Sponsors',
    link: '/sponsor'
  },
  {
    text: 'Results',
    dropdown: [
      {
        text: 'Placements',
        link: '/placements'
      },
      {
        text: 'Photos',
        link: '/photos'
      }
    ]
  }
];

export default navConfig;

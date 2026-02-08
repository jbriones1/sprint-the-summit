export interface SiteDataProps {
  name: string;
  title: string;
  description: string;
  useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
  author: {
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: 'Sprint the Summit',
  // Your website's title and description (meta fields)
  title: 'Sprint the Summit',
  description: "SFSS's Annual Marathon",
  useViewTransitions: true,
  // Your information!
  author: {
    name: 'CSSS',
    email: 'webmaster@sfucsss.org',
    twitter: ''
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: '/images/sfu_aerial.jpg',
    alt: 'SFU aerial shot'
  }
};

export default siteData;

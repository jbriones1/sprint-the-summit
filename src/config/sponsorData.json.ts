import landy from '@assets/images/landy-1.png';
import sfssLogo from '@assets/images/sfss-logo-small.png';
import sfuLogo from '@assets/images/SFU-block-logo.png';

export type SponsorType = 'title' | 'gold' | 'silver' | 'bronze' | 'kind';

export interface SponsorCard {
  image: ImageMetadata;
  title: string;
  type: SponsorType;
  link: string;
}

export const sponsors: SponsorCard[] = [
  {
    image: sfssLogo,
    title: 'SFSS',
    type: 'title',
    link: 'https://sfss.ca'
  },
  {
    image: landy,
    title: 'Landy Liu',
    type: 'title',
    link: 'https://sfss.ca'
  },
  {
    image: sfssLogo,
    title: 'SFSS',
    type: 'gold',
    link: 'https://sfss.ca'
  },
  {
    image: sfuLogo,
    title: 'SFU',
    type: 'title',
    link: 'https://sfu.ca'
  },
  {
    image: landy,
    title: 'Landy Liu',
    type: 'gold',
    link: 'https://sfss.ca'
  },
  {
    image: sfuLogo,
    title: 'SFU',
    type: 'gold',
    link: 'https://sfu.ca'
  },
  {
    image: sfssLogo,
    title: 'SFSS',
    type: 'silver',
    link: 'https://sfss.ca'
  },
  {
    image: landy,
    title: 'Landy Liu',
    type: 'silver',
    link: 'https://sfss.ca'
  },
  {
    image: sfuLogo,
    title: 'SFU',
    type: 'silver',
    link: 'https://sfu.ca'
  },
  {
    image: sfssLogo,
    title: 'SFSS',
    type: 'bronze',
    link: 'https://sfss.ca'
  },
  {
    image: landy,
    title: 'Landy Liu',
    type: 'bronze',
    link: 'https://sfss.ca'
  },
  {
    image: sfuLogo,
    title: 'SFU',
    type: 'bronze',
    link: 'https://sfu.ca'
  },
  {
    image: sfssLogo,
    title: 'SFSS',
    type: 'kind',
    link: 'https://sfss.ca'
  },
  {
    image: landy,
    title: 'Landy Liu',
    type: 'kind',
    link: 'https://sfss.ca'
  },
  {
    image: sfuLogo,
    title: 'SFU',
    type: 'kind',
    link: 'https://sfu.ca'
  }
];

export function getTitleSponsors(): SponsorCard[] {
  return sponsors.filter(sponsor => sponsor.type === 'title');
}

export function getGoldSponsors(): SponsorCard[] {
  return sponsors.filter(sponsor => sponsor.type === 'gold');
}

export function getSilverSponsors(): SponsorCard[] {
  return sponsors.filter(sponsor => sponsor.type === 'silver');
}

export function getBronzeSponsors(): SponsorCard[] {
  return sponsors.filter(sponsor => sponsor.type === 'bronze');
}

export function getKindSponsors(): SponsorCard[] {
  return sponsors.filter(sponsor => sponsor.type === 'kind');
}

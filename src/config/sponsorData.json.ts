import makeAWish from '@assets/images/sponsors/make-a-wish.svg';
import cornerstone from '@assets/images/sponsors/cornerstone.png';
import nativeShoes from '@assets/images/sponsors/native-shoes.png';
import cascadeTents from '@assets/images/sponsors/cascade-tents.png';
import sfuRunClub from '@assets/images/sponsors/sfu-run-club.png';
import girlInTheWild from '@assets/images/sponsors/girl-in-the-wild.png';
import whitecaps from '@assets/images/sponsors/whitecaps.png';

export type SponsorType = 'title' | 'gold' | 'silver' | 'bronze' | 'kind';

export interface SponsorCard {
  image: ImageMetadata;
  title: string;
  type: SponsorType;
  link: string;
}

export const sponsors: SponsorCard[] = [
  {
    image: makeAWish,
    title: 'Make-A-Wish',
    type: 'title',
    link: 'https://makeawish.ca/'
  },
  {
    image: cornerstone,
    title: 'Cornerstone Printing',
    type: 'kind',
    link: 'https://printcornerstone.com'
  },
  {
    image: nativeShoes,
    title: 'Native Shoes',
    type: 'kind',
    link: 'https://www.nativeshoes.com/ca'
  },
  {
    image: cascadeTents,
    title: 'Cascade Tents',
    type: 'kind',
    link: 'https://www.cascadetentrentals.com/'
  },
  {
    image: sfuRunClub,
    title: 'SFU Running Club',
    type: 'kind',
    link: 'https://www.instagram.com/sfurunningclub/'
  },
  {
    image: girlInTheWild,
    title: 'Girl in the Wild',
    type: 'kind',
    link: 'https://girlinthewild.ca/'
  },
  {
    image: whitecaps,
    title: 'Vancouver Whitecaps',
    type: 'kind',
    link: 'https://www.whitecapsfc.com/'
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

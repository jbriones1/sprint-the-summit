import card1 from '@assets/images/tfox-run-1.jpg';
import card2 from '@assets/images/tfox-run-2.jpg';
import card3 from '@assets/images/tfox-run-3.jpg';
import route1 from '@assets/images/route-1.png';
import route2 from '@assets/images/route-2.png';
import route3 from '@assets/images/route-3.jpg';

export interface RouteData {
  name: string;
  distance: number;
  elevation: 'Flat' | 'Slight' | 'Varied';
  terrain: 'Road' | 'Path' | 'Mixed';
  cardImage: ImageMetadata;
  cardImageAlt: string;
  routeImage: ImageMetadata;
  routeImageAlt: string;
}

// Update this file with your site specific information
const routeData: RouteData[] = [
  {
    name: 'Runner',
    distance: 10,
    elevation: 'Flat',
    terrain: 'Road',
    cardImage: card1,
    cardImageAlt: 'Runner card 1',
    routeImage: route1,
    routeImageAlt: 'Runner route 1'
  },
  {
    name: 'Sprinter',
    distance: 15,
    elevation: 'Slight',
    terrain: 'Path',
    cardImage: card2,
    cardImageAlt: 'Runner card 2',
    routeImage: route2,
    routeImageAlt: 'Runner route 2'
  },
  {
    name: 'Summiter',
    distance: 25,
    elevation: 'Varied',
    terrain: 'Mixed',
    cardImage: card3,
    cardImageAlt: 'Runner card 3',
    routeImage: route3,
    routeImageAlt: 'Runner route 3'
  }
];

export default routeData;

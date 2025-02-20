import { ImageSourcePropType } from "react-native";

export type Restaurant = {
  name: string;
  description: string;
  rating: number;
  reviews: number;
  image: ImageSourcePropType; // Використовуємо `any`, оскільки `require()` повертає `any`
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
};

export const topLocations: Restaurant[] = [
  {
    name: 'DiverXO',
    description:
      'The only restaurant in Madrid with three Michelin stars, offering innovative and avant-garde dishes.',
    rating: 5,
    reviews: 1000,
    image: require('../images/modern_one_photo.png'),
    address: 'Calle de Padre Damián, 23, Chamartín, 28036 Madrid, Spain',
    coordinates: {latitude: 40.4746, longitude: -3.6917},
    openingHours: [
      'Tuesday to Saturday from 1:30 PM to 3:30 PM',
      '8:00 PM to 10:00 PM',
    ],
  },
  {
    name: 'Mad Mad Vegan - Chueca',
    description:
      'A vegan fast-food restaurant specializing in burgers, tacos, and other comfort foods.',
    rating: 4.5,
    reviews: 400,
    image: require('../images/vegan_six_photo.png'),
    address: 'Calle Pelayo, 19, Chueca, 28004 Madrid, Spain',
    coordinates: {latitude: 40.4277, longitude: -3.705},
    openingHours: [
      'Monday to Sunday from 1:00 PM to 4:00 PM and 8:00 PM to 11:00 PM',
    ],
  },
  {
    name: 'Taberna El Sur',
    description:
      'A popular tavern offering a variety of tapas and traditional Spanish dishes in a lively setting.',
    rating: 4.5,
    reviews: 8760,
    image: require('../images/TabernaElSur.png'),
    address: 'Calle de la Torrecilla del Leal, 12, Centro, 28012 Madrid, Spain',
    coordinates: {latitude: 40.4114, longitude: -3.7049},
    openingHours: [
      'Monday to Sunday from 1:00 PM to 4:00 PM',
      '8:00 PM to 11:00 PM',
    ],
  },
];

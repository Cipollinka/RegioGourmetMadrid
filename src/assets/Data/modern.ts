import {ImageSourcePropType} from 'react-native';

type Restaurant = {
  name: string;
  description: string;
  rating: number;
  image: ImageSourcePropType;
  reviews: number;
  address: string;
  coordinates: {latitude: number; longitude: number};
  openingHours: string[];
};

const restaurants: Restaurant[] = [
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
    name: 'Ramen Kagura',
    description:
      'A modern Japanese restaurant known for its authentic ramen and sushi offerings.',
    rating: 4.5,
    reviews: 500,
    image: require('../images/modern_two_photo.png'),
    address: 'Calle de Vallehermoso, 79, Moncloa-Aravaca, 28015 Madrid, Spain',
    coordinates: {latitude: 40.4366, longitude: -3.7163},
    openingHours: [
      'Monday to Sunday from 1:00 PM to 4:00 PM',
      '8:00 PM to 11:00 PM',
    ],
  },
  {
    name: 'Saddle',
    description:
      'A Michelin-starred restaurant offering a contemporary dining experience with a focus on seasonal ingredients.',
    rating: 4.5,
    reviews: 300,
    image: require('../images/modern_three_photo.png'),
    address: 'Calle de Orellana, 6, Salamanca, 28006 Madrid, Spain',
    coordinates: {latitude: 40.4261, longitude: -3.6846},
    openingHours: [
      'Tuesday to Saturday from 1:30 PM to 3:30 PM',
      '8:00 PM to 10:00 PM',
    ],
  },
  {
    name: 'Álbora',
    description:
      'A modern eatery offering a fusion of traditional Spanish and international cuisines.',
    rating: 4.5,
    reviews: 400,
    image: require('../images/modern_four_photo.png'),
    address: 'Calle de Jorge Juan, 33, Salamanca, 28001 Madrid, Spain',
    coordinates: {latitude: 40.4279, longitude: -3.6817},
    openingHours: [
      'Monday to Sunday from 1:00 PM to 4:00 PM',
      '8:00 PM to 11:00 PM',
    ],
  },
  {
    name: 'Sushi 99',
    description:
      'A contemporary sushi restaurant known for its fresh ingredients and innovative rolls.',
    rating: 4.5,
    reviews: 600,
    image: require('../images/modern_five_photo.png'),
    address: 'Calle de Vallehermoso, 79, Moncloa-Aravaca, 28015 Madrid, Spain',
    coordinates: {latitude: 40.4367, longitude: -3.7165},
    openingHours: [
      'Monday to Sunday from 1:00 PM to 4:00 PM',
      '8:00 PM to 11:00 PM',
    ],
  },
];

export default restaurants;
